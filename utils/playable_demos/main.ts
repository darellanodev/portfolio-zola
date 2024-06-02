'use strict'
const { updateGifTowerDefenseDemo } = require('./update_giftowerdefense_demo')
const { updateJSConceptsDemo } = require('./update_jsconcepts_demo')
const { updateMiniJetpackDemo } = require('./update_minijetpack_demo')

const main = (debugMode: boolean) => {
  console.log('start updating demos')
  updateGifTowerDefenseDemo(debugMode)
  updateJSConceptsDemo(debugMode)
  updateMiniJetpackDemo(debugMode)
}
const debugMode = false
main(debugMode)
