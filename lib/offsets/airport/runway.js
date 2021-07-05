"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_category_1 = require("./../../../shared/offset-category");
const offset_1 = require("./../../../shared/offset");
exports.runway = {
    runwaySurfaceCondition: new offset_1.Offset({
        value: 0x346,
        name: 'runwaySurfaceCondition',
        category: offset_category_1.OffsetCategory.RUNWAY,
        description: 'surface condition',
        type: 0 /* Byte */,
        mapping: true,
        convert: 'runwaySurfaceCondition',
        permission: 'r',
    }),
    runwaySurfaceConditionValid: new offset_1.Offset({
        value: 0x347,
        name: 'runwaySurfaceConditionValid',
        category: offset_category_1.OffsetCategory.RUNWAY,
        description: 'surface condition valid flag',
        type: 0 /* Byte */,
        convert: '!!{VAL}',
        permission: 'r',
    }),
};
