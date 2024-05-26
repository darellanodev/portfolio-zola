"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGifTowerDefenseDemo = void 0;
const { deleteDestinyDir, recreateDestinyDir, copyFolderFromOriginToDestiny, } = require('./directories');
const { copyIndexToDestiny } = require('./files');
const fs = require('fs');
const createDistDir = (debugMode, destinyDistPath) => {
    console.log(`recreating dist dir ${destinyDistPath}`);
    if (debugMode === false) {
        console.log('lets do it');
        fs.mkdirSync(destinyDistPath);
    }
    else {
        console.log('debugMode mode: dont apply changes to filesystem');
    }
};
const getJSFile = (content) => {
    const aux1 = content.split('<script src="')[1];
    const aux2 = aux1.split('"></script')[0];
    return aux2;
};
const copyIndexJSReference = (debugMode, indexPath, distPath, destinyPath) => {
    console.log(`looking inside ${indexPath} for the .js resource`);
    const indexContents = fs.readFile(indexPath, 'utf-8', (err, data) => {
        if (err)
            throw err;
        const jsPathOrigin = distPath + '\\' + getJSFile(data);
        const jsPathDestiny = destinyPath + '\\' + getJSFile(data);
        // copy the referenced .js
        console.log(`copying ${jsPathOrigin} to ${jsPathDestiny}`);
        if (debugMode === false) {
            console.log('lets do it');
            fs.copyFileSync(jsPathOrigin, jsPathDestiny);
        }
        else {
            console.log('debugMode mode: dont apply changes to filesystem');
        }
    });
};
const copyTemplateIndex = (debugMode, indexPath, destinyPath) => {
    const destinyPathTemplate = destinyPath + '\\index.html';
    console.log(`copying ${indexPath} to ${destinyPathTemplate}`);
    if (debugMode === false) {
        console.log('lets do it');
        fs.copyFileSync(indexPath, destinyPathTemplate);
    }
    else {
        console.log('debugMode mode: dont apply changes to filesystem');
    }
};
const updateGifTowerDefenseDemo = (debugMode) => {
    console.log('starting updating gif tower defense playable demo');
    const rootPath = 'D:\\xampp\\htdocs\\proyectos';
    const originPath = rootPath + '\\gif-tower-defense-p5js';
    const destinyPath = rootPath + '\\portfolio-zola\\static\\playablegames\\giftowerdefense';
    const destinyDistPath = destinyPath + '\\dist';
    const templateIndex = rootPath +
        '\\portfolio-zola\\utils\\playable_demos\\templates\\index_giftowerdefense.html';
    const distPath = originPath + '\\dist';
    const indexPath = distPath + '\\index.html';
    deleteDestinyDir(debugMode, destinyPath);
    recreateDestinyDir(debugMode, destinyPath);
    createDistDir(debugMode, destinyDistPath);
    copyFolderFromOriginToDestiny(debugMode, originPath, 'img', destinyPath);
    copyIndexToDestiny(debugMode, indexPath, destinyDistPath, 'main.html');
    copyTemplateIndex(debugMode, templateIndex, destinyPath);
    copyIndexJSReference(debugMode, indexPath, distPath, destinyDistPath);
};
exports.updateGifTowerDefenseDemo = updateGifTowerDefenseDemo;
