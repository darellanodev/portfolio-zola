const { updateInZola } = require('./update_jsconcepts_demo/zola')
const {
  updateInDarellanodevGithubIoProject,
} = require('./update_jsconcepts_demo/darellanodev_github_io')

export const updateJSConceptsDemo = (debugMode: boolean) => {
  console.log('starting updating jsconcepts playable demo')
  console.log('------------------------------------------')
  // The order is important. First update in zola
  updateInZola(debugMode)
  updateInDarellanodevGithubIoProject(debugMode)
}
