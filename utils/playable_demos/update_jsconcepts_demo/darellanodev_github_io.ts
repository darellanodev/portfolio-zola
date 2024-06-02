const {
  transferFolderFromZolaToDarellanodevGithubIoProject,
} = require('../lib/directories')

export const updateInDarellanodevGithubIoProject = (debugMode: boolean) => {
  console.log('starting updating jsconcepts in DarellanodevGithubIoProject')

  transferFolderFromZolaToDarellanodevGithubIoProject(debugMode, 'jsconcepts')
}
