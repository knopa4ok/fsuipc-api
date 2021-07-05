"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HexadecimalHelper {
    static binToHex(value) {
        return value.toString(16);
    }
    static hex2string(hex) {
        const hexStr = hex.toString();
        let str = '';
        for (let i = 0; i < hexStr.length; i += 2) {
            str += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
        }
        return str;
    }
}
exports.HexadecimalHelper = HexadecimalHelper;
