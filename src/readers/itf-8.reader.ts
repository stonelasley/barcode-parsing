import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';

const REG: any = /^\]I0[0-9]{8,8}$/;
const SYMBOLOGY: string = 'itf_8';
const LENGTH: number = 8;

export class Itf8Reader extends BaseGtinReader {

	constructor(readerConfig?: IReaderConfiguration) {
		super(SYMBOLOGY, REG, LENGTH, readerConfig);
	}
}
