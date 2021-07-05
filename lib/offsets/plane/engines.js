"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_category_1 = require("./../../../shared/offset-category");
const offset_1 = require("./../../../shared/offset");
const engine1_1 = require("./engines/engine1");
const engine2_1 = require("./engines/engine2");
const engine3_1 = require("./engines/engine3");
const engine4_1 = require("./engines/engine4");
const propeller1_1 = require("./engines/propeller1");
exports.engines = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ engineType: new offset_1.Offset({
        value: 0x609,
        name: 'engineType',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine type',
        convert: 'engineType',
        mapping: true,
        type: 0 /* Byte */,
        permission: 'r',
    }), hasMixtureControl: new offset_1.Offset({
        value: 0x780,
        name: 'hasMixtureControl',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'has mixture control',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'r',
    }), hasCarbHeat: new offset_1.Offset({
        value: 0x784,
        name: 'hasCarbHeat',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'has carb heat',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'r',
    }), activeEngine: new offset_1.Offset({
        value: 0x888,
        name: 'activeEngine',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'active engine pattern',
        type: 12 /* BitArray */,
        length: 1,
        permission: 'rw',
    }), enginesCount: new offset_1.Offset({
        value: 0xAEC,
        name: 'enginesCount',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engines count',
        type: 2 /* Int16 */,
        permission: 'r',
    }), throttleLowerLimit: new offset_1.Offset({
        value: 0xB00,
        name: 'throttleLowerLimit',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'throttle lower limit - percent - negative = reverse capable',
        convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
        type: 2 /* Int16 */,
        permission: 'r',
    }) }, engine1_1.engine1), engine2_1.engine2), engine3_1.engine3), engine4_1.engine4), propeller1_1.propeller1);
