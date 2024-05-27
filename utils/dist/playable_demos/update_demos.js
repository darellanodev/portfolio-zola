'use strict';
const { updateGifTowerDefenseDemo } = require('./demo_giftowerdefense');
const { updateJSConceptsDemo } = require('./demo_jsconcepts');
const { updateMiniJetPackDemo } = require('./demo_minijetpack');
const main = (debugMode) => {
    console.log('start updating demos');
    updateGifTowerDefenseDemo(debugMode);
    updateJSConceptsDemo(debugMode);
    updateMiniJetPackDemo(debugMode);
};
const debugMode = false;
main(debugMode);
