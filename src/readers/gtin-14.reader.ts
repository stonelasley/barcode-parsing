import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';

const REG: any = /^\]E[0-9]{14,14}$/;
const SYMBOLOGY: string = 'gtin_14';
const LENGTH: number = 14;

export class Gtin14Reader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(SYMBOLOGY, REG, LENGTH, readerConfig);
    }
}
