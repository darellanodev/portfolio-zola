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
