## 1. Fetch script

- [x] 1.1 Create `utils/fetch_latest_videos.mjs` that fetches the RSS feed `https://www.youtube.com/feeds/videos.xml?channel_id=UCSFCXW_oJEU584sOxi3zn7Q` with built-in `fetch`
- [x] 1.2 Parse the first 3 `<entry>` blocks (video id, title, publish date) and write `data/latest_videos.toml` as `[[videos]] id/title/date` (TOML-escape titles)
- [x] 1.3 On network/parse failure leave the existing data file untouched and exit 0; resolve paths relative to the repo root
- [x] 1.4 Run the script once and commit the generated `data/latest_videos.toml`

## 2. Templates

- [x] 2.1 Create `templates/partials/latest_videos.html` that loads `latest_videos.toml`, renders page header "Latest videos (Spanish audio)" and a `.video-grid` of `.video-card` links (thumbnail + title, `target="_blank" rel="noopener noreferrer"`), and skips gracefully when data is missing
- [x] 2.2 Include the partial in `templates/main-page.html` between the home banner include and the `<div class="list">`

## 3. Styles

- [x] 3.1 Create `sass/parts/_latest_videos.scss` with a responsive 3-column (desktop) to 1-column (mobile) grid of 16:9 thumbnail cards using theme CSS variables
- [x] 3.2 Import the new partial in `sass/main.scss` (alphabetical position between `_image` and `_misc`)

## 4. Build wiring

- [x] 4.1 Add `node utils/fetch_latest_videos.mjs || true` before `./zola.exe build` in `run_build.sh`
- [x] 4.2 Add the same fetch call before `./zola.exe serve` in the serve option of `run.sh`

## 5. Verification

- [x] 5.1 Build with `./zola.exe build` and confirm the homepage renders the videos section between the banner and "Latest projects"
- [x] 5.2 Verify cards link to the correct YouTube watch URLs with `target="_blank"` and thumbnails load from `i.ytimg.com`
- [x] 5.3 Verify the section disappears gracefully when `data/latest_videos.toml` is temporarily removed
