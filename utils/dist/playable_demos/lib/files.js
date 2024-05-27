"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFileToDestiny = exports.copyIndexToDestiny = void 0;
const fs = require('fs');
const copyIndexToDestiny = (debugMode, indexPath, destinyPath, destinyName) => {
    const indexPathDestiny = destinyPath + '\\' + destinyName;
    console.log(`copying ${indexPath} to ${indexPathDestiny}`);
    if (debugMode === false) {
        console.log('lets do it');
        fs.copyFileSync(indexPath, indexPathDestiny);
    }
    else {
        console.log('debugMode mode: dont apply changes to filesystem');
    }
};
exports.copyIndexToDestiny = copyIndexToDestiny;
const copyFileToDestiny = (debugMode, originPath, fileName, destinyPath, destinyFileName) => {
    const originFilePath = originPath + '\\' + fileName;
    const destinyFilePath = destinyPath + '\\' + destinyFileName;
    console.log(`copying ${originFilePath} to ${destinyFilePath}`);
    if (debugMode === false) {
        console.log('lets do it');
        fs.copyFileSync(originFilePath, destinyFilePath);
    }
    else {
        console.log('debugMode mode: dont apply changes to filesystem');
    }
};
exports.copyFileToDestiny = copyFileToDestiny;
