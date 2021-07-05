"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FEET_BY_SEC_TO_KT = 0.592484;
exports.ftsecToKt = (value) => {
    return +(value * FEET_BY_SEC_TO_KT).toFixed(2);
};
exports.ktToFtsec = (value) => {
    return +(value / FEET_BY_SEC_TO_KT).toFixed(2);
};
