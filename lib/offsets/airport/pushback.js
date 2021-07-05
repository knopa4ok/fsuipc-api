"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_category_1 = require("./../../../shared/offset-category");
const offset_1 = require("./../../../shared/offset");
exports.pushback = {
    pushbackAngle: new offset_1.Offset({
        value: 0x334,
        name: 'pushbackAngle',
        category: offset_category_1.OffsetCategory.PUSHBACK,
        description: 'pushback angle - radians',
        type: 9 /* Single */,
        permission: 'r',
    }),
    pushbackXContact: new offset_1.Offset({
        value: 0x338,
        name: 'pushbackXContact',
        category: offset_category_1.OffsetCategory.PUSHBACK,
        description: 'pushback X contact - ft',
        type: 9 /* Single */,
        permission: 'r',
    }),
    pushbackYContact: new offset_1.Offset({
        value: 0x33C,
        name: 'pushbackYContact',
        category: offset_category_1.OffsetCategory.PUSHBACK,
        description: 'pushback Y contact - ft',
        type: 9 /* Single */,
        permission: 'r',
    }),
    pushbackZContact: new offset_1.Offset({
        value: 0x340,
        name: 'pushbackZContact',
        category: offset_category_1.OffsetCategory.PUSHBACK,
        description: 'pushback Z contact - ft',
        type: 9 /* Single */,
        permission: 'r',
    }),
    pushbackWaitFlag: new offset_1.Offset({
        value: 0x344,
        name: 'pushbackWaitFlag',
        category: offset_category_1.OffsetCategory.PUSHBACK,
        description: 'pushback wait flag',
        convert: '!!{VAL}',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
};
