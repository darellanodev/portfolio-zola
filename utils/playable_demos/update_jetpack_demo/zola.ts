const { copyFileToDestiny } = require('../lib/files')
const { deleteDestinyDir, recreateDestinyDir } = require('../lib/directories')

export const updateInZola = (debugMode: boolean) => {
  console.log('starting updating jetpack playable demo')
  const rootPath = 'D:\\xampp\\htdocs\\proyectos'
  const originPath = rootPath + '\\go-jetpack-game'
  const destinyPath =
    rootPath + '\\portfolio-zola\\static\\tryitonline\\jetpack'

  deleteDestinyDir(debugMode, destinyPath)
  recreateDestinyDir(debugMode, destinyPath)

  const filesToCopy = [
    'index.html',
    'jetpackgame.wasm',
    'main.html',
    'style.css',
    'wasm_exec.js',
  ]

  const buildWebOriginPath = originPath + '\\build_web'

  filesToCopy.forEach((file) => {
    copyFileToDestiny(debugMode, buildWebOriginPath, file, destinyPath, file)
  })
}
