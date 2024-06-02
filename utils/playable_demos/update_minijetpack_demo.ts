const { updateInZola } = require('./update_minijetpack_demo/zola')
const {
  updateInDarellanodevGithubIoProject,
} = require('./update_minijetpack_demo/darellanodev_github_io')

export const updateMiniJetpackDemo = (debugMode: boolean) => {
  console.log('starting updating minijetpack playable demo')
  console.log('-------------------------------------------')
  // The order is important. First update in zola
  updateInZola(debugMode)
  updateInDarellanodevGithubIoProject(debugMode)
}
