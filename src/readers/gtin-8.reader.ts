import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config/symbologies';

const REG: any = /^\]E[0-9]{8,8}$/;
const LENGTH: number = 8;

export class Gtin8Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GTIN8, REG, LENGTH, readerConfig);
    }
}
