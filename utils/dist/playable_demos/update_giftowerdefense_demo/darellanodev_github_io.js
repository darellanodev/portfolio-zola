"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInDarellanodevGithubIoProject = void 0;
const { deleteDestinyDir, copyFolderFromOriginToDestiny, } = require('../lib/directories');
const updateInDarellanodevGithubIoProject = (debugMode) => {
    console.log('starting updating gif tower defense in DarellanodevGithubIoProject');
    const rootPath = 'D:\\xampp\\htdocs\\proyectos';
    let destinyPath = rootPath + '\\darellanodev.github.io\\playablegames\\giftowerdefense';
    deleteDestinyDir(debugMode, destinyPath);
    destinyPath = rootPath + '\\darellanodev.github.io\\playablegames';
    const originPath = rootPath + '\\portfolio-zola\\static\\playablegames';
    copyFolderFromOriginToDestiny(debugMode, originPath, 'giftowerdefense', destinyPath);
};
exports.updateInDarellanodevGithubIoProject = updateInDarellanodevGithubIoProject;
