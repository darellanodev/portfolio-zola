const { updateInZola } = require('./update_giftowerdefense_demo/zola')
const {
  updateInDarellanodevGithubIoProject,
} = require('./update_giftowerdefense_demo/darellanodev_github_io')

export const updateGifTowerDefenseDemo = (debugMode: boolean) => {
  console.log('starting updating giftowerdefense playable demo')
  console.log('-----------------------------------------------')
  // The order is important. First update in zola
  updateInZola(debugMode)
  updateInDarellanodevGithubIoProject(debugMode)
}
