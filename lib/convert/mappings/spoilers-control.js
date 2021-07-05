"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spoilersControl = (value) => {
    if (value < 4800) {
        return 0;
    }
    return Math.round((value - 4800) / (16383 - 4800) * 100);
};
