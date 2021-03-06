"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_1 = require("./../../../../shared/offset");
const offset_category_1 = require("./../../../../shared/offset-category");
exports.engine2 = {
    engine2ThrottleLever: new offset_1.Offset({
        value: 0x924,
        name: 'engine2ThrottleLever',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 throttle lever - percent - negative = reverse',
        convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine2PropLever: new offset_1.Offset({
        value: 0x926,
        name: 'engine2PropLever',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 prop lever - percent - negative = reverse',
        convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine2MixtureLever: new offset_1.Offset({
        value: 0x928,
        name: 'engine2MixtureLever',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 prop lever - percent',
        convert: '{VAL} / 16384 * 100',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine2StarterSwitchPosition: new offset_1.Offset({
        value: 0x92A,
        name: 'engine2StarterSwitchPosition',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 start switch position - JET: 0=off 1=start 2=gen/alt - PROP: 0=off 1=right 2=left 3=both 4=start',
        type: 5 /* UInt16 */,
        permission: 'rw',
    }),
    engine2Firing: new offset_1.Offset({
        value: 0x92C,
        name: 'engine2Firing',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 combustion',
        convert: '!!{VAL}',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine2N2: new offset_1.Offset({
        value: 0x92E,
        name: 'engine2N2',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 N2 - also helo RPM %',
        convert: '{VAL} / 16384 * 100',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine2N1: new offset_1.Offset({
        value: 0x930,
        name: 'engine2N1',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 N1 - also helo RPM %',
        convert: '{VAL} / 16384 * 100',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine2PropRPM: new offset_1.Offset({
        value: 0x930,
        name: 'engine2PropRPM',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'derive RPM by multiplying by  - negative = counter-rotating propeller',
        convert: '{VAL} / 16384 / 65536',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine2ThrottleLeverControl: new offset_1.Offset({
        value: 0x932,
        name: 'engine2ThrottleLeverControl',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 throttle lever control - -4096 to +16384',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine2FuelFlowLbHourSSL: new offset_1.Offset({
        value: 0x938,
        name: 'engine2FuelFlowLbHourSSL',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 fuel flow (lb per hour, sea level)',
        convert: '{VAL} / 128',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine2AntiIce: new offset_1.Offset({
        value: 0x94A,
        name: 'engine2AntiIce',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 anti-ice/carb heat active',
        convert: '!!{VAL}',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine2OilTemp: new offset_1.Offset({
        value: 0x950,
        name: 'engine2OilTemp',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 oil temp - celsius',
        convert: 'Math.round({VAL} * 140 / 16384)',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine2OilPres: new offset_1.Offset({
        value: 0x952,
        name: 'engine2OilPres',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 oil pressure - PSI',
        convert: 'Math.round({VAL} * 55 / 16384)',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine2PressureRatio: new offset_1.Offset({
        value: 0x954,
        name: 'engine2PressureRatio',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 pressure ratio',
        convert: '{VAL} * 1.6 / 16384',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine2EGT: new offset_1.Offset({
        value: 0x956,
        name: 'engine2EGT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 exhaust gas temperature - Trust only on jet engine - celsius',
        convert: 'Math.round({VAL} * 860 / 16384)',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine2MP: new offset_1.Offset({
        value: 0x958,
        name: 'engine2MP',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 manifold pressure - inHg',
        convert: '{VAL} / 1024',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine2RPMScaler: new offset_1.Offset({
        value: 0x960,
        name: 'engine2RPMScaler',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 RPM Scaler - props: used to calculate RPM',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine2OilQuantity: new offset_1.Offset({
        value: 0x968,
        name: 'engine2OilQuantity',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 oil quantity - percent',
        convert: 'Math.round({VAL} / 16384 * 100)',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine2Vibration: new offset_1.Offset({
        value: 0x96C,
        name: 'engine2Vibration',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 vibration',
        convert: 'Math.round({VAL} * 5 / 16384)',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine2HydPres: new offset_1.Offset({
        value: 0x970,
        name: 'engine2HydPres',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 hydraulic pressure - PSI',
        convert: '{VAL} / 4',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine2HydQuantity: new offset_1.Offset({
        value: 0x974,
        name: 'engine2HydQuantity',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 hydraulic quantity - percent',
        convert: '{VAL} / 16384 * 100',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine2CHT: new offset_1.Offset({
        value: 0x980,
        name: 'engine2CHT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 cylinder head temperature - F',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2ITT: new offset_1.Offset({
        value: 0x988,
        name: 'engine2ITT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 turbine temperature - C',
        convert: '{VAL} / 16384',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine2Torque: new offset_1.Offset({
        value: 0x98C,
        name: 'engine2Torque',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 torque - trust only for helo - percent',
        convert: '{VAL} / 16384 * 100',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine2FuelPres: new offset_1.Offset({
        value: 0x990,
        name: 'engine2FuelPres',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 fuel pressure - PSI',
        convert: '{VAL} / 144',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine2FuelUsedSinceStart: new offset_1.Offset({
        value: 0x9A4,
        name: 'engine2FuelUsedSinceStart',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 used fuel since start - lb',
        type: 9 /* Single */,
        permission: 'r',
    }),
    engine2FuelElapsedTime: new offset_1.Offset({
        value: 0x9A8,
        name: 'engine2FuelElapsedTime',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 fuel elapsed time - h',
        type: 9 /* Single */,
        permission: 'r',
    }),
    engine2FuelFlowLbHour: new offset_1.Offset({
        value: 0x9B0,
        name: 'engine2FuelFlowLbHour',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 fuel elapsed time - lb/h',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TorqueFtLb: new offset_1.Offset({
        value: 0x9B8,
        name: 'engine2TorqueFtLb',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine2 fuel elapsed time - ft lb',
        type: 9 /* Single */,
        permission: 'r',
    }),
    engine2TurbineN1: new offset_1.Offset({
        value: 0x2100,
        name: 'engine2TurbineN1',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine N1 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineN2: new offset_1.Offset({
        value: 0x2108,
        name: 'engine2TurbineN2',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine N2 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineCorrectedN1: new offset_1.Offset({
        value: 0x2110,
        name: 'engine2TurbineCorrectedN1',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine corrected N1 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineCorrectedN2: new offset_1.Offset({
        value: 0x2118,
        name: 'engine2TurbineCorrectedN2',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine corrected N2 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineCorrectedFuelFlow: new offset_1.Offset({
        value: 0x2120,
        name: 'engine2TurbineCorrectedFuelFlow',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine corrected fuel flow - lb/h',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineTorque: new offset_1.Offset({
        value: 0x2128,
        name: 'engine2TurbineTorque',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine corrected fuel flow - 0.0 to 1.0',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineEPR: new offset_1.Offset({
        value: 0x2130,
        name: 'engine2TurbineEPR',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine EPR',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineITT: new offset_1.Offset({
        value: 0x2138,
        name: 'engine2TurbineITT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine ITT',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineAfterburnerActive: new offset_1.Offset({
        value: 0x2148,
        name: 'engine2TurbineAfterburnerActive',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine afterburner active',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine2TurbineJetThrust: new offset_1.Offset({
        value: 0x214C,
        name: 'engine2TurbineJetThrust',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine jet thrust',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineTankSelector: new offset_1.Offset({
        value: 0x2154,
        name: 'engine2TurbineTankSelector',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine tank selector',
        convert: 'fuelTank',
        mapping: true,
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine2TurbineUsedTank: new offset_1.Offset({
        value: 0x2158,
        name: 'engine2TurbineUsedTank',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine used tank',
        type: 12 /* BitArray */,
        length: 11,
        permission: 'r',
    }),
    engine2TurbineAvailableTankCount: new offset_1.Offset({
        value: 0x215C,
        name: 'engine2TurbineAvailableTankCount',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine available tank count',
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine2TurbineFuelFlow: new offset_1.Offset({
        value: 0x2160,
        name: 'engine2TurbineFuelFlow',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine fuel flow',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineIsFuelAvailable: new offset_1.Offset({
        value: 0x2168,
        name: 'engine2TurbineIsFuelAvailable',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine is fuel available flag',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine2TurbineBleedPressure: new offset_1.Offset({
        value: 0x216C,
        name: 'engine2TurbineBleedPressure',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine bleed air pressure - lb/sq in',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineReverser: new offset_1.Offset({
        value: 0x217C,
        name: 'engine2TurbineReverser',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine reverser position - 0.0 - 1.0 lb/sq in',
        convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineVibration: new offset_1.Offset({
        value: 0x2184,
        name: 'engine2TurbineVibration',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine vibration',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine2TurbineIgnition: new offset_1.Offset({
        value: 0x218C,
        name: 'engine2TurbineIgnition',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 2 turbine is fuel available flag',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'rw',
    }),
};
