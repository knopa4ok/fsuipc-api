"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runway_surface_condition_1 = require("./../../../shared/runway/runway-surface-condition");
exports.runwaySurfaceCondition = (value) => {
    switch (value) {
        case 0:
            return runway_surface_condition_1.SurfaceCondition.NORMAL;
        case 1:
            return runway_surface_condition_1.SurfaceCondition.WET;
        case 2:
            return runway_surface_condition_1.SurfaceCondition.ICY;
        case 3:
            return runway_surface_condition_1.SurfaceCondition.SNOW;
        default:
            return null;
    }
};
