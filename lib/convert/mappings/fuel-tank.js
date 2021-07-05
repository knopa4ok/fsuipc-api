"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fuel_tank_1 = require("./../../../shared/plane/fuel-tank");
exports.fuelTank = (value) => {
    switch (value) {
        case 0:
            return fuel_tank_1.FuelTank.NONE;
        case 1:
            return fuel_tank_1.FuelTank.ALL;
        case 2:
            return fuel_tank_1.FuelTank.LEFT;
        case 3:
            return fuel_tank_1.FuelTank.RIGHT;
        case 4:
            return fuel_tank_1.FuelTank.LEFT_AUX;
        case 5:
            return fuel_tank_1.FuelTank.RIGHT_AUX;
        case 6:
            return fuel_tank_1.FuelTank.CENTER;
        case 7:
            return fuel_tank_1.FuelTank.CENTER2;
        case 8:
            return fuel_tank_1.FuelTank.CENTER3;
        case 9:
            return fuel_tank_1.FuelTank.EXT1;
        case 10:
            return fuel_tank_1.FuelTank.EXT2;
        case 11:
            return fuel_tank_1.FuelTank.RIGHT_TIP;
        case 12:
            return fuel_tank_1.FuelTank.LEFT_TIP;
        case 13:
            return fuel_tank_1.FuelTank.CROSS_FEED;
        case 14:
            return fuel_tank_1.FuelTank.CROSS_FEED_LTR;
        case 15:
            return fuel_tank_1.FuelTank.CROSS_FEED_RTL;
        case 16:
            return fuel_tank_1.FuelTank.CROSS_FEED_BOTH;
        case 17:
            return fuel_tank_1.FuelTank.EXTERNAL;
        case 18:
            return fuel_tank_1.FuelTank.ISOLATE;
        case 19:
            return fuel_tank_1.FuelTank.LEFT_MAIN;
        case 20:
            return fuel_tank_1.FuelTank.RIGHT_MAIN;
        default:
            return null;
    }
};
