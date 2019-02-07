import { IReaderConfiguration } from '../models';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config';

const REG: RegExp = /^\]E0[0-9]{14,14}$/;

export class Gtin14Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GTIN14, REG, readerConfig);
    }
}
