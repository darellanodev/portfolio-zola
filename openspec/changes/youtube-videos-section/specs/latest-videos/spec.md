## ADDED Requirements

### Requirement: Homepage shows latest videos section
The homepage SHALL render a "Latest videos (Spanish audio)" section between the intro banner and the "Latest projects" section. The section SHALL display the three most recent videos published on the Darellanodev YouTube channel.

#### Scenario: Homepage with videos data
- **WHEN** the homepage is built and the videos data file exists and contains three videos
- **THEN** the page renders the section header "Latest videos (Spanish audio)" followed by three video cards, each showing the video thumbnail and title, ordered newest first

#### Scenario: Homepage without videos data
- **WHEN** the homepage is built and the videos data file is missing or empty
- **THEN** the page renders without the latest videos section and without errors

#### Scenario: Placement on the page
- **WHEN** the homepage is rendered with all sections present
- **THEN** the latest videos section appears below the intro banner and above the "Latest projects" heading

### Requirement: Video data generated at build time
The build process SHALL fetch the three most recent videos from the channel RSS feed at `https://www.youtube.com/feeds/videos.xml?channel_id=UCSFCXW_oJEU584sOxi3zn7Q` and store them in the data file used by the homepage section. The data file SHALL be committed to the repository so builds work without network access.

#### Scenario: Successful fetch
- **WHEN** `node utils/fetch_latest_videos.mjs` runs and the RSS feed is reachable
- **THEN** it writes the data file containing the three newest entries with their video id, title, and publish date, and exits successfully

#### Scenario: Network failure
- **WHEN** `node utils/fetch_latest_videos.mjs` runs and the RSS feed is unreachable
- **THEN** the script leaves the existing data file unchanged and exits successfully without failing the build

#### Scenario: Fetch before build
- **WHEN** `./run_build.sh` or the serve flow of `./run.sh` is executed
- **THEN** the fetch script runs before the Zola build or serve command so the section reflects the latest videos

### Requirement: Video cards link out to YouTube
Each video card SHALL be a link to the video on YouTube (`https://www.youtube.com/watch?v=<video-id>`) that opens in a new tab. The card SHALL display the video thumbnail (loaded from `i.ytimg.com`) and the video title, and SHALL NOT embed a player.

#### Scenario: Clicking a video card
- **WHEN** a user clicks a video card on the homepage
- **THEN** a new tab opens with the corresponding video on YouTube

#### Scenario: Card content
- **WHEN** the section is rendered
- **THEN** each card shows the thumbnail image with the video title as alt text and a title heading, and no publish date is displayed
