"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Capabilities = ['dme', 'tacan', 'voice', 'noSignal', 'dmeGlideslope', 'noBackCourse', 'glideslope', 'isLocaliser'];
exports.navCapabilities = (values) => {
    const capabilities = {};
    values.forEach((value, index) => {
        const capability = Capabilities[index];
        if (!capability) {
            return;
        }
        capabilities[capability] = !!value;
    });
    return capabilities;
};
