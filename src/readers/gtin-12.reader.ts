import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config/symbologies';

const REG: RegExp = /^\]E[0-9]{12,12}$/;

export class Gtin12Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GTIN12, REG, readerConfig);
    }
}
