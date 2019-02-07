import { IReaderConfiguration } from '../models';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config';

const REG: RegExp = /^\]E4[0-9]{8,8}$/;

export class Ean8Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GTIN8, REG, readerConfig);
    }
}
