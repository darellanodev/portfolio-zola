#!/bin/bash
./run_utils_tsc.sh
node ./utils/dist/playable_demos/main.js
cp -r ./utils/playable_demos/templates ./utils/dist/playable_demos/