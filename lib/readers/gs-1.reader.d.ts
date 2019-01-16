import { BaseReader } from '../readers/base.reader';
import { IReaderConfiguration } from '../models/reader.configuration';
import { IBarcodeValue } from '../models/ibarcode-value';
import { ApplicationIdentifier } from '../models/application-identifier';
export declare class GS1Reader extends BaseReader {
    constructor(readerConfig?: IReaderConfiguration);
    validate(value: string): boolean;
    decode(value: string): IBarcodeValue;
    protected removeControlCharacters(value: string): string;
    protected findAi(value: string): ApplicationIdentifier;
    protected parseValue(ai: ApplicationIdentifier, input: string): object;
    protected parseValues(input: string): object[];
}
