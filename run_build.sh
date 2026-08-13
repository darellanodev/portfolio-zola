#!/bin/bash
node utils/fetch_latest_videos.mjs || true
./zola.exe build