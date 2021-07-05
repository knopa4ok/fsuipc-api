"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const season_1 = require("./../../../shared/weather/season");
exports.seasons = (value) => {
    switch (value) {
        case 0:
            return season_1.Season.WINTER;
        case 1:
            return season_1.Season.SPRING;
        case 2:
            return season_1.Season.SUMMER;
        case 3:
            return season_1.Season.AUTUMN;
        default:
            return null;
    }
};
