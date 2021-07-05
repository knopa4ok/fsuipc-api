import { Offset } from './../../shared/offset';
import { RawOffsetValue } from './../../shared/offset-values';
import { ConvertedOffsetValue } from './../../shared/converted-offset-values';
export declare const applyConversion: (offset: Offset, rawOffsetValue: RawOffsetValue) => ConvertedOffsetValue;
export declare const replaceOffsetExpressionValue: (offset: Offset, rawOffsetValue: RawOffsetValue) => string;
