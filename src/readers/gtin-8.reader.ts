import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';

const REG: any = /^\]E[0-9]{8,8}$/;
const SYMBOLOGY: string = 'gtin_8';
const LENGTH: number = 8;

export class Gtin8Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(SYMBOLOGY, REG, LENGTH, readerConfig);
    }
}
