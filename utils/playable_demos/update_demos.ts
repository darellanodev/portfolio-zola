const fs = require('fs')

const deleteDestinyDir = (debugMode: boolean, destinyPath: string) => {
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

const recreateDestinyDir = (debugMode: boolean, destinyPath: string) => {
    console.log(`recreating destiny dir ${destinyPath}`)
    if (debugMode === false){
        console.log('lets do it')
        fs.mkdirSync(destinyPath)    
    } else {
        console.log('debugMode mode: dont apply changes to filesystem')
    }
}

const createDistDir = (debugMode: boolean, destinyDistPath: string) => {
    console.log(`recreating dist dir ${destinyDistPath}`)
    if (debugMode === false){
        console.log('lets do it')
        fs.mkdirSync(destinyDistPath)    
    } else {
        console.log('debugMode mode: dont apply changes to filesystem')
    }
}

const copyFolderFromOriginToDestiny = (debugMode: boolean, originPath: string, folderPath: string, destinyPath: string) => {
    const imgResourcesPathOrigin = originPath + '\\' + folderPath
    const imgResourcesPathDestiny = destinyPath + '\\' + folderPath
    console.log(`copying folder ${imgResourcesPathOrigin} to ${imgResourcesPathDestiny}`)
    if (debugMode === false){
        console.log('lets do it')
        fs.cpSync(imgResourcesPathOrigin, imgResourcesPathDestiny, {recursive: true})
    } else {
        console.log('debugMode mode: dont apply changes to filesystem')
    }
}

const getJSFile = (content: string) => {
    const aux1 = content.split('<script src="')[1]
    const aux2 = aux1.split('"></script')[0]
    return aux2
}

const copyIndexJSReference = (debugMode: boolean, indexPath: string, distPath: string, destinyPath: string) => {

    console.log(`looking inside ${indexPath} for the .js resource`)
    const indexContents = fs.readFile(indexPath, 'utf-8', (err: any, data: string) => {
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

const copyIndexToDestiny = (debugMode: boolean, indexPath: string, destinyPath: string, destinyName: string) => {
    const indexPathDestiny = destinyPath + "\\" + destinyName
    console.log(`copying ${indexPath} to ${indexPathDestiny}`)
    if (debugMode === false){
        console.log('lets do it')
        fs.copyFileSync(indexPath, indexPathDestiny)
    } else {
        console.log('debugMode mode: dont apply changes to filesystem')
    }
}

const copyTemplateIndex = (debugMode: boolean, indexPath: string, destinyPath: string) => {

    const destinyPathTemplate = destinyPath + "\\index.html"
    console.log(`copying ${indexPath} to ${destinyPathTemplate}`)
    if (debugMode === false){
        console.log('lets do it')
        fs.copyFileSync(indexPath, destinyPathTemplate)
    } else {
        console.log('debugMode mode: dont apply changes to filesystem')
    }
}

const updateGifTowerDefenseDemo = (debugMode: boolean) => {

    console.log('starting updating gif tower defense playable demo')

    const rootPath = 'D:\\xampp\\htdocs\\proyectos'
    const originPath = rootPath + '\\gif-tower-defense-p5js'
    const destinyPath = rootPath + '\\portfolio-zola\\static\\playablegames\\giftowerdefense'   
    const destinyDistPath = destinyPath + '\\dist'   
    
    const templateIndex = rootPath + '\\portfolio-zola\\utils\\playable_demos\\templates\\index_giftowerdefense.html'   

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

const updateJSConceptsDemo = (debugMode: boolean) => {

    console.log('start updating JS Concepts playable demo')

    const rootPath = 'D:\\xampp\\htdocs\\proyectos'
    const originPath = rootPath + '\\js-concepts'
    const destinyPath = rootPath + '\\portfolio-zola\\static\\playablegames\\js_concepts'   
    const indexPath = originPath + '\\index.html'

    deleteDestinyDir(debugMode, destinyPath)
    recreateDestinyDir(debugMode, destinyPath)
    
    const originFolders = ['img', 'js']
    originFolders.forEach((originFolder) => {
        copyFolderFromOriginToDestiny(debugMode, originPath, originFolder, destinyPath)
    })

    copyIndexToDestiny(debugMode, indexPath, destinyPath, 'index.html')
}

const main = (debugMode: boolean) => {
    console.log('start updating demos')

    // updateGifTowerDefenseDemo(debugMode)
    updateJSConceptsDemo(debugMode)
}

const debugMode = true
main(debugMode)