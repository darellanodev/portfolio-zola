'use strict';
const { updateGifTowerDefenseDemo } = require('./update_giftowerdefense_demo');
const { updateJSConceptsDemo } = require('./update_jsconcepts_demo');
const { updateJetpackDemo } = require('./update_jetpack_demo');
const { updateDailyBoostCalendar } = require('./update_dailyboostcalendar_demo');
const main = (debugMode) => {
    console.log('start updating demos');
    updateGifTowerDefenseDemo(debugMode);
    updateJSConceptsDemo(debugMode);
    updateJetpackDemo(debugMode);
    updateDailyBoostCalendar(debugMode);
};
const debugMode = false;
main(debugMode);
