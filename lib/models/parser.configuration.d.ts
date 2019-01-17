import { IReaderConfiguration } from './reader.configuration';
export interface IParserConfiguration {
    readers: string[];
    readerConfigurations: IReaderConfiguration[];
}
