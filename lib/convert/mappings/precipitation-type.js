"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const precipitation_type_1 = require("./../../../shared/weather/precipitation-type");
exports.precipitationType = (value) => {
    switch (value) {
        case 0:
            return precipitation_type_1.PrecipitationType.NONE;
        case 1:
            return precipitation_type_1.PrecipitationType.RAIN;
        case 2:
            return precipitation_type_1.PrecipitationType.SNOW;
        default:
            return null;
    }
};
