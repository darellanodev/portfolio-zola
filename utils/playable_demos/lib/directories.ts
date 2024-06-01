const fs = require('fs')

export const deleteDestinyDir = (debugMode: boolean, destinyPath: string) => {
  if (fs.existsSync(destinyPath)) {
    console.log(`deleting destiny path ${destinyPath}`)
    if (debugMode === false) {
      console.log('lets do it')
      fs.rmSync(destinyPath, { recursive: true })
    } else {
      console.log('debugMode mode: dont apply changes to filesystem')
    }
  }
}
export const recreateDestinyDir = (debugMode: boolean, destinyPath: string) => {
  console.log(`recreating destiny dir ${destinyPath}`)
  if (debugMode === false) {
    console.log('lets do it')
    fs.mkdirSync(destinyPath)
  } else {
    console.log('debugMode mode: dont apply changes to filesystem')
  }
}
export const copyFolderFromOriginToDestiny = (
  debugMode: boolean,
  originPath: string,
  folderPath: string,
  destinyPath: string,
) => {
  const imgResourcesPathOrigin = originPath + '\\' + folderPath
  const imgResourcesPathDestiny = destinyPath + '\\' + folderPath
  console.log(
    `copying folder ${imgResourcesPathOrigin} to ${imgResourcesPathDestiny}`,
  )
  if (debugMode === false) {
    console.log('lets do it')
    fs.cpSync(imgResourcesPathOrigin, imgResourcesPathDestiny, {
      recursive: true,
    })
  } else {
    console.log('debugMode mode: dont apply changes to filesystem')
  }
}

export const transferFolderFromZolaToDarellanodevGithubIoProject = (
  debugMode: boolean,
  folder: string,
) => {
  const rootPath = 'D:\\xampp\\htdocs\\proyectos'
  let destinyPath =
    rootPath + '\\darellanodev.github.io\\playablegames\\' + folder
  deleteDestinyDir(debugMode, destinyPath)

  destinyPath = rootPath + '\\darellanodev.github.io\\playablegames'
  const originPath = rootPath + '\\portfolio-zola\\static\\playablegames'
  copyFolderFromOriginToDestiny(debugMode, originPath, folder, destinyPath)
}
