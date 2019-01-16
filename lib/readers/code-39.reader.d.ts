import { BaseReader } from './base.reader';
import { IReaderConfiguration } from '../models/reader.configuration';
import { IBarcodeValue } from '../models';
export declare class Code39Reader extends BaseReader {
    constructor(readerConfig?: IReaderConfiguration);
    validate(value: string): boolean;
    decode(value: string): IBarcodeValue;
}
