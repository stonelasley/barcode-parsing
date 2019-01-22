import { READER_TYPES } from './readers';
import { IBarcodeValue, BarcodeValue, IParserConfiguration, IReaderConfiguration } from './models';

export class BarcodeParser {
    private _readers: any;
    public get readers(): any {
        return this._readers;
    }

    public set readers(value: any) {
        this._readers = value;
    }

    constructor(config: IParserConfiguration) {
        this.initReaders(config.readers, config.readerConfigurations);
    }

    public parse(barcodeVal: any): IBarcodeValue {
        let result: IBarcodeValue = null;

        this._readers.forEach(reader => {
            if (reader.validate(barcodeVal)) {
                result = reader.decode(barcodeVal);
            }
        });

        if (!result) {
            result = new BarcodeValue(null, barcodeVal);
            result.errorMessage = 'No Reader Found';
            result.success = false;
        }
        return result;
    }

    protected initReaders(readerTypes: string[], configurations: IReaderConfiguration[]) {
        this.readers = readerTypes.map(r => {
            let readerConfig: IReaderConfiguration;
            if (configurations.length > 0) {
                const configs = configurations.filter(c => c !== undefined && r === c.symbology);
                readerConfig = configs.pop();
            }
            if (READER_TYPES[r]) {
                return new READER_TYPES[r](readerConfig);
            }
        });

        /* tslint:disable */
        this._readers.forEach(reader => console.log('Reader Initialized: ', reader));
        /* tslint:enable */
    }
}
