import { BaseGtinReader } from '../../readers/base-gtin.reader';
import { IReaderConfiguration } from '../../models';

const REG: any = /[0-9]/;
const SYMBOLOGY: string = 'MYSYMBOLOGY';
const LENGTH: number = 5;

class TestReader extends BaseGtinReader {
    constructor(readerConfig?: IReaderConfiguration) {
        super(SYMBOLOGY, REG, LENGTH, readerConfig);
    }

    public checkDigit(value: string): any {
        return super.checkDigit(value);
    }

    public testParseValues(values: string): string {
        return super.parseValues(values);
    }
}

describe('baseGtinReader', () => {
    const config = {} as IReaderConfiguration;
    let classUnderTest: TestReader;

    beforeEach(() => {
        classUnderTest = new TestReader(config);
    });

    describe('decode', () => {
        test('should return error for invalid value', () => {
            const actual = classUnderTest.decode('ii');

            expect(actual.errorMessage).toBe('Invalid Value');
        });

        test('should set symbology on result', () => {
            const actual = classUnderTest.decode('11111');

            expect(actual.symbology).toBe(SYMBOLOGY);
        });

        test('should set rawValue on result', () => {
            const val = '11111';

            const actual = classUnderTest.decode(val);

            expect(actual.rawValue).toBe(val);
        });

        test('should set checkDigit on result', () => {
            const val = '11111';

            const actual = classUnderTest.decode(val);

            expect(actual.checkDigit).toBe(1);
        });
    });

    describe('checkDigit', () => {
        test('should return last character', () => {
            const actual: number = classUnderTest.checkDigit('123456');

            expect(actual).toBe(6);
        });
    });
});
