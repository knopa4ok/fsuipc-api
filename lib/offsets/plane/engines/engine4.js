"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_1 = require("./../../../../shared/offset");
const offset_category_1 = require("./../../../../shared/offset-category");
exports.engine4 = {
    engine4ThrottleLever: new offset_1.Offset({
        value: 0xA54,
        name: 'engine4ThrottleLever',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 throttle lever - percent - negative = reverse',
        convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine4PropLever: new offset_1.Offset({
        value: 0xA56,
        name: 'engine4PropLever',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 prop lever - percent - negative = reverse',
        convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine4MixtureLever: new offset_1.Offset({
        value: 0xA58,
        name: 'engine4MixtureLever',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 prop lever - percent',
        convert: '{VAL} / 16384 * 100',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine4StarterSwitchPosition: new offset_1.Offset({
        value: 0xA5A,
        name: 'engine4StarterSwitchPosition',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 start switch position - JET: 0=off 1=start 2=gen/alt - PROP: 0=off 1=right 2=left 3=both 4=start',
        type: 5 /* UInt16 */,
        permission: 'rw',
    }),
    engine4Firing: new offset_1.Offset({
        value: 0xA5C,
        name: 'engine4Firing',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 combustion',
        convert: '!!{VAL}',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine4N2: new offset_1.Offset({
        value: 0xA5E,
        name: 'engine4N2',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 N2 - also helo RPM %',
        convert: '{VAL} / 16384 * 100',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine4N1: new offset_1.Offset({
        value: 0xA60,
        name: 'engine4N1',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 N1 - also helo RPM %',
        convert: '{VAL} / 16384 * 100',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine4PropRPM: new offset_1.Offset({
        value: 0xA60,
        name: 'engine4PropRPM',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'derive RPM by multiplying by  - negative = counter-rotating propeller',
        convert: '{VAL} / 16384 / 65536',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine4ThrottleLeverControl: new offset_1.Offset({
        value: 0xA62,
        name: 'engine4ThrottleLeverControl',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 throttle lever control - -4096 to +16384',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine4FuelFlowLbHourSSL: new offset_1.Offset({
        value: 0xA68,
        name: 'engine4FuelFlowLbHourSSL',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 fuel flow (lb per hour, sea level)',
        convert: '{VAL} / 128',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine4AntiIce: new offset_1.Offset({
        value: 0xA7A,
        name: 'engine4AntiIce',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 anti-ice/carb heat active',
        convert: '!!{VAL}',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine4OilTemp: new offset_1.Offset({
        value: 0xA80,
        name: 'engine4OilTemp',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 oil temp - celsius',
        convert: 'Math.round({VAL} * 140 / 16384)',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine4OilPres: new offset_1.Offset({
        value: 0xA82,
        name: 'engine4OilPres',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 oil pressure - PSI',
        convert: 'Math.round({VAL} * 55 / 16384)',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine4PressureRatio: new offset_1.Offset({
        value: 0xA84,
        name: 'engine4PressureRatio',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 pressure ratio',
        convert: '{VAL} * 1.6 / 16384',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine4EGT: new offset_1.Offset({
        value: 0xA86,
        name: 'engine4EGT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 exhaust gas temperature - Trust only on jet engine - celsius',
        convert: 'Math.round({VAL} * 860 / 16384)',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine4MP: new offset_1.Offset({
        value: 0xA88,
        name: 'engine4MP',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 manifold pressure - inHg',
        convert: '{VAL} / 1024',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine4RPMScaler: new offset_1.Offset({
        value: 0xA90,
        name: 'engine4RPMScaler',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 RPM Scaler - props: used to calculate RPM',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine4OilQuantity: new offset_1.Offset({
        value: 0xA98,
        name: 'engine4OilQuantity',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 oil quantity - percent',
        convert: 'Math.round({VAL} / 16384 * 100)',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine4Vibration: new offset_1.Offset({
        value: 0xA9C,
        name: 'engine4Vibration',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 vibration',
        convert: 'Math.round({VAL} * 5 / 16384)',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine4HydPres: new offset_1.Offset({
        value: 0xAA0,
        name: 'engine4HydPres',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 hydraulic pressure - PSI',
        convert: '{VAL} / 4',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine4HydQuantity: new offset_1.Offset({
        value: 0xAA4,
        name: 'engine4HydQuantity',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 hydraulic quantity - percent',
        convert: '{VAL} / 16384 * 100',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine4CHT: new offset_1.Offset({
        value: 0xAB0,
        name: 'engine4CHT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 cylinder head temperature - F',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4ITT: new offset_1.Offset({
        value: 0xAB8,
        name: 'engine4ITT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 turbine temperature - C',
        convert: '{VAL} / 16384',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine4Torque: new offset_1.Offset({
        value: 0xABC,
        name: 'engine4Torque',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 torque - trust only for helo - percent',
        convert: '{VAL} / 16384 * 100',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine4FuelPres: new offset_1.Offset({
        value: 0xAC0,
        name: 'engine4FuelPres',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 fuel pressure - PSI',
        convert: '{VAL} / 144',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine4FuelUsedSinceStart: new offset_1.Offset({
        value: 0xAD4,
        name: 'engine4FuelUsedSinceStart',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 used fuel since start - lb',
        type: 9 /* Single */,
        permission: 'r',
    }),
    engine4FuelElapsedTime: new offset_1.Offset({
        value: 0xAD8,
        name: 'engine4FuelElapsedTime',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 fuel elapsed time - h',
        type: 9 /* Single */,
        permission: 'r',
    }),
    engine4FuelFlowLbHour: new offset_1.Offset({
        value: 0xAE0,
        name: 'engine4FuelFlowLbHour',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 fuel elapsed time - lb/h',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TorqueFtLb: new offset_1.Offset({
        value: 0xAE8,
        name: 'engine4TorqueFtLb',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine4 fuel elapsed time - ft lb',
        type: 9 /* Single */,
        permission: 'r',
    }),
    engine4TurbineN1: new offset_1.Offset({
        value: 0x2300,
        name: 'engine4TurbineN1',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine N1 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineN2: new offset_1.Offset({
        value: 0x2308,
        name: 'engine4TurbineN2',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine N2 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineCorrectedN1: new offset_1.Offset({
        value: 0x2310,
        name: 'engine4TurbineCorrectedN1',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine corrected N1 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineCorrectedN2: new offset_1.Offset({
        value: 0x2318,
        name: 'engine4TurbineCorrectedN2',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine corrected N2 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineCorrectedFuelFlow: new offset_1.Offset({
        value: 0x2320,
        name: 'engine4TurbineCorrectedFuelFlow',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine corrected fuel flow - lb/h',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineTorque: new offset_1.Offset({
        value: 0x2328,
        name: 'engine4TurbineTorque',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine corrected fuel flow - 0.0 to 1.0',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineEPR: new offset_1.Offset({
        value: 0x2330,
        name: 'engine4TurbineEPR',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine EPR',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineITT: new offset_1.Offset({
        value: 0x2338,
        name: 'engine4TurbineITT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine ITT',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineAfterburnerActive: new offset_1.Offset({
        value: 0x2348,
        name: 'engine4TurbineAfterburnerActive',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine afterburner active',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine4TurbineJetThrust: new offset_1.Offset({
        value: 0x234C,
        name: 'engine4TurbineJetThrust',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine jet thrust',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineTankSelector: new offset_1.Offset({
        value: 0x2354,
        name: 'engine4TurbineTankSelector',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine tank selector',
        convert: 'fuelTank',
        mapping: true,
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine4TurbineUsedTank: new offset_1.Offset({
        value: 0x2358,
        name: 'engine4TurbineUsedTank',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine used tank',
        type: 12 /* BitArray */,
        length: 11,
        permission: 'r',
    }),
    engine4TurbineAvailableTankCount: new offset_1.Offset({
        value: 0x235C,
        name: 'engine4TurbineAvailableTankCount',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine available tank count',
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine4TurbineFuelFlow: new offset_1.Offset({
        value: 0x2360,
        name: 'engine4TurbineFuelFlow',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine fuel flow',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineIsFuelAvailable: new offset_1.Offset({
        value: 0x2368,
        name: 'engine4TurbineIsFuelAvailable',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine is fuel available flag',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine4TurbineBleedPressure: new offset_1.Offset({
        value: 0x236C,
        name: 'engine4TurbineBleedPressure',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine bleed air pressure - lb/sq in',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineReverser: new offset_1.Offset({
        value: 0x237C,
        name: 'engine4TurbineReverser',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine reverser position - 0.0 - 1.0 lb/sq in',
        convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineVibration: new offset_1.Offset({
        value: 0x2384,
        name: 'engine4TurbineVibration',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine vibration',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine4TurbineIgnition: new offset_1.Offset({
        value: 0x238C,
        name: 'engine4TurbineIgnition',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 4 turbine is fuel available flag',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'rw',
    }),
};