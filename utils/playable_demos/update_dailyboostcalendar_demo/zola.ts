const {
  deleteDestinyDir,
  recreateDestinyDir,
  copyFolderFromOriginToDestiny,
} = require('../lib/directories')
const { copyIndexToDestiny } = require('../lib/files')

export const updateInZola = (debugMode: boolean) => {
  console.log('start updating dailyboostcalendar playable demo')
  const rootPath = 'D:\\xampp\\htdocs\\proyectos'
  const originPath = rootPath + '\\daily-boost-calendar\\dist'
  const destinyPath =
    rootPath + '\\portfolio-zola\\static\\tryitonline\\dailyboostcalendar'
  const indexPath = originPath + '\\index.html'
  deleteDestinyDir(debugMode, destinyPath)
  recreateDestinyDir(debugMode, destinyPath)
  copyFolderFromOriginToDestiny(debugMode, originPath, 'assets', destinyPath)
  copyFolderFromOriginToDestiny(debugMode, originPath, 'img', destinyPath)
  copyIndexToDestiny(debugMode, indexPath, destinyPath, 'index.html')
}
