const { updateInZola } = require('./update_jetpack_demo/zola')
const {
  updateInDarellanodevGithubIoProject,
} = require('./update_jetpack_demo/darellanodev_github_io')

export const updateJetpackDemo = (debugMode: boolean) => {
  console.log('starting updating jetpack playable demo')
  console.log('-------------------------------------------')
  // The order is important. First update in zola
  updateInZola(debugMode)
  updateInDarellanodevGithubIoProject(debugMode)
}
