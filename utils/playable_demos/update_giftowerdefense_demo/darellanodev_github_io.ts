const {
  deleteDestinyDir,
  copyFolderFromOriginToDestiny,
} = require('../lib/directories')

export const updateInDarellanodevGithubIoProject = (debugMode: boolean) => {
  console.log(
    'starting updating gif tower defense in DarellanodevGithubIoProject',
  )
  const rootPath = 'D:\\xampp\\htdocs\\proyectos'
  let destinyPath =
    rootPath + '\\darellanodev.github.io\\playablegames\\giftowerdefense'
  deleteDestinyDir(debugMode, destinyPath)

  destinyPath = rootPath + '\\darellanodev.github.io\\playablegames'
  const originPath = rootPath + '\\portfolio-zola\\static\\playablegames'
  copyFolderFromOriginToDestiny(
    debugMode,
    originPath,
    'giftowerdefense',
    destinyPath,
  )
}
