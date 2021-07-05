"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vor_to_from_1 = require("./../../../shared/radios/vor-to-from");
exports.vorToFrom = (value) => {
    switch (value) {
        case 0:
            return vor_to_from_1.VorToFrom.OFF;
        case 1:
            return vor_to_from_1.VorToFrom.TO;
        case 2:
            return vor_to_from_1.VorToFrom.FROM;
        default:
            return null;
    }
};
