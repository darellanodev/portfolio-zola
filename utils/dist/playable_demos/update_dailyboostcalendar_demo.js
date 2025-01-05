"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDailyBoostCalendar = void 0;
const { updateInZola } = require('./update_dailyboostcalendar_demo/zola');
const { updateInDarellanodevGithubIoProject, } = require('./update_dailyboostcalendar_demo/darellanodev_github_io');
const updateDailyBoostCalendar = (debugMode) => {
    console.log('starting updating dailyboostcalendar playable demo');
    console.log('------------------------------------------');
    // The order is important. First update in zola
    updateInZola(debugMode);
    updateInDarellanodevGithubIoProject(debugMode);
};
exports.updateDailyBoostCalendar = updateDailyBoostCalendar;
