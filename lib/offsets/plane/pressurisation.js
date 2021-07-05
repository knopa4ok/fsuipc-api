"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_category_1 = require("./../../../shared/offset-category");
const offset_1 = require("./../../../shared/offset");
exports.pressurisation = {
    pressCabinAlt: new offset_1.Offset({
        value: 0x318,
        name: 'pressCabinAlt',
        category: offset_category_1.OffsetCategory.PRESSURISATION,
        description: 'pressurisation: cabin altitude - ft',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    pressCabinAltTarget: new offset_1.Offset({
        value: 0x31C,
        name: 'pressCabinAltTarget',
        category: offset_category_1.OffsetCategory.PRESSURISATION,
        description: 'pressurisation: target cabin altitude - ft',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    pressCabinAltChange: new offset_1.Offset({
        value: 0x320,
        name: 'pressCabinAltChange',
        category: offset_category_1.OffsetCategory.PRESSURISATION,
        description: 'pressurisation: cabin altitude change set - ft/s',
        type: 9 /* Single */,
        permission: 'r',
    }),
    pressCabinAltPressDiff: new offset_1.Offset({
        value: 0x324,
        name: 'pressCabinAltPressDiff',
        category: offset_category_1.OffsetCategory.PRESSURISATION,
        description: 'pressurisation: cabin altitude change set - lb/sqft',
        type: 9 /* Single */,
        permission: 'r',
    }),
    pressDumpSwitch: new offset_1.Offset({
        value: 0x328,
        name: 'pressDumpSwitch',
        category: offset_category_1.OffsetCategory.PRESSURISATION,
        description: 'pressurisation: dump switch',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'rw',
    }),
};
