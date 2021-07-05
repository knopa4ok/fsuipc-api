"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_category_1 = require("./../../../shared/offset-category");
const offset_1 = require("./../../../shared/offset");
exports.APU = {
    APUGeneratorSwitch: new offset_1.Offset({
        value: 0xB51,
        name: 'APUGeneratorSwitch',
        category: offset_category_1.OffsetCategory.APU,
        description: 'APU generator switch',
        convert: '!!{VAL}',
        type: 0 /* Byte */,
        permission: 'rw',
    }),
    APUGeneratorActive: new offset_1.Offset({
        value: 0xB52,
        name: 'APUGeneratorActive',
        category: offset_category_1.OffsetCategory.APU,
        description: 'APU generator active',
        convert: '!!{VAL}',
        type: 0 /* Byte */,
        permission: 'r',
    }),
    APUOnFire: new offset_1.Offset({
        value: 0xB53,
        name: 'APUOnFire',
        category: offset_category_1.OffsetCategory.APU,
        description: 'APU generator active',
        convert: '!!{VAL}',
        type: 0 /* Byte */,
        permission: 'r',
    }),
    APUMaxRPM: new offset_1.Offset({
        value: 0xB54,
        name: 'APUMaxRPM',
        category: offset_category_1.OffsetCategory.APU,
        description: 'APU generator max RPM percent',
        convert: '+({VAL}).toFixed(2)',
        type: 9 /* Single */,
        permission: 'r',
    }),
    APUStarter: new offset_1.Offset({
        value: 0xB58,
        name: 'APUStarter',
        category: offset_category_1.OffsetCategory.APU,
        description: 'APU starter',
        convert: '{VAL} ? 1 : 0',
        type: 9 /* Single */,
        permission: 'rw',
    }),
    APUVoltage: new offset_1.Offset({
        value: 0xB5C,
        name: 'APUVoltage',
        category: offset_category_1.OffsetCategory.APU,
        description: 'APU generator voltage',
        convert: '+({VAL}).toFixed(2)',
        type: 9 /* Single */,
        permission: 'rw',
    }),
};
