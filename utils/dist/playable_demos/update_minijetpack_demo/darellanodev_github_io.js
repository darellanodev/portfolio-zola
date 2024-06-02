"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInDarellanodevGithubIoProject = void 0;
const { transferFolderFromZolaToDarellanodevGithubIoProject, } = require('../lib/directories');
const updateInDarellanodevGithubIoProject = (debugMode) => {
    console.log('starting updating minijetpack in DarellanodevGithubIoProject');
    transferFolderFromZolaToDarellanodevGithubIoProject(debugMode, 'minijetpack');
};
exports.updateInDarellanodevGithubIoProject = updateInDarellanodevGithubIoProject;
