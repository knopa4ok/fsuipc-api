"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const lights_1 = require("./lights");
const runway_surface_condition_1 = require("./runway-surface-condition");
const precipitation_type_1 = require("./precipitation-type");
const cloud_type_1 = require("./cloud-type");
const seasons_1 = require("./seasons");
const units_1 = require("./units");
const engine_type_1 = require("./engine-type");
const nearest_airports_ids_1 = require("./nearest-airports-ids");
const applied_brakes_1 = require("./applied-brakes");
const spoilers_control_1 = require("./spoilers-control");
const vor_to_from_1 = require("./vor-to-from");
const nav_back_course_flags_1 = require("./nav-back-course-flags");
const nav_capabilities_1 = require("./nav-capabilities");
const fuel_tank_1 = require("./fuel-tank");
exports.MAPPINGS = {
    lightsMapping: lights_1.lightsMapping,
    runwaySurfaceCondition: runway_surface_condition_1.runwaySurfaceCondition,
    // weather
    precipitationType: precipitation_type_1.precipitationType,
    seasons: seasons_1.seasons,
    cloudType: cloud_type_1.cloudType,
    // units
    ftsecToKt: units_1.ftsecToKt,
    ktToFtsec: units_1.ktToFtsec,
    // plane
    engineType: engine_type_1.engineType,
    appliedBrakes: applied_brakes_1.appliedBrakes,
    spoilersControl: spoilers_control_1.spoilersControl,
    fuelTank: fuel_tank_1.fuelTank,
    // environment
    nearestAirportsIds: nearest_airports_ids_1.nearestAirportsIds,
    // radios,
    vorToFrom: vor_to_from_1.vorToFrom,
    navBackCourseFlags: nav_back_course_flags_1.navBackCourseFlags,
    navCapabilities: nav_capabilities_1.navCapabilities,
};
__export(require("./lights"));
__export(require("./runway-surface-condition"));
__export(require("./precipitation-type"));
__export(require("./seasons"));
__export(require("./units"));
__export(require("./engine-type"));
__export(require("./applied-brakes"));
__export(require("./spoilers-control"));
__export(require("./vor-to-from"));
__export(require("./nav-back-course-flags"));
__export(require("./nav-capabilities"));
__export(require("./fuel-tank"));
