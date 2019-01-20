import { IReaderConfiguration } from '../models';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config';

const REG: RegExp = /^\]E[0-9]{12,12}$/;

export class Gtin12Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GTIN12, REG, readerConfig);
    }
}
