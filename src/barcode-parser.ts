import { READER_TYPES }                from './readers';
import { IBarcodeValue, BarcodeValue } from './models';
import { IParserConfiguration }        from './models/parser.configuration';
import { IReaderConfiguration }        from './models/reader.configuration';

export class BarcodeParser {

	private _barcodeReaders: any;
	public get barcodeReaders(): any {
		return this._barcodeReaders;
	}

	public set readers(value: any) {
		this._barcodeReaders = value;
	}

	constructor(config: IParserConfiguration) {
		this.initReaders(config.readers, config.readerConfigurations);
	}

	public parse(barcodeVal: any): IBarcodeValue {
		let result: IBarcodeValue = null;

		this.barcodeReaders.forEach((reader) => {
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
		this._barcodeReaders = readerTypes.map(function(r) {
			let readerConfig: IReaderConfiguration;
			if (configurations.length > 0) {
				const configs = configurations.filter((c) => {
					return c !== undefined && r === c.symbology;
				});
				readerConfig = configs.pop();
			}
			if (READER_TYPES[r]) {
				return new READER_TYPES[r](readerConfig);

			}
		});

		this.barcodeReaders.forEach((reader) => {
			console.log('Reader Initialized: ', reader);
		});
	}
}
