"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vm2_1 = require("vm2");
exports.applyConversion = (offset, rawOffsetValue) => {
    if (!offset.convert) {
        return rawOffsetValue;
    }
    if (offset.hasMapping) {
        if (offset.isMappingInvalid) {
            return 'INVALID_MAPPING_FUNCTION';
        }
        return offset.mappingFunction(rawOffsetValue);
    }
    else {
        // tslint:disable-next-line:no-eval
        if (offset.isInvalidConvertExpression) {
            return 'UNSUPPORTED_CONVERSION_EXPRESSION';
        }
        return new vm2_1.VM().run(exports.replaceOffsetExpressionValue(offset, rawOffsetValue));
    }
};
exports.replaceOffsetExpressionValue = (offset, rawOffsetValue) => {
    return offset.convert.replace(new RegExp(/{VAL}/g), Array.isArray(rawOffsetValue)
        ? `${JSON.stringify(rawOffsetValue)}`
        : typeof rawOffsetValue === 'string'
            ? `'${rawOffsetValue}'`
            : rawOffsetValue.toString());
};
