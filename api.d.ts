import { Simulator } from 'fsuipc';
import { Observable } from 'rxjs';
import { ConvertedOffsetValues } from './shared/converted-offset-values';
export declare class FsuipcApi {
    private simulator;
    private fsuipcGlobalInstance;
    private fsuipc;
    private watchedOffsetCache;
    constructor(simulator?: Simulator);
    init(): Promise<boolean>;
    listen(interval: number, offsetList: string[], terminateOnError?: boolean): Observable<ConvertedOffsetValues>;
    private watchOffsets;
    private shouldUpdateCache;
}
