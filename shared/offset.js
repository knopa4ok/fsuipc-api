"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../lib/convert/mappings/index");
class Offset {
    constructor(offsetData) {
        this.value = undefined;
        this.name = undefined;
        this.category = undefined;
        this.type = undefined;
        this.mapping = undefined;
        this.length = undefined;
        this.description = undefined;
        this.convert = undefined;
        this.permission = undefined;
        Object.keys(offsetData).forEach((key) => {
            if (key in this) {
                this[key] = offsetData[key];
            }
        });
    }
    get hasMapping() {
        return !!(this.mapping && this.convert);
    }
    get isMappingInvalid() {
        return !index_1.MAPPINGS[this.convert];
    }
    get isInvalidConvertExpression() {
        return typeof this.convert !== 'string';
    }
    get mappingFunction() {
        return index_1.MAPPINGS[this.convert];
    }
}
exports.Offset = Offset;
