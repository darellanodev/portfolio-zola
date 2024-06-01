const {
  transferFolderFromZolaToDarellanodevGithubIoProject,
} = require('../lib/directories')

export const updateInDarellanodevGithubIoProject = (debugMode: boolean) => {
  console.log('starting updating jetpack in DarellanodevGithubIoProject')

  transferFolderFromZolaToDarellanodevGithubIoProject(debugMode, 'jetpack')
}
