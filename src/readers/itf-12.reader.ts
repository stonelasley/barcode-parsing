import { IReaderConfiguration } from '../models';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../enums';

const REG: RegExp = /^\]I0[0-9]{12,12}$/;

export class Itf12Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.ITF12, REG, readerConfig);
    }
}
