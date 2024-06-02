"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMiniJetpackDemo = void 0;
const { updateInZola } = require('./update_minijetpack_demo/zola');
const { updateInDarellanodevGithubIoProject, } = require('./update_minijetpack_demo/darellanodev_github_io');
const updateMiniJetpackDemo = (debugMode) => {
    console.log('starting updating minijetpack playable demo');
    console.log('-------------------------------------------');
    // The order is important. First update in zola
    updateInZola(debugMode);
    updateInDarellanodevGithubIoProject(debugMode);
};
exports.updateMiniJetpackDemo = updateMiniJetpackDemo;
