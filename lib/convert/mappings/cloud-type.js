"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloud_type_1 = require("./../../../shared/weather/cloud-type");
exports.cloudType = (value) => {
    switch (value) {
        case 1:
            return cloud_type_1.CloudType.CIRRUS;
        case 8:
            return cloud_type_1.CloudType.STRATUS;
        case 9:
            return cloud_type_1.CloudType.CUMULUS;
        default:
            return cloud_type_1.CloudType.USER;
    }
};
