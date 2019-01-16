import { IBarcodeValue } from './models';
import { IParserConfiguration } from './models/parser.configuration';
import { IReaderConfiguration } from './models/reader.configuration';
export declare class BarcodeParser {
    private _readers;
    readers: any;
    constructor(config: IParserConfiguration);
    parse(barcodeVal: any): IBarcodeValue;
    protected initReaders(readerTypes: string[], configurations: IReaderConfiguration[]): void;
}
