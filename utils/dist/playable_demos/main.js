'use strict';
const { updateGifTowerDefenseDemo } = require('./update_giftowerdefense_demo');
const { updateJSConceptsDemo } = require('./update_jsconcepts_demo');
const { updateMiniJetPackDemo } = require('./update_minijetpack_demo');
const main = (debugMode) => {
    console.log('start updating demos');
    updateGifTowerDefenseDemo(debugMode);
    // updateJSConceptsDemo(debugMode)
    // updateMiniJetPackDemo(debugMode)
};
const debugMode = false;
main(debugMode);