const {
  transferFolderFromZolaToDarellanodevGithubIoProject,
} = require('../lib/directories')

export const updateInDarellanodevGithubIoProject = (debugMode: boolean) => {
  console.log(
    'starting updating giftowerdefense in DarellanodevGithubIoProject',
  )

  transferFolderFromZolaToDarellanodevGithubIoProject(
    debugMode,
    'giftowerdefense',
  )
}
