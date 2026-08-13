## Why

The portfolio homepage shows the intro banner and then jumps straight into the latest projects. The user publishes regular YouTube videos (Herramientas IA series, Spanish audio) but they are not visible on the homepage, so visitors can't discover them.

## What Changes

- Add a new "Latest videos" section on the homepage, placed between the intro/presentation banner and the "Latest projects" section.
- The section shows the 3 most recent videos from the YouTube channel `Darellanodev` as clickable thumbnails with their titles.
- Clicking a thumbnail opens the video on YouTube in a new tab.
- Video data is fetched at build time from the public YouTube RSS feed (channel `UCSFCXW_oJEU584sOxi3zn7Q`) and cached in a committed data file, so the section stays current without manual updates and the build still works offline.
- The section header reads exactly: `Latest videos (Spanish audio)`. No i18n changes.
- No CSP changes and no client-side JavaScript.

## Capabilities

### New Capabilities
- `latest-videos`: Homepage section that lists the 3 most recent YouTube channel videos, fed from a build-time-generated data file.

### Modified Capabilities
<!-- None -->

## Impact

- **New file** `utils/fetch_latest_videos.mjs` (Node script, no dependencies): fetches the channel RSS feed and writes `data/latest_videos.toml`.
- **New file** `data/latest_videos.toml`: committed cache of the 3 latest videos (id, title, date).
- **New template** `templates/partials/latest_videos.html`: renders the section (header + responsive grid of thumbnail cards).
- **Modified** `templates/main-page.html`: include the new partial between the home banner and the projects list.
- **Modified** `sass/main.scss` + **new** `sass/parts/_latest_videos.scss`: styles for the video grid/cards.
- **Modified** `run_build.sh` and `run.sh`: invoke the fetch script before `zola.exe build` / `zola.exe serve`.
- **External systems:** reads YouTube RSS feed at `https://www.youtube.com/feeds/videos.xml?channel_id=UCSFCXW_oJEU584sOxi3zn7Q`; thumbnails loaded from `i.ytimg.com`.
