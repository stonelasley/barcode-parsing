import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader }       from './base-gtin.reader';

const REG: any = /^\]I0[0-9]{13,13}$/;
const SYMBOLOGY: string = 'itf_13';
const LENGTH: number = 13;

export class Itf13Reader extends BaseGtinReader {

	constructor(readerConfig?: IReaderConfiguration) {
		super(SYMBOLOGY, REG, LENGTH, readerConfig);
	}
}
