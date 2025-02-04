const {
  deleteDestinyDir,
  recreateDestinyDir,
  copyFolderFromOriginToDestiny,
} = require('../lib/directories')

const { copyIndexToDestiny, copyFileToDestiny } = require('../lib/files')

const fs = require('fs')

const createDistDir = (debugMode: boolean, destinyDistPath: string) => {
  console.log(`recreating dist dir ${destinyDistPath}`)
  if (debugMode === false) {
    console.log('lets do it')
    fs.mkdirSync(destinyDistPath)
  } else {
    console.log('debugMode mode: dont apply changes to filesystem')
  }
}

const getJSFile = (content: string) => {
  const aux1 = content.split('<script src="')[1]
  const aux2 = aux1.split('"></script')[0]
  return aux2
}

const copyIndexJSReference = (
  debugMode: boolean,
  indexPath: string,
  distPath: string,
  destinyPath: string,
) => {
  console.log(`looking inside ${indexPath} for the .js resource`)
  const indexContents = fs.readFileSync(indexPath, 'utf-8')
  const jsFilename = getJSFile(indexContents)
  const jsPathOrigin = distPath + '\\' + jsFilename
  const jsPathDestiny = destinyPath + '\\' + jsFilename

  // copy the referenced .js
  console.log(`copying ${jsPathOrigin} to ${jsPathDestiny}`)
  if (debugMode === false) {
    console.log('lets do it')
    copyFileToDestiny(debugMode, distPath, jsFilename, destinyPath, jsFilename)
  } else {
    console.log('debugMode mode: dont apply changes to filesystem')
  }
}

const copyTemplateIndex = (
  debugMode: boolean,
  indexPath: string,
  destinyPath: string,
) => {
  const destinyPathTemplate = destinyPath + '\\index.html'
  console.log(`copying ${indexPath} to ${destinyPathTemplate}`)
  if (debugMode === false) {
    console.log('lets do it')
    fs.copyFileSync(indexPath, destinyPathTemplate)
  } else {
    console.log('debugMode mode: dont apply changes to filesystem')
  }
}

export const updateInZola = (debugMode: boolean) => {
  console.log('starting updating giftowerdefense in Zola')
  const rootPath = 'D:\\xampp\\htdocs\\proyectos'
  let originPath = rootPath + '\\gif-tower-defense-p5js'
  let destinyPath =
    rootPath + '\\portfolio-zola\\static\\tryitonline\\giftowerdefense'
  const destinyDistPath = destinyPath + '\\dist'
  const templateIndex =
    rootPath +
    '\\portfolio-zola\\utils\\playable_demos\\templates\\index_giftowerdefense.html'
  const distPath = originPath + '\\dist'
  const indexPath = distPath + '\\index.html'
  deleteDestinyDir(debugMode, destinyPath)
  recreateDestinyDir(debugMode, destinyPath)
  createDistDir(debugMode, destinyDistPath)
  copyFolderFromOriginToDestiny(debugMode, originPath, 'img', destinyPath)
  copyIndexToDestiny(debugMode, indexPath, destinyDistPath, 'main.html')
  copyTemplateIndex(debugMode, templateIndex, destinyPath)
  copyIndexJSReference(debugMode, indexPath, distPath, destinyDistPath)
}
