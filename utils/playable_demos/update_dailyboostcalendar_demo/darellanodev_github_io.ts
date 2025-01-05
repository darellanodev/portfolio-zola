const {
  transferFolderFromZolaToDarellanodevGithubIoProject,
} = require('../lib/directories')

export const updateInDarellanodevGithubIoProject = (debugMode: boolean) => {
  console.log(
    'starting updating dailyboostcalendar in DarellanodevGithubIoProject',
  )

  transferFolderFromZolaToDarellanodevGithubIoProject(
    debugMode,
    'dailyboostcalendar',
  )
}
