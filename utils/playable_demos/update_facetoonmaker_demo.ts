const { updateInZola } = require('./update_facetoonmaker_demo/zola')
const {
  updateInDarellanodevGithubIoProject,
} = require('./update_facetoonmaker_demo/darellanodev_github_io')

export const updateFaceToonMaker = (debugMode: boolean) => {
  console.log('starting updating facetoonmaker playable demo')
  console.log('------------------------------------------')
  // The order is important. First update in zola
  updateInZola(debugMode)
  updateInDarellanodevGithubIoProject(debugMode)
}
