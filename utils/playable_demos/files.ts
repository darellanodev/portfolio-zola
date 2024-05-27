const fs = require('fs')

export const copyIndexToDestiny = (
  debugMode: boolean,
  indexPath: string,
  destinyPath: string,
  destinyName: string,
) => {
  const indexPathDestiny = destinyPath + '\\' + destinyName
  console.log(`copying ${indexPath} to ${indexPathDestiny}`)
  if (debugMode === false) {
    console.log('lets do it')
    fs.copyFileSync(indexPath, indexPathDestiny)
  } else {
    console.log('debugMode mode: dont apply changes to filesystem')
  }
}
export const copyFileToDestiny = (
  debugMode: boolean,
  originPath: string,
  fileName: string,
  destinyPath: string,
  destinyFileName: string,
) => {
  const originFilePath = originPath + '\\' + fileName
  const destinyFilePath = destinyPath + '\\' + destinyFileName

  console.log(`copying ${originFilePath} to ${destinyFilePath}`)
  if (debugMode === false) {
    console.log('lets do it')
    fs.copyFileSync(originFilePath, destinyFilePath)
  } else {
    console.log('debugMode mode: dont apply changes to filesystem')
  }
}
