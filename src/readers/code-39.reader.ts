import { BaseReader } from './base.reader';
import { IReaderConfiguration } from '../models/reader.configuration';
import { IBarcodeValue, BarcodeValue } from '../models';
import { AIM_CODES } from '../config/aim-codes';
import { AimParser } from '../utils/aim-parser';

const REG: any = /^[A-Z0-9* \-$%.+\/]{1,43}$/;
const SYMBOLOGY: string = 'code_39';

// todo this should probably eventually move into host app
const defaultConfig = {
				values: [
					{
						length: 1,
						start: 0,
						valueType: 'documentType',
					},
					{
						length: 2,
						start: -4,
						valueType: 'companyId',
					},
					{
						length: 2,
						start: -2,
						valueType: 'locationId',
					},
					{
						length: 9,
						start: 1,
						valueType: 'documentId',
					},
				],
			} as IReaderConfiguration;

export class Code39Reader extends BaseReader {

	constructor(readerConfig?: IReaderConfiguration) {
		const config = readerConfig || defaultConfig;
		super(SYMBOLOGY, REG, config);
	}

	public validate(value: string): boolean {
		const aimPrefix = value.indexOf(AIM_CODES.CODE39);
		return aimPrefix === 0 && super.validate(AimParser.parseAimCode(this.symbology, value));
	}

	public decode(value: string): IBarcodeValue {
		const result = new BarcodeValue(this.symbology, value);
		try {
			this.tryValidate(value);
			// result.values = this.parseValues(value);
			result.values = AimParser.parseAimCode(this.symbology, value);
		} catch (ex) {
			result.success = false;
			result.errorMessage = ex;
		}
		return result;
	}
}
