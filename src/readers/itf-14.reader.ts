import { IReaderConfiguration } from '../models/reader.configuration';
import { BaseGtinReader } from './base-gtin.reader';

const REG: any = /^\]I0[0-9]{14,14}$/;
const SYMBOLOGY: string = 'itf_14';
const LENGTH: number = 14;

export class Itf14Reader extends BaseGtinReader {

	constructor(readerConfig?: IReaderConfiguration) {
		super(SYMBOLOGY, REG, LENGTH, readerConfig);
	}
}
