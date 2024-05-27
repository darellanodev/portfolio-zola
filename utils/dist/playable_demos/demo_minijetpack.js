"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMiniJetPackDemo = void 0;
const { copyFileToDestiny } = require('./lib/files');
const { deleteDestinyDir, recreateDestinyDir } = require('./lib/directories');
const updateMiniJetPackDemo = (debugMode) => {
    console.log('starting updating minijetpack playable demo');
    const rootPath = 'D:\\xampp\\htdocs\\proyectos';
    const originPath = rootPath + '\\go-jetpack-game';
    const destinyPath = rootPath + '\\portfolio-zola\\static\\playablegames\\jetpack';
    deleteDestinyDir(debugMode, destinyPath);
    recreateDestinyDir(debugMode, destinyPath);
    const filesToCopy = [
        'index.html',
        'jetpackgame.wasm',
        'main.html',
        'style.css',
        'wasm_exec.js',
    ];
    const buildWebOriginPath = originPath + '\\build_web';
    filesToCopy.forEach((file) => {
        copyFileToDestiny(debugMode, buildWebOriginPath, file, destinyPath, file);
    });
};
exports.updateMiniJetPackDemo = updateMiniJetPackDemo;
