import { IReaderConfiguration } from '../../models/reader.configuration';
import { Code39Reader } from '../../readers/code-39.reader';
import { AimCodes } from '../../config/aim-codes';

export class TestClass extends Code39Reader {
    public decode(val: any): any {
        return this.decode(val);
    }

    public validate(val: any): any {
        return this.validate(val);
    }
}
describe('code39Reader', () => {
    const config = {} as IReaderConfiguration;
    let classUnderTest: TestClass;

    const decodeValues: string[] = [
        AimCodes.CODE39 + 'P0010065330101',

        AimCodes.CODE39 + 'I0010065330101',

        AimCodes.CODE39 + 'M0010065330101',

        AimCodes.CODE39 + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-$%.+/',

        AimCodes.CODE39 + 'A',
    ];

    const invalidValues: string[] = [
        ']B011111111111111111111111111111111111111111111',
        ']A011111111111111111111111111111111111111111111',
        'ABCDEFGhIJKLMNOPQRSTUVWXYZ1234567890-$%.+/',
        '',
        '~11223344',
        '1122#3344',
    ];

    beforeEach(() => {
        classUnderTest = new Code39Reader(config);
    });

    describe('decode', () => {
        test('should include symbology in result', () => {
            const result = classUnderTest.decode(decodeValues[0]);
            expect(result.symbology).toBe('code_39');
        });

        test('should include rawValue in result', () => {
            const result = classUnderTest.decode(decodeValues[1]);
            expect(result.rawValue).toBe(decodeValues[1]);
        });
    });

    describe('validate', () => {
        decodeValues.forEach(value => {
            test('should return true for valid value: ' + value, () => {
                /* tslint:disable */
                expect(classUnderTest.validate(value)).toBe(true);
                /* tslint:enable */
            });
        });

        invalidValues.forEach(value => {
            test('should return false for invalid value: ' + value, () => {
                /* tslint:disable */
                expect(classUnderTest.validate(value)).toBe(false);
                /* tslint:enable */
            });
        });
    });
});
