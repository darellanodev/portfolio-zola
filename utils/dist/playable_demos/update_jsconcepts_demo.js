"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJSConceptsDemo = void 0;
const { updateInZola } = require('./update_jsconcepts_demo/zola');
const { updateInDarellanodevGithubIoProject, } = require('./update_jsconcepts_demo/darellanodev_github_io');
const updateJSConceptsDemo = (debugMode) => {
    console.log('starting updating jsconcepts playable demo');
    console.log('------------------------------------------');
    // The order is important. First update in zola
    updateInZola(debugMode);
    updateInDarellanodevGithubIoProject(debugMode);
};
exports.updateJSConceptsDemo = updateJSConceptsDemo;
