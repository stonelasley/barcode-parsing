import { BaseReader } from '../readers/base.reader';
import { IReaderConfiguration } from '../models/reader.configuration';
import { IBarcodeValue } from '../models/ibarcode-value';
import { ApplicationIdentifier } from '../models/application-identifier';
export declare class GS1Reader extends BaseReader {
    constructor(readerConfig?: IReaderConfiguration);
    protected removeControlCharacters(value: string): string;
    validate(value: string): boolean;
    decode(value: string): IBarcodeValue;
    protected findAi(value: string): ApplicationIdentifier;
    protected parseValue(ai: ApplicationIdentifier, input: string): Object;
    protected parseValues(input: string): Object[];
}
