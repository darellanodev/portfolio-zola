const { updateInZola } = require('./update_dailyboostcalendar_demo/zola')
const {
  updateInDarellanodevGithubIoProject,
} = require('./update_dailyboostcalendar_demo/darellanodev_github_io')

export const updateDailyBoostCalendar = (debugMode: boolean) => {
  console.log('starting updating dailyboostcalendar playable demo')
  console.log('------------------------------------------')
  // The order is important. First update in zola
  updateInZola(debugMode)
  updateInDarellanodevGithubIoProject(debugMode)
}
