"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyIndexToDestiny = void 0;
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
