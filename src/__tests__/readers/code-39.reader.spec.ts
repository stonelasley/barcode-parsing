import { IReaderConfiguration } from '../../models/reader.configuration';
import { Code39Reader } from '../../readers/code-39.reader';
import { AimCodes, Symbologies } from '../../enums';

export class TestClass extends Code39Reader {
    public decode(val: any): any {
        return this.decode(val);
    }

    public validate(val: any): any {
        return this.validate(val);
    }
}
describe('code39Reader', () => {
    let config = {} as IReaderConfiguration;
    let classUnderTest: TestClass;

    const decodeValues: string[] = [
        AimCodes.CODE39 + 'P0010065330101',
        AimCodes.CODE39 + 'I0010065330101',
        AimCodes.CODE39 + 'M0010065330101',
        AimCodes.CODE39 + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-$%.+/',
        AimCodes.CODE39 + 'A',
        AimCodes.CODE39 + '1234567777777',
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

        it('should return entire value if no embedded data', () => {
            const configWithNoValues = {
                symbology: Symbologies.Code39,
                values: [],
            };

            classUnderTest = new Code39Reader(configWithNoValues);
            const result = classUnderTest.decode(decodeValues[5]);
            expect(result.values).toEqual('1234567777777');
        });

        it('should return entire value if no config', () => {
            classUnderTest = new Code39Reader();
            const result = classUnderTest.decode(decodeValues[5]);
            expect(result.values).toEqual('1234567777777');
        });

        it('should parse embedded data indexes from config', () => {
            const configWithEmbeddedData = {
                symbology: Symbologies.Code39,
                values: [
                    {
                        length: 2,
                        start: 0,
                        valueType: 'foo',
                    },
                    {
                        length: 3,
                        start: 2,
                        valueType: 'bar',
                    },
                ],
            };

            classUnderTest = new Code39Reader(configWithEmbeddedData);
            const result = classUnderTest.decode(decodeValues[5]);

            expect(result.values).toEqual(
                expect.arrayContaining([
                    { code: 'foo', value: '12' },
                    { code: 'bar', value: '345' },
                ])
            );
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
