import { BaseReader } from './base.reader';
import { IReaderConfiguration } from '../models/reader.configuration';
import { IBarcodeValue } from '../models';
export declare class BaseGtinReader extends BaseReader {
    protected _length: number;
    constructor(symbology: string, validationExpression: any, _length: number, readerConfig?: IReaderConfiguration);
    decode(value: string): IBarcodeValue;
    protected checkDigit(value: string): number;
    protected parseValues(value: string): string;
}
