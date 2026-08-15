## Context

The site is a static portfolio built with Zola (theme `tabi`) and deployed by copying `public/` to `darellanodev.github.io`. The homepage (`templates/main-page.html`) renders an intro banner, then a "Latest projects" list. The owner publishes regular YouTube videos (Herramientas IA series, Spanish audio) under the channel `@Darellanodev` (channel id `UCSFCXW_oJEU584sOxi3zn7Q`), which currently has no presence on the homepage.

The site has a strict Content-Security-Policy: `img-src` already allows `https://*`, and `script-src` is `'self'` only. There is no `connect-src` allowance for external hosts.

The channel's public RSS feed (`https://www.youtube.com/feeds/videos.xml?channel_id=UCSFCXW_oJEU584sOxi3zn7Q`) returns the latest uploads with video id, title, publish date, and thumbnail URL — no API key required.

## Goals / Non-Goals

**Goals:**
- Show the 3 most recent channel videos on the homepage, between the intro banner and the "Latest projects" section.
- Cards show thumbnail + title only, linking to the video on YouTube in a new tab.
- Keep the site fully static: zero client-side JS for this feature, no CSP changes.
- Keep the section automatically current on every build without manual edits.

**Non-Goals:**
- No inline video player / embedded playback.
- No i18n for the section title (hardcoded "Latest videos (Spanish audio)").
- No YouTube Data API usage.
- No display of publish dates.

## Decisions

### D1: Build-time RSS fetch into a committed data file
A small dependency-free Node script (`utils/fetch_latest_videos.mjs`, Node 24 with built-in `fetch`) downloads the RSS feed on each build and writes `data/latest_videos.toml` with the 3 newest entries. The template reads it via Zola's `load_data`.

**Rationale:** matches the static philosophy, updates automatically, and the committed data file means `zola build` succeeds offline. Node is already available on the machine.

**Alternatives considered:**
- Client-side JS fetch via CORS proxy — rejected: requires relaxing `connect-src` in the CSP and adds a third-party runtime dependency.
- Manual data maintenance — rejected by user; wants auto-update.
- YouTube Data API v3 — rejected: requires API key, overkill for 3 items.

### D2: New tab link, not inline player
Each card is an `<a target="_blank" rel="noopener noreferrer">` to `https://www.youtube.com/watch?v=<id>`, with the thumbnail (`https://i.ytimg.com/vi/<id>/hqdefault.jpg`) and title inside.

**Rationale:** requested by user; works under the current CSP (`img-src https://*` already allows `i.ytimg.com`), no JS, no iframe.

**Alternative considered:** lazy-load `youtube-nocookie.com` iframe on click — possible under the current CSP `frame-src`, but adds JS and page weight; rejected by user.

### D3: Canonical thumbnail host
Build thumbnail URLs from the video id using `https://i.ytimg.com/vi/<id>/hqdefault.jpg` instead of storing the per-entry host from the feed (which varies `i2`/`i3`/`i4`).

### D4: Resilient fetch script
On network failure the script leaves the existing data file untouched and exits `0`; the build scripts call it with `|| true`. Fresh clones / offline builds still render whatever was last committed.

### D5: No CSP, no i18n, no new JS assets
Confirmed by inspection: `img-src https://*` covers thumbnails, `target="_blank"` needs no `script-src` change, and the title is hardcoded per user decision.

## Risks / Trade-offs

- RSS feed shape could change → the script is tolerant: it only writes when it parses at least 1 valid entry, and keeps old data otherwise.
- Video count: feed sometimes returns fewer than 3 entries (very new channel) → template renders whatever exists (0..3 cards); requirement says "three most recent", degrade gracefully.
- Data drift: if the script never runs (e.g., manual `zola serve` without `run.sh`) the section shows the last committed videos → acceptable; documented in the script header.
- Non-ASCII titles (Spanish, emoji) → TOML is UTF-8 and the script escapes quotes; titles are also HTML-escaped by Zola's autoescape in the template.
