import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config/symbologies';

const REG: any = /^\]E[0-9]{13,13}$/;
const LENGTH: number = 13;

export class Gtin13Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GTIN13, REG, LENGTH, readerConfig);
    }
}
