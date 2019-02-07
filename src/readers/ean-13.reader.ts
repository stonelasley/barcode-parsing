import { IReaderConfiguration } from '../models';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config';

const REG: RegExp = /^\]E0[0-9]{13,13}$/;

export class Ean13Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GTIN13, REG, readerConfig);
    }
}
