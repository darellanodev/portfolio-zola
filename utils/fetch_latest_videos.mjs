#!/usr/bin/env node
// Fetches the latest 3 videos from the Darellanodev YouTube channel RSS feed
// and writes them to data/latest_videos.toml, so the homepage can render them
// at build time. On network/parse failure it leaves the existing file
// untouched and exits 0 so builds never fail.
//
// NOTE: running this script manually keeps data/latest_videos.toml in sync
// even when using `zola serve` outside of run.sh.

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';

const CHANNEL_ID = 'UCSFCXW_oJEU584sOxi3zn7Q';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const MAX_VIDEOS = 3;

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptDir, '..');
const dataDir = join(repoRoot, 'data');
const dataFile = join(dataDir, 'latest_videos.toml');

function tomlEscape(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\t/g, '\\t')
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n');
}

function parseFeed(xml) {
  const entries = [];
  const entryRe = /<entry>([\s\S]*?)<\/entry>/g;
  let match;
  while ((match = entryRe.exec(xml)) !== null && entries.length < MAX_VIDEOS) {
    const block = match[1];
    const idMatch = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = block.match(/<title>([\s\S]*?)<\/title>/);
    const publishedMatch = block.match(/<published>([^<]+)<\/published>/);
    if (!idMatch || !titleMatch) {
      continue;
    }
    entries.push({
      id: idMatch[1].trim(),
      title: titleMatch[1].replace(/^\s+|\s+$/g, ''),
      date: publishedMatch ? publishedMatch[1].slice(0, 10) : '',
    });
  }
  return entries;
}

async function main() {
  let entries;
  try {
    const res = await fetch(FEED_URL, { headers: { 'user-agent': 'portfolio-zola/1.0' } });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const xml = await res.text();
    entries = parseFeed(xml);
    if (entries.length === 0) {
      throw new Error('no video entries parsed from feed');
    }
  } catch (err) {
    console.error(`[fetch_latest_videos] Skipped, keeping existing data: ${err.message}`);
    process.exit(0);
  }

  const lines = [];
  for (const video of entries) {
    lines.push('[[videos]]');
    lines.push(`id = "${video.id}"`);
    lines.push(`title = "${tomlEscape(video.title)}"`);
    lines.push(`date = "${video.date}"`);
  }

  mkdirSync(dataDir, { recursive: true });
  writeFileSync(dataFile, `${lines.join('\n')}\n`, 'utf8');
  console.log(`[fetch_latest_videos] Wrote ${entries.length} videos to ${dataFile}`);
}

main();
