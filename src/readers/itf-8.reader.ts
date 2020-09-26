import { IReaderConfiguration } from '../models';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../enums';

const REG: RegExp = /^\]I0[0-9]{8,8}$/;

export class Itf8Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.ITF8, REG, readerConfig);
    }
}
