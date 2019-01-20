import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config/symbologies';

const REG: any = /^\]E[0-9]{14,14}$/;
const LENGTH: number = 14;

export class Gtin14Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GTIN14, REG, LENGTH, readerConfig);
    }
}
