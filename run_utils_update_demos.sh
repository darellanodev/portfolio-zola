#!/bin/bash
npx tsc
cp -r D:\\xampp\\htdocs\\proyectos\\portfolio-zola\\utils\\playable_demos\\templates D:\\xampp\\htdocs\\proyectos\\portfolio-zola\\utils\\dist\\playable_demos
node ./utils/dist/playable_demos/main.js
cp -r ./utils/playable_demos/templates ./utils/dist/playable_demos/