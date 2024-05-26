"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJSConceptsDemo = void 0;
const { deleteDestinyDir, recreateDestinyDir, copyFolderFromOriginToDestiny, } = require('./directories');
const { copyIndexToDestiny } = require('./files');
const updateJSConceptsDemo = (debugMode) => {
    console.log('start updating JS Concepts playable demo');
    const rootPath = 'D:\\xampp\\htdocs\\proyectos';
    const originPath = rootPath + '\\js-concepts';
    const destinyPath = rootPath + '\\portfolio-zola\\static\\playablegames\\js_concepts';
    const indexPath = originPath + '\\index.html';
    deleteDestinyDir(debugMode, destinyPath);
    recreateDestinyDir(debugMode, destinyPath);
    const originFolders = ['img', 'js'];
    originFolders.forEach((originFolder) => {
        copyFolderFromOriginToDestiny(debugMode, originPath, originFolder, destinyPath);
    });
    copyIndexToDestiny(debugMode, indexPath, destinyPath, 'index.html');
};
exports.updateJSConceptsDemo = updateJSConceptsDemo;
