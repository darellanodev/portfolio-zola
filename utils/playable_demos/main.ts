'use strict'
const { updateGifTowerDefenseDemo } = require('./update_giftowerdefense_demo')
const { updateJSConceptsDemo } = require('./update_jsconcepts_demo')
const { updateJetpackDemo } = require('./update_jetpack_demo')
const { updateDailyBoostCalendar } = require('./update_dailyboostcalendar_demo')
const { updateFaceToonMaker } = require('./update_facetoonmaker_demo')

const main = (debugMode: boolean) => {
  console.log('start updating demos')
  updateGifTowerDefenseDemo(debugMode)
  updateJSConceptsDemo(debugMode)
  updateJetpackDemo(debugMode)
  updateFaceToonMaker(debugMode)
}
const debugMode = false
main(debugMode)
