const fs = require('fs')

const deleteDestinyDir = (debugMode, destinyPath) => {
    if (fs.existsSync(destinyPath)) {
        console.log(`deleting destiny path ${destinyPath}`)
        if (debugMode === false){
            console.log('lets do it')
            fs.rmSync(destinyPath, {recursive: true})
        } else {
            console.log('debugMode mode: dont apply changes to filesystem')
        }
    }
}

const recreateDestinyDir = (debugMode, destinyPath) => {
    console.log(`recreating destiny dir ${destinyPath}`)
    if (debugMode === false){
        console.log('lets do it')
        fs.mkdirSync(destinyPath)    
    } else {
        console.log('debugMode mode: dont apply changes to filesystem')
    }
}

const createDistDir = (debugMode, destinyDistPath) => {
    console.log(`recreating dist dir ${destinyDistPath}`)
    if (debugMode === false){
        console.log('lets do it')
        fs.mkdirSync(destinyDistPath)    
    } else {
        console.log('debugMode mode: dont apply changes to filesystem')
    }
}

const copyResourcesFolderFromOriginToDestiny = (debugMode, originPath, destinyPath) => {
    const imgResourcesPathOrigin = originPath + '\\img'
    const imgResourcesPathDestiny = destinyPath + '\\img'
    console.log(`copying folder ${imgResourcesPathOrigin} to ${imgResourcesPathDestiny}`)
    if (debugMode === false){
        console.log('lets do it')
        fs.cpSync(imgResourcesPathOrigin, imgResourcesPathDestiny, {recursive: true})
    } else {
        console.log('debugMode mode: dont apply changes to filesystem')
    }
}

const getJSFile = (content) => {
    const aux1 = content.split('<script src="')[1]
    const aux2 = aux1.split('"></script')[0]
    return aux2
}

const copyIndexJSReference = (debugMode, indexPath, distPath, destinyPath) => {

    console.log(`looking inside ${indexPath} for the .js resource`)
    const indexContents = fs.readFile(indexPath, 'utf-8', (err, data) => {
        if (err) throw err
        const jsPathOrigin = distPath + "\\" + getJSFile(data)
        const jsPathDestiny = destinyPath + "\\" + getJSFile(data)
        // copy the referenced .js
        console.log(`copying ${jsPathOrigin} to ${jsPathDestiny}`)
        if (debugMode === false){
            console.log('lets do it')
            fs.copyFileSync(jsPathOrigin, jsPathDestiny)
        } else {
            console.log('debugMode mode: dont apply changes to filesystem')
        }
    })
}

const copyIndex = (debugMode, indexPath, destinyPath) => {
    const indexPathDestiny = destinyPath + "\\index.html"
    console.log(`copying ${indexPath} to ${indexPathDestiny}`)
    if (debugMode === false){
        console.log('lets do it')
        fs.copyFileSync(indexPath, indexPathDestiny)
    } else {
        console.log('debugMode mode: dont apply changes to filesystem')
    }
}

const updateGifTowerDefenseDemo = (debugMode) => {

    const rootPath = 'D:\\xampp\\htdocs\\proyectos'
    const originPath = rootPath + '\\gif-tower-defense-p5js'
    const destinyPath = rootPath + '\\portfolio-zola\\static\\playablegames\\giftowerdefense'   
    const destinyDistPath = destinyPath + '\\dist'   

    const distPath = originPath + '\\dist'
    const indexPath = distPath + '\\index.html'

    console.log('starting updating demos')
    deleteDestinyDir(debugMode, destinyPath)
    recreateDestinyDir(debugMode, destinyPath)
    createDistDir(debugMode, destinyDistPath)
    copyResourcesFolderFromOriginToDestiny(debugMode, originPath, destinyPath)
    copyIndex(debugMode, indexPath, destinyDistPath)
    copyIndexJSReference(debugMode, indexPath, distPath, destinyDistPath) 
}

const main = (debugMode) => {
    updateGifTowerDefenseDemo(debugMode)
}

const debugMode = false
main(debugMode)