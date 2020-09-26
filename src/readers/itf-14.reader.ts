import { IReaderConfiguration } from '../models';
import { BaseGtinReader } from './base-gtin.reader';
import { Symbologies } from '../enums';

const REG: RegExp = /^\]I0[0-9]{14,14}$/;

export class Itf14Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.ITF14, REG, readerConfig);
    }
}
