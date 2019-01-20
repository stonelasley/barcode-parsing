import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config/symbologies';

const REG: any = /^\]I0[0-9]{8,8}$/;
const LENGTH: number = 8;

export class Itf8Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.ITF8, REG, LENGTH, readerConfig);
    }
}
