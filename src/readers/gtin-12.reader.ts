import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';

const REG: any = /^\]E[0-9]{12,12}$/;
const SYMBOLOGY: string = 'gtin_12';
const LENGTH: number = 12;

export class Gtin12Reader extends BaseGtinReader {

	constructor(readerConfig?: IReaderConfiguration) {
		super(SYMBOLOGY, REG, LENGTH, readerConfig);
	}
}
