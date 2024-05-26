const {
  deleteDestinyDir,
  recreateDestinyDir,
  copyFolderFromOriginToDestiny,
} = require('./directories')
const { copyIndexToDestiny } = require('./files')

export const updateJSConceptsDemo = (debugMode: boolean) => {
  console.log('start updating JS Concepts playable demo')
  const rootPath = 'D:\\xampp\\htdocs\\proyectos'
  const originPath = rootPath + '\\js-concepts'
  const destinyPath =
    rootPath + '\\portfolio-zola\\static\\playablegames\\js_concepts'
  const indexPath = originPath + '\\index.html'
  deleteDestinyDir(debugMode, destinyPath)
  recreateDestinyDir(debugMode, destinyPath)
  const originFolders = ['img', 'js']
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
