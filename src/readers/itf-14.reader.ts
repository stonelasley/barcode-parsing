import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../config/symbologies';

const REG: any = /^\]I0[0-9]{14,14}$/;
const LENGTH: number = 14;

export class Itf14Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.ITF14, REG, LENGTH, readerConfig);
    }
}
