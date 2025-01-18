"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFaceToonMaker = void 0;
const { updateInZola } = require('./update_facetoonmaker_demo/zola');
const { updateInDarellanodevGithubIoProject, } = require('./update_facetoonmaker_demo/darellanodev_github_io');
const updateFaceToonMaker = (debugMode) => {
    console.log('starting updating facetoonmaker playable demo');
    console.log('------------------------------------------');
    // The order is important. First update in zola
    updateInZola(debugMode);
    updateInDarellanodevGithubIoProject(debugMode);
};
exports.updateFaceToonMaker = updateFaceToonMaker;
