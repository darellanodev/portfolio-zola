const { updateInZola } = require('./update_giftowerdefense_demo/zola')
const {
  updateInDarellanodevGithubIoProject,
} = require('./update_giftowerdefense_demo/darellanodev_github_io')

export const updateGifTowerDefenseDemo = (debugMode: boolean) => {
  console.log('starting updating gif tower defense playable demo')
  updateInZola(debugMode)
  updateInDarellanodevGithubIoProject(debugMode)
}
