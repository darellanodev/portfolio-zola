"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInDarellanodevGithubIoProject = void 0;
const { transferFolderFromZolaToDarellanodevGithubIoProject, } = require('../lib/directories');
const updateInDarellanodevGithubIoProject = (debugMode) => {
    console.log('starting updating jetpack in DarellanodevGithubIoProject');
    transferFolderFromZolaToDarellanodevGithubIoProject(debugMode, 'jetpack');
};
exports.updateInDarellanodevGithubIoProject = updateInDarellanodevGithubIoProject;
