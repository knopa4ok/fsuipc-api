"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_category_1 = require("./../../../shared/offset-category");
const offset_1 = require("./../../../shared/offset");
exports.icing = {
    structuralIce: new offset_1.Offset({
        value: 0x348,
        name: 'structuralIce',
        category: offset_category_1.OffsetCategory.ICING,
        description: 'structural ice - decimal percent',
        type: 5 /* UInt16 */,
        convert: '+({VAL} / 16384 * 100).toFixed(2)',
        permission: 'r',
    }),
    pitotIce: new offset_1.Offset({
        value: 0x34A,
        name: 'pitotIce',
        category: offset_category_1.OffsetCategory.ICING,
        description: 'structural ice - decimal percent',
        type: 5 /* UInt16 */,
        convert: '+({VAL} / 16384 * 100).toFixed(2)',
        permission: 'r',
    }),
};
