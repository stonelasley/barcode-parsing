import { IReaderConfiguration } from '../models';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config';

const REG: RegExp = /^\]E[0-9]{8,8}$/;

export class Gtin8Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GTIN8, REG, readerConfig);
    }
}
