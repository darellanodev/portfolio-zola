const {
  deleteDestinyDir,
  recreateDestinyDir,
  copyFolderFromOriginToDestiny,
} = require('../lib/directories')
const { copyIndexToDestiny } = require('../lib/files')

export const updateInZola = (debugMode: boolean) => {
  console.log('start updating JS Concepts playable demo')
  const rootPath = 'D:\\xampp\\htdocs\\proyectos'
  const originPath = rootPath + '\\js-concepts'
  const destinyPath =
    rootPath + '\\portfolio-zola\\static\\tryitonline\\jsconcepts'
  const indexPath = originPath + '\\index.html'
  deleteDestinyDir(debugMode, destinyPath)
  recreateDestinyDir(debugMode, destinyPath)
  const originFolders = ['css', 'js']
  originFolders.forEach((originFolder) => {
    copyFolderFromOriginToDestiny(
      debugMode,
      originPath,
      originFolder,
      destinyPath,
    )
  })
  copyIndexToDestiny(debugMode, indexPath, destinyPath, 'index.html')
}
