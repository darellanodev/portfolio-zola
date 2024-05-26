"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFolderFromOriginToDestiny = exports.recreateDestinyDir = exports.deleteDestinyDir = void 0;
const fs = require('fs');
const deleteDestinyDir = (debugMode, destinyPath) => {
    if (fs.existsSync(destinyPath)) {
        console.log(`deleting destiny path ${destinyPath}`);
        if (debugMode === false) {
            console.log('lets do it');
            fs.rmSync(destinyPath, { recursive: true });
        }
        else {
            console.log('debugMode mode: dont apply changes to filesystem');
        }
    }
};
exports.deleteDestinyDir = deleteDestinyDir;
const recreateDestinyDir = (debugMode, destinyPath) => {
    console.log(`recreating destiny dir ${destinyPath}`);
    if (debugMode === false) {
        console.log('lets do it');
        fs.mkdirSync(destinyPath);
    }
    else {
        console.log('debugMode mode: dont apply changes to filesystem');
    }
};
exports.recreateDestinyDir = recreateDestinyDir;
const copyFolderFromOriginToDestiny = (debugMode, originPath, folderPath, destinyPath) => {
    const imgResourcesPathOrigin = originPath + '\\' + folderPath;
    const imgResourcesPathDestiny = destinyPath + '\\' + folderPath;
    console.log(`copying folder ${imgResourcesPathOrigin} to ${imgResourcesPathDestiny}`);
    if (debugMode === false) {
        console.log('lets do it');
        fs.cpSync(imgResourcesPathOrigin, imgResourcesPathDestiny, {
            recursive: true,
        });
    }
    else {
        console.log('debugMode mode: dont apply changes to filesystem');
    }
};
exports.copyFolderFromOriginToDestiny = copyFolderFromOriginToDestiny;
