"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInZola = void 0;
const { deleteDestinyDir, recreateDestinyDir, copyFolderFromOriginToDestiny, } = require('../lib/directories');
const { copyIndexToDestiny } = require('../lib/files');
const updateInZola = (debugMode) => {
    console.log('start updating dailyboostcalendar playable demo');
    const rootPath = 'D:\\xampp\\htdocs\\proyectos';
    const originPath = rootPath + '\\daily-boost-calendar\\dist';
    const destinyPath = rootPath + '\\portfolio-zola\\static\\tryitonline\\dailyboostcalendar';
    const indexPath = originPath + '\\index.html';
    deleteDestinyDir(debugMode, destinyPath);
    recreateDestinyDir(debugMode, destinyPath);
    copyFolderFromOriginToDestiny(debugMode, originPath, 'assets', destinyPath);
    copyIndexToDestiny(debugMode, indexPath, destinyPath, 'index.html');
};
exports.updateInZola = updateInZola;
