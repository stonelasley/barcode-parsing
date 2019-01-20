import { BaseReader } from './base.reader';
import { IReaderConfiguration } from '../models/reader.configuration';
import { IBarcodeValue, BarcodeValue } from '../models';
import { AIMCODES } from '../config/aim-codes';
import { AimParser } from '../utils/aim-parser';
import { Symbologies } from '../config/symbologies';

const REG: RegExp = /^[A-Z0-9* \-$%.+\/]{1,43}$/;

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
        super(Symbologies.Code39, REG, config);
    }

    public validate(value: string): boolean {
        const aimPrefix = value.indexOf(AIMCODES.CODE39);
        return aimPrefix === 0 && super.validate(AimParser.parseAimCode(this.symbology, value));
    }

    public decode(value: string): IBarcodeValue {
        const result = new BarcodeValue(this.symbology, value);
        try {
            this.tryValidate(value);
            result.values = AimParser.parseAimCode(this.symbology, value);
        } catch (ex) {
            result.success = false;
            result.errorMessage = ex;
        }
        return result;
    }
}
