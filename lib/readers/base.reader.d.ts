import { IReaderConfiguration } from '../models/reader.configuration';
import { IBarcodeValue } from '../models';
export declare abstract class BaseReader {
    protected _symbology: string;
    protected _validationExpression: any;
    protected _readerConfig: IReaderConfiguration;
    constructor(_symbology: string, _validationExpression: any, _readerConfig: IReaderConfiguration);
    readonly configuration: IReaderConfiguration;
    readonly symbology: string;
    readonly validationExpression: any;
    validate(value: string): boolean;
    abstract decode(value: string): IBarcodeValue;
    protected tryValidate(value: string): void;
}
