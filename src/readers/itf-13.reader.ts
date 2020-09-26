import { IReaderConfiguration } from '../models';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../enums';

const REG: RegExp = /^\]I0[0-9]{13,13}$/;

export class Itf13Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.ITF13, REG, readerConfig);
    }
}
