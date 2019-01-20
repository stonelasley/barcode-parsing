import { BaseReader } from './base.reader';
import {
    IReaderConfiguration,
    IBarcodeValue,
    ApplicationIdentifier,
    BarcodeValue,
    APPLICATION_IDENTIFIERS,
} from '../models';
import { CONTROLCHARS, AimCodes, Symbologies } from '../config';
import { AimParser } from '../utils';

const DELIMITER: string = ' ';

export class GS1Reader extends BaseReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(Symbologies.GS1128, null, readerConfig);
    }

    public validate(value: string): boolean {
        const idPrefix = value.indexOf(AimCodes.GS1);
        const valueLength = AimParser.parseAimCode(this.symbology, value).length;
        return idPrefix === 0 && valueLength > 0;
    }

    public decode(value: string): IBarcodeValue {
        const sterilizedValue = this.removeControlCharacters(value);
        const result = new BarcodeValue(this.symbology, value);
        try {
            this.tryValidate(value);
            const valWithoutId = AimParser.parseAimCode(this.symbology, sterilizedValue);
            result.values = [].concat.apply(
                [],
                valWithoutId.split(DELIMITER).map(val => this.parseValues(val))
            );
        } catch (ex) {
            result.success = false;
            result.errorMessage = ex;
        }
        return result;
    }

    protected removeControlCharacters(value: string): string {
        let result = value;
        CONTROLCHARS.forEach(charCode => {
            result = result.replace(String.fromCharCode(charCode), DELIMITER);
        });
        return result;
    }

    protected findAi(value: string): ApplicationIdentifier {
        let ai: ApplicationIdentifier = null;
        let codeLength = 2;
        while (ai === null && codeLength < 5) {
            const code = value.substr(0, codeLength);
            const ais = APPLICATION_IDENTIFIERS.filter(x => {
                return x.code === code;
            });
            if (ais.length > 0) {
                ai = ais[0];
            } else {
                codeLength++;
            }
        }
        return ai;
    }

    protected parseValue(ai: ApplicationIdentifier, input: string): object {
        let val: any = null;
        if (ai.fractional !== true) {
            val = input.substr(ai.code.length, ai.length);
        } else {
            const scale = Number(input.charAt(ai.code.length));
            const num = input.substr(ai.code.length + 1, ai.length);

            val = Number(num) / Math.pow(10, scale);
        }

        return {
            code: ai.code,
            value: val,
        };
    }

    protected parseValues(input: string): object[] {
        let vals = Array<object>();
        const ai = this.findAi(input);

        if (input.length > ai.totalLength) {
            vals = vals.concat(this.parseValues(input.substr(ai.totalLength)));
        }

        vals.push(this.parseValue(ai, input));

        return vals;
    }
}
