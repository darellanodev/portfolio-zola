"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInZola = void 0;
const { deleteDestinyDir, recreateDestinyDir, copyFolderFromOriginToDestiny, } = require('../lib/directories');
const { copyIndexToDestiny, copyFileToDestiny } = require('../lib/files');
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
const updateInZola = (debugMode) => {
    console.log('starting updating giftowerdefense in Zola');
    const rootPath = 'D:\\xampp\\htdocs\\proyectos';
    let originPath = rootPath + '\\gif-tower-defense-p5js';
    let destinyPath = rootPath + '\\portfolio-zola\\static\\tryitonline\\giftowerdefense';
    const destinyDistPath = destinyPath + '\\dist';
    const templateIndex = rootPath +
        '\\portfolio-zola\\utils\\playable_demos\\templates\\index_giftowerdefense.html';
    const distPath = originPath + '\\dist';
    const indexPath = distPath + '\\index.html';
    deleteDestinyDir(debugMode, destinyPath);
    recreateDestinyDir(debugMode, destinyPath);
    createDistDir(debugMode, destinyDistPath);
    copyFolderFromOriginToDestiny(debugMode, distPath, 'assets', destinyDistPath);
    copyFolderFromOriginToDestiny(debugMode, originPath, 'img', destinyPath);
    copyIndexToDestiny(debugMode, indexPath, destinyDistPath, 'main.html');
    copyTemplateIndex(debugMode, templateIndex, destinyPath);
};
exports.updateInZola = updateInZola;
