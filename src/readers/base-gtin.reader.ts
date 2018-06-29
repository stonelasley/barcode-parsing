import { BaseReader } from './base.reader';
import { AimParser } from '../utils/aim-parser';
import { IReaderConfiguration } from '../models/reader.configuration';
import { IBarcodeValue, BarcodeValue } from '../models';

export class BaseGtinReader extends BaseReader {

	constructor(
		symbology: string,
		validationExpression: any,
		protected _length: number,
		readerConfig?: IReaderConfiguration) {

		super(symbology, validationExpression, readerConfig);
	}

	public decode(value: string): IBarcodeValue {
		const result = new BarcodeValue(this.symbology, value);
		try {
			this.tryValidate(value);
			result.values = this.parseValues(value);
			result.checkDigit = this.checkDigit(value);
		} catch (ex) {
			result.success = false;
			result.errorMessage = ex.message;
		}
		return result;
	}

	protected checkDigit(value: string): number {
		return parseInt(value.substring(value.length - 1), null);
	}

	protected parseValues(value: string): string {
		return AimParser.parseAimCode(this.symbology, value);
	}
}
