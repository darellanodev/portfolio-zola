const {
  transferFolderFromZolaToDarellanodevGithubIoProject,
} = require('../lib/directories')

export const updateInDarellanodevGithubIoProject = (debugMode: boolean) => {
  console.log('starting updating facetoonmaker in DarellanodevGithubIoProject')

  transferFolderFromZolaToDarellanodevGithubIoProject(
    debugMode,
    'facetoonmaker',
  )
}
