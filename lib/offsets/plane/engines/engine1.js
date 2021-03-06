"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offset_1 = require("./../../../../shared/offset");
const offset_category_1 = require("./../../../../shared/offset-category");
exports.engine1 = {
    engine1ThrottleLever: new offset_1.Offset({
        value: 0x88C,
        name: 'engine1ThrottleLever',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 throttle lever - percent - negative = reverse',
        convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine1PropLever: new offset_1.Offset({
        value: 0x88E,
        name: 'engine1PropLever',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 prop lever - percent - negative = reverse',
        convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine1MixtureLever: new offset_1.Offset({
        value: 0x890,
        name: 'engine1MixtureLever',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 prop lever - percent',
        convert: '{VAL} / 16384 * 100',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine1StarterSwitchPosition: new offset_1.Offset({
        value: 0x892,
        name: 'engine1StarterSwitchPosition',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 start switch position - JET: 0=off 1=start 2=gen/alt - PROP: 0=off 1=right 2=left 3=both 4=start',
        type: 5 /* UInt16 */,
        permission: 'rw',
    }),
    engine1Firing: new offset_1.Offset({
        value: 0x894,
        name: 'engine1Firing',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 combustion',
        convert: '!!{VAL}',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine1N2: new offset_1.Offset({
        value: 0x896,
        name: 'engine1N2',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 N2 - also helo RPM %',
        convert: '{VAL} / 16384 * 100',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine1N1: new offset_1.Offset({
        value: 0x898,
        name: 'engine1N1',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 N1 - also helo RPM %',
        convert: '{VAL} / 16384 * 100',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine1PropRPM: new offset_1.Offset({
        value: 0x898,
        name: 'engine1PropRPM',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'derive RPM by multiplying by  - negative = counter-rotating propeller',
        convert: '{VAL} / 16384 / 65536',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine1ThrottleLeverControl: new offset_1.Offset({
        value: 0x89A,
        name: 'engine1ThrottleLeverControl',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 throttle lever control - -4096 to +16384',
        type: 2 /* Int16 */,
        permission: 'rw',
    }),
    engine1FuelFlowLbHourSSL: new offset_1.Offset({
        value: 0x8A0,
        name: 'engine1FuelFlowLbHourSSL',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 fuel flow (lb per hour, sea level)',
        convert: '{VAL} / 128',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine1AntiIce: new offset_1.Offset({
        value: 0x8B2,
        name: 'engine1AntiIce',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 anti-ice/carb heat active',
        convert: '!!{VAL}',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine1OilTemp: new offset_1.Offset({
        value: 0x8B8,
        name: 'engine1OilTemp',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 oil temp - celsius',
        convert: 'Math.round({VAL} * 140 / 16384)',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine1OilPres: new offset_1.Offset({
        value: 0x8BA,
        name: 'engine1OilPres',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 oil pressure - PSI',
        convert: 'Math.round({VAL} * 55 / 16384)',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine1PressureRatio: new offset_1.Offset({
        value: 0x8BC,
        name: 'engine1PressureRatio',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 pressure ratio',
        convert: '{VAL} * 1.6 / 16384',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine1EGT: new offset_1.Offset({
        value: 0x8BE,
        name: 'engine1EGT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 exhaust gas temperature - Trust only on jet engine - celsius',
        convert: 'Math.round({VAL} * 860 / 16384)',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine1MP: new offset_1.Offset({
        value: 0x8C0,
        name: 'engine1MP',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 manifold pressure - inHg',
        convert: '{VAL} / 1024',
        type: 5 /* UInt16 */,
        permission: 'r',
    }),
    engine1RPMScaler: new offset_1.Offset({
        value: 0x8C8,
        name: 'engine1RPMScaler',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 RPM Scaler - props: used to calculate RPM',
        type: 2 /* Int16 */,
        permission: 'r',
    }),
    engine1OilQuantity: new offset_1.Offset({
        value: 0x8D0,
        name: 'engine1OilQuantity',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 oil quantity - percent',
        convert: 'Math.round({VAL} / 16384 * 100)',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine1Vibration: new offset_1.Offset({
        value: 0x8D4,
        name: 'engine1Vibration',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 vibration',
        convert: 'Math.round({VAL} * 5 / 16384)',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine1HydPres: new offset_1.Offset({
        value: 0x8D8,
        name: 'engine1HydPres',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 hydraulic pressure - PSI',
        convert: '{VAL} / 4',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine1HydQuantity: new offset_1.Offset({
        value: 0x8DC,
        name: 'engine1HydQuantity',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 hydraulic quantity - PSI',
        convert: '{VAL} / 16384 * 100',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine1CHT: new offset_1.Offset({
        value: 0x8E8,
        name: 'engine1CHT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 cylinder head temperature - F',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1ITT: new offset_1.Offset({
        value: 0x8F0,
        name: 'engine1ITT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 turbine temperature - C',
        convert: '{VAL} / 16384',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine1Torque: new offset_1.Offset({
        value: 0x8F4,
        name: 'engine1Torque',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 torque - trust only for helo - percent',
        convert: '{VAL} / 16384 * 100',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine1FuelPres: new offset_1.Offset({
        value: 0x8F8,
        name: 'engine1FuelPres',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 fuel pressure - PSI',
        convert: '{VAL} / 144',
        type: 3 /* Int32 */,
        permission: 'r',
    }),
    engine1FuelUsedSinceStart: new offset_1.Offset({
        value: 0x90C,
        name: 'engine1FuelUsedSinceStart',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 used fuel since start - lb',
        type: 9 /* Single */,
        permission: 'r',
    }),
    engine1FuelElapsedTime: new offset_1.Offset({
        value: 0x910,
        name: 'engine1FuelElapsedTime',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 fuel elapsed time - h',
        type: 9 /* Single */,
        permission: 'r',
    }),
    engine1FuelFlowLbHour: new offset_1.Offset({
        value: 0x918,
        name: 'engine1FuelFlowLbHour',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 fuel elapsed time - lb/h',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TorqueFtLb: new offset_1.Offset({
        value: 0x920,
        name: 'engine1TorqueFtLb',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine1 fuel elapsed time - ft lb',
        type: 9 /* Single */,
        permission: 'r',
    }),
    engine1TurbineN1: new offset_1.Offset({
        value: 0x2000,
        name: 'engine1TurbineN1',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine N1 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineN2: new offset_1.Offset({
        value: 0x2008,
        name: 'engine1TurbineN2',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine N2 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineCorrectedN1: new offset_1.Offset({
        value: 0x2010,
        name: 'engine1TurbineCorrectedN1',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine corrected N1 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineCorrectedN2: new offset_1.Offset({
        value: 0x2018,
        name: 'engine1TurbineCorrectedN2',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine corrected N2 - percent',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineCorrectedFuelFlow: new offset_1.Offset({
        value: 0x2020,
        name: 'engine1TurbineCorrectedFuelFlow',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine corrected fuel flow - lb/h',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineTorque: new offset_1.Offset({
        value: 0x2028,
        name: 'engine1TurbineTorque',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine corrected fuel flow - 0.0 to 1.0',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineEPR: new offset_1.Offset({
        value: 0x2030,
        name: 'engine1TurbineEPR',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine EPR',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineITT: new offset_1.Offset({
        value: 0x2038,
        name: 'engine1TurbineITT',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine ITT',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineAfterburnerActive: new offset_1.Offset({
        value: 0x2048,
        name: 'engine1TurbineAfterburnerActive',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine afterburner active',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine1TurbineJetThrust: new offset_1.Offset({
        value: 0x204C,
        name: 'engine1TurbineJetThrust',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine jet thrust',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineTankSelector: new offset_1.Offset({
        value: 0x2054,
        name: 'engine1TurbineTankSelector',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine tank selector',
        convert: 'fuelTank',
        mapping: true,
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine1TurbineUsedTank: new offset_1.Offset({
        value: 0x2058,
        name: 'engine1TurbineUsedTank',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine used tank',
        type: 12 /* BitArray */,
        length: 11,
        permission: 'r',
    }),
    engine1TurbineAvailableTankCount: new offset_1.Offset({
        value: 0x205C,
        name: 'engine1TurbineAvailableTankCount',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine available tank count',
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine1TurbineFuelFlow: new offset_1.Offset({
        value: 0x2060,
        name: 'engine1TurbineFuelFlow',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine fuel flow',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineIsFuelAvailable: new offset_1.Offset({
        value: 0x2068,
        name: 'engine1TurbineIsFuelAvailable',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine is fuel available flag',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'r',
    }),
    engine1TurbineBleedPressure: new offset_1.Offset({
        value: 0x206C,
        name: 'engine1TurbineBleedPressure',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine bleed air pressure - lb/sq in',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineReverser: new offset_1.Offset({
        value: 0x207C,
        name: 'engine1TurbineReverser',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine reverser position - 0.0 - 1.0 lb/sq in',
        convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineVibration: new offset_1.Offset({
        value: 0x2084,
        name: 'engine1TurbineVibration',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine vibration',
        type: 8 /* Double */,
        permission: 'r',
    }),
    engine1TurbineIgnition: new offset_1.Offset({
        value: 0x208C,
        name: 'engine1TurbineIgnition',
        category: offset_category_1.OffsetCategory.ENGINE,
        description: 'engine 1 turbine is fuel available flag',
        convert: '!!{VAL}',
        type: 6 /* UInt32 */,
        permission: 'rw',
    }),
};
