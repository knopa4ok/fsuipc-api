import { Type } from 'fsuipc';
import { OffsetCategory } from './offset-category';
export interface OffsetData {
    value: number;
    name: string;
    category: OffsetCategory;
    type: Type;
    mapping?: boolean;
    length?: number;
    description?: string;
    convert?: string;
    permission?: 'r' | 'w' | 'rw';
}
export declare class Offset {
    value: number;
    name: string;
    category: OffsetCategory;
    type: Type;
    mapping: boolean;
    length: number;
    description: string;
    convert: string;
    permission: string;
    constructor(offsetData: Partial<OffsetData>);
    get hasMapping(): boolean;
    get isMappingInvalid(): boolean;
    get isInvalidConvertExpression(): boolean;
    get mappingFunction(): (_: any) => any;
}
