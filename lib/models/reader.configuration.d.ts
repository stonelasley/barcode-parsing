import { IEmbeddedData } from './embedded-data';
export interface IReaderConfiguration {
    symbology: string;
    delimiter: string;
    identifier: string;
    values: IEmbeddedData[];
}
