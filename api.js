"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fsuipc_1 = require("fsuipc");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const _offsets_1 = require("./lib/offsets/index");
const apply_conversion_1 = require("./lib/convert/apply-conversion");
class FsuipcApi {
    constructor(simulator = fsuipc_1.Simulator.FSX) {
        this.simulator = simulator;
        this.watchedOffsetCache = [];
    }
    async init() {
        this.fsuipcGlobalInstance = new fsuipc_1.FSUIPC();
        try {
            this.fsuipc = await this.fsuipcGlobalInstance.open(this.simulator);
            return true;
        }
        catch (error) {
            throw new fsuipc_1.FSUIPCError(error.message, error.code);
        }
    }
    listen(interval, offsetList, terminateOnError = true) {
        if (!this.fsuipc) {
            return rxjs_1.throwError('NO_FSUIPC_INSTANCE');
        }
        this.watchOffsets(offsetList);
        return rxjs_1.timer(interval, interval).pipe(operators_1.switchMap(() => rxjs_1.from(this.fsuipc.process()).pipe(operators_1.map((result) => {
            const rawOffsetValues = Object.assign({}, result);
            let offsetValues = {};
            for (let offsetName of Object.keys(rawOffsetValues)) {
                offsetValues = Object.assign(Object.assign({}, offsetValues), { [offsetName]: apply_conversion_1.applyConversion(_offsets_1.OFFSETS[offsetName], rawOffsetValues[offsetName]) });
            }
            return offsetValues;
        }), operators_1.catchError((error) => {
            if (terminateOnError) {
                this.fsuipc.close();
            }
            return rxjs_1.throwError(error);
        }))));
    }
    watchOffsets(offsetList) {
        if (this.shouldUpdateCache(offsetList)) {
            this.watchedOffsetCache = offsetList;
        }
        for (const offsetName of this.watchedOffsetCache) {
            const offset = _offsets_1.OFFSETS[offsetName];
            if (offset.type === 10 /* ByteArray */ || offset.type === 11 /* String */ || offset.type === 12 /* BitArray */) {
                const offsetType = offset.type;
                this.fsuipc.add(offset.name, offset.value, offsetType, offset.length);
            }
            else {
                const offsetType = offset.type;
                this.fsuipc.add(offset.name, offset.value, offsetType);
            }
        }
    }
    shouldUpdateCache(offsetList = []) {
        return offsetList.length > 0 && (!this.watchedOffsetCache.length ||
            !this.watchedOffsetCache.every(item => offsetList.includes(item)));
    }
}
exports.FsuipcApi = FsuipcApi;
