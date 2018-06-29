import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader }       from './base-gtin.reader';

const REG: any = /^\]E[0-9]{13,13}$/;
const SYMBOLOGY: string = 'gtin_13';
const LENGTH: number = 13;

export class Gtin13Reader extends BaseGtinReader {

	constructor(readerConfig?: IReaderConfiguration) {
		super(SYMBOLOGY, REG, LENGTH, readerConfig);
	}
}
