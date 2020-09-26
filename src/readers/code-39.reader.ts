import { BaseReader } from './base.reader';
import { IBarcodeValue, IReaderConfiguration, BarcodeValue } from '../models';
import { AimCodes, Symbologies } from '../enums';
import { AimParser } from '../utils';

const REG: RegExp = /^[A-Z0-9* \-$%.+\/]{1,43}$/;

export class Code39Reader extends BaseReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.Code39, REG, readerConfig);
    }

    public validate(value: string): boolean {
        const aimPrefix = value.indexOf(AimCodes.CODE39);
        return (
            aimPrefix === 0 &&
            super.validate(AimParser.parseAimCode(this.symbology, value))
        );
    }

    public decode(value: string): IBarcodeValue {
        const result = new BarcodeValue(this.symbology, value);
        try {
            this.tryValidate(value);
            const parsedVal = AimParser.parseAimCode(this.symbology, value);
            if (!this.configuration?.values?.length) {
                result.values = parsedVal;
            } else {
                result.values = this.configuration.values.map(ed => ({
                        code: ed.valueType,
                        value: parsedVal.substr(ed.start, ed.length),
            }));
            }
        } catch (ex) {
            result.success = false;
            result.errorMessage = ex;
        }
        return result;
    }
}
