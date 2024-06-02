const {
  transferFolderFromZolaToDarellanodevGithubIoProject,
} = require('../lib/directories')

export const updateInDarellanodevGithubIoProject = (debugMode: boolean) => {
  console.log('starting updating minijetpack in DarellanodevGithubIoProject')

  transferFolderFromZolaToDarellanodevGithubIoProject(debugMode, 'minijetpack')
}
