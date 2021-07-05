"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lights = ['nav', 'beacon', 'land', 'taxi', 'strobe', 'panel', 'recognition', 'wing', 'logo', 'cabin'];
exports.lightsMapping = (values) => {
    const lights = {};
    values.forEach((value, index) => {
        const lightName = Lights[index];
        if (!lightName) {
            return;
        }
        lights[lightName] = !!value;
    });
    return lights;
};
