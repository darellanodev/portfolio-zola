"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJetpackDemo = void 0;
const { updateInZola } = require('./update_jetpack_demo/zola');
const { updateInDarellanodevGithubIoProject, } = require('./update_jetpack_demo/darellanodev_github_io');
const updateJetpackDemo = (debugMode) => {
    console.log('starting updating jetpack playable demo');
    console.log('---------------------------------------');
    // The order is important. First update in zola
    updateInZola(debugMode);
    updateInDarellanodevGithubIoProject(debugMode);
};
exports.updateJetpackDemo = updateJetpackDemo;
