"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGifTowerDefenseDemo = void 0;
const { updateInZola } = require('./update_giftowerdefense_demo/zola');
const { updateInDarellanodevGithubIoProject, } = require('./update_giftowerdefense_demo/darellanodev_github_io');
const updateGifTowerDefenseDemo = (debugMode) => {
    console.log('starting updating gif tower defense playable demo');
    updateInZola(debugMode);
    updateInDarellanodevGithubIoProject(debugMode);
};
exports.updateGifTowerDefenseDemo = updateGifTowerDefenseDemo;
