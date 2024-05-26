'use strict';
const { updateGifTowerDefenseDemo } = require('./demo_giftowerdefense');
const { updateJSConceptsDemo } = require('./demo_jsconcepts');
const main = (debugMode) => {
    console.log('start updating demos');
    updateGifTowerDefenseDemo(debugMode);
    updateJSConceptsDemo(debugMode);
};
const debugMode = true;
main(debugMode);
