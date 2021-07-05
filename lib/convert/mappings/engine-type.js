"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_type_1 = require("./../../../shared/plane/engine-type");
exports.engineType = (value) => {
    switch (value) {
        case 0:
            return engine_type_1.EngineType.PISTON;
        case 1:
            return engine_type_1.EngineType.JET;
        case 2:
            return engine_type_1.EngineType.SAILPLANE;
        case 3:
            return engine_type_1.EngineType.HELO;
        case 4:
            return engine_type_1.EngineType.ROCKET;
        case 5:
            return engine_type_1.EngineType.TURBOPROP;
        default:
            return null;
    }
};
