"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInZola = void 0;
const { deleteDestinyDir, recreateDestinyDir, copyFolderFromOriginToDestiny, } = require('../lib/directories');
const { copyIndexToDestiny } = require('../lib/files');
const updateInZola = (debugMode) => {
    console.log('start updating facetoonmaker playable demo');
    const rootPath = 'D:\\xampp\\htdocs\\proyectos';
    const originPath = rootPath + '\\face-toon-maker\\dist';
    const destinyPath = rootPath + '\\portfolio-zola\\static\\playablegames\\facetoonmaker';
    const indexPath = originPath + '\\index.html';
    deleteDestinyDir(debugMode, destinyPath);
    recreateDestinyDir(debugMode, destinyPath);
    copyFolderFromOriginToDestiny(debugMode, originPath, 'assets', destinyPath);
    copyFolderFromOriginToDestiny(debugMode, originPath, 'img', destinyPath);
    copyIndexToDestiny(debugMode, indexPath, destinyPath, 'index.html');
};
exports.updateInZola = updateInZola;
