"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brakes_1 = require("./../../../shared/plane/brakes");
exports.appliedBrakes = (value) => {
    switch (value) {
        case 1:
            return brakes_1.Brakes.LEFT;
        case 2:
            return brakes_1.Brakes.RIGHT;
        case 3:
            return brakes_1.Brakes.BOTH;
        default:
            return null;
    }
};
