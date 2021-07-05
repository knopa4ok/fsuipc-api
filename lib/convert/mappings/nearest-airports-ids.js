"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hexadecimal_1 = require("./../../../lib/convert/helpers/hexadecimal");
const NEAREST_AIRPORTS_COUNT = 6;
const AIRPORT_OFFSET_SIZE = 4;
const PADDING = 16;
const TOTAL_AIRPORT_OFFSET_SIZE = AIRPORT_OFFSET_SIZE + PADDING;
exports.nearestAirportsIds = (values) => {
    let airports = [];
    for (let i = 0; i < TOTAL_AIRPORT_OFFSET_SIZE * NEAREST_AIRPORTS_COUNT; i += TOTAL_AIRPORT_OFFSET_SIZE) {
        const airportBinValue = values.slice(i, i + AIRPORT_OFFSET_SIZE);
        if (airportBinValue.join('') === '0000') {
            airports.push('');
        }
        else {
            const airportCode = values
                .slice(i, i + AIRPORT_OFFSET_SIZE)
                .map(hexadecimal_1.HexadecimalHelper.binToHex)
                .map(hexadecimal_1.HexadecimalHelper.hex2string)
                .join('');
            airports.push(airportCode);
        }
    }
    return airports;
};
