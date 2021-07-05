"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_category_1 = require("./../../../shared/offset-category");
const offset_1 = require("./../../../shared/offset");
const at_aircraft_1 = require("./weather/at-aircraft");
const settings_1 = require("./weather/settings");
exports.weather = Object.assign(Object.assign({ metarStationAltitude: new offset_1.Offset({
        value: 0x4B4,
        name: 'metarStationAltitude',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'METAR station altitude - ft',
        type: 5 /* UInt16 */,
        convert: '+({VAL} * 3.28084).toFixed(2)',
        permission: 'r',
    }), windSurfaceTurbulenceGustSpeed: new offset_1.Offset({
        value: 0x4BA,
        name: 'windSurfaceTurbulenceGustSpeed',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'METAR station altitude - kt',
        type: 5 /* UInt16 */,
        convert: '+({VAL}).toFixed(2)',
        permission: 'r',
    }), metarBarometricDrift: new offset_1.Offset({
        value: 0x4BC,
        name: 'metarBarometricDrift',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'METAR barometric drift - difference between aircraft/METAR QNH. Adding drift will give correct value for ATIS report',
        type: 5 /* UInt16 */,
        convert: '{VAL} / 16',
        permission: 'r',
    }), metarVisibility: new offset_1.Offset({
        value: 0x4C0,
        name: 'metarVisibility',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'METAR visibility - sm',
        type: 5 /* UInt16 */,
        convert: '{VAL} / 100',
        permission: 'r',
    }), metarCloudThunderBase: new offset_1.Offset({
        value: 0x4C2,
        name: 'metarCloudThunderBase',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'METAR visibility - ft',
        type: 5 /* UInt16 */,
        convert: '+({VAL} * 3.28084).toFixed(2)',
        permission: 'r',
    }), metarCloudBaseLow: new offset_1.Offset({
        value: 0x4C4,
        name: 'metarCloudBaseLow',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'METAR cloud base low - ft',
        type: 5 /* UInt16 */,
        convert: '+({VAL} * 3.28084).toFixed(2)',
        permission: 'r',
    }), metarCloudBaseHigh: new offset_1.Offset({
        value: 0x4C6,
        name: 'metarCloudBaseHigh',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'METAR cloud base high - ft',
        type: 5 /* UInt16 */,
        convert: '+({VAL} * 3.28084).toFixed(2)',
        permission: 'r',
    }), dewPoint: new offset_1.Offset({
        value: 0x4C8,
        name: 'dewPoint',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'dew point - FS2000+',
        type: 2 /* Int16 */,
        convert: '{VAL} / 256',
        permission: 'r',
    }), precipitationRate: new offset_1.Offset({
        value: 0x4C8,
        name: 'precipitationRate',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'precipitation rate - FS2000+ - 0 to 5',
        type: 0 /* Byte */,
        permission: 'r',
    }), precipitationType: new offset_1.Offset({
        value: 0x4CC,
        name: 'precipitationType',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'precipitation type - FS2000+ - 0 to 5',
        type: 0 /* Byte */,
        convert: 'precipitationType',
        mapping: true,
        permission: 'r',
    }), cloudThunderCoverage: new offset_1.Offset({
        value: 0x4CD,
        name: 'cloudThunderCoverage',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'cloud thunder coverage - octa',
        type: 0 /* Byte */,
        permission: 'r',
    }), cloudLowCoverage: new offset_1.Offset({
        value: 0x4CE,
        name: 'cloudLowCoverage',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'cloud low coverage - octa',
        type: 0 /* Byte */,
        permission: 'r',
    }), cloudHighCoverage: new offset_1.Offset({
        value: 0x4CF,
        name: 'cloudHighCoverage',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'cloud high coverage - octa',
        type: 0 /* Byte */,
        permission: 'r',
    }), precipitationControl: new offset_1.Offset({
        value: 0x4D2,
        name: 'precipitationControl',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'hi-byte type 0-2 - low-byte rate 0-5 - writing 0xFFFF release control',
        type: 5 /* UInt16 */,
        permission: 'w',
    }), dewPointControl: new offset_1.Offset({
        value: 0x4D4,
        name: 'dewPointControl',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'degrees / 256 - 0x8000 release control',
        type: 5 /* UInt16 */,
        permission: 'w',
    }), surfaceWindSpeed: new offset_1.Offset({
        value: 0x4D8,
        name: 'surfaceWindSpeed',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'surface wind speed - FS2000+ - kts',
        type: 5 /* UInt16 */,
        permission: 'r',
    }), surfaceWindDirection: new offset_1.Offset({
        value: 0x4DA,
        name: 'surfaceWindDirection',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'surface wind direction - FS2000+ - deg MAG',
        type: 5 /* UInt16 */,
        convert: '+({VAL} * 360 / 65536).toFixed(2)',
        permission: 'r',
    }), unlimitedVisibility: new offset_1.Offset({
        value: 0xBF8,
        name: 'unlimitedVisibility',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'unlimited visibility value - sm',
        type: 3 /* Int32 */,
        convert: '+({VAL} / 1600).toFixed(2)',
        permission: 'rw',
    }), cloudTypeAtAircraftAltitude: new offset_1.Offset({
        value: 0xE84,
        name: 'cloudTypeAtAircraftAltitude',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'cloud type at aircraft atltitude - 0-10',
        type: 0 /* Byte */,
        permission: 'r',
    }), cloudCoverageAtAircraftAltitude: new offset_1.Offset({
        value: 0xE85,
        name: 'cloudCoverageAtAircraftAltitude',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'cloud coverage at aircraft atltitude - okta',
        type: 0 /* Byte */,
        permission: 'r',
    }), cloudIcingAtAircraftAltitude: new offset_1.Offset({
        value: 0xE86,
        name: 'cloudIcingAtAircraftAltitude',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'cloud icing at aircraft atltitude - 0-4',
        type: 5 /* UInt16 */,
        permission: 'r',
    }), cloudTurbulenceAtAircraftAltitude: new offset_1.Offset({
        value: 0xE88,
        name: 'cloudTurbulenceAtAircraftAltitude',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'cloud turbulence at aircraft atltitude - 0-255',
        type: 5 /* UInt16 */,
        permission: 'r',
    }), visibility: new offset_1.Offset({
        value: 0xE8A,
        name: 'visibility',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'current visibility - sm',
        convert: '+({VAL} / 100).toFixed(2)',
        type: 2 /* Int16 */,
        permission: 'r',
    }), OAT: new offset_1.Offset({
        value: 0xE8C,
        name: 'OAT',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'current outside air temperature (OAT) - celsius',
        convert: 'Math.round({VAL} / 256)',
        type: 2 /* Int16 */,
        permission: 'r',
    }), interpolatedDewPoint: new offset_1.Offset({
        value: 0xE8E,
        name: 'interpolatedDewPoint',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'dew point interpolated for aircraft altitude - celsius',
        convert: 'Math.round({VAL} / 256)',
        type: 2 /* Int16 */,
        permission: 'r',
    }), windSpeed: new offset_1.Offset({
        value: 0xE90,
        name: 'windSpeed',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'wind speed at aircraft - kt',
        type: 5 /* UInt16 */,
        permission: 'r',
    }), windDirection: new offset_1.Offset({
        value: 0xE92,
        name: 'windDirection',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'wind direction at aircraft - TRUE degrees',
        convert: '+({VAL} * 360 / 65536).toFixed(2)',
        type: 5 /* UInt16 */,
        permission: 'r',
    }), windGust: new offset_1.Offset({
        value: 0xE94,
        name: 'windGust',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'wind gust at aircraft - kt',
        type: 5 /* UInt16 */,
        permission: 'r',
    }), windDirectionalVariation: new offset_1.Offset({
        value: 0xE96,
        name: 'windDirectionalVariation',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'wind directional variation at aircraft - TRUE degrees',
        convert: '+({VAL} * 360 / 65536).toFixed(2)',
        type: 5 /* UInt16 */,
        permission: 'r',
    }), windTurbulence: new offset_1.Offset({
        value: 0xE98,
        name: 'windTurbulence',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'wind turbulence at aircraft atltitude - 0-255',
        type: 5 /* UInt16 */,
        permission: 'r',
    }), totalAirTemperature: new offset_1.Offset({
        value: 0x11D0,
        name: 'totalAirTemperature',
        category: offset_category_1.OffsetCategory.WEATHER,
        description: 'total air temperature',
        convert: 'Math.round({VAL} / 256)',
        type: 2 /* Int16 */,
        permission: 'r',
    }) }, at_aircraft_1.weatherAtAircraft), settings_1.weatherSettings);