import { IReaderConfiguration } from '../../models';
import { GS1Reader } from '../../readers/gs-1.reader';
import { ApplicationIdentifier } from '../../models/application-identifier';

export class Tester extends GS1Reader {
    public testParseValues(v: string): object[] {
        return this.parseValues(v);
    }

    public testGetAi(c: string): ApplicationIdentifier {
        return this.findAi(c);
    }

    public testValidate(v: string): boolean {
        return this.validate(v);
    }

    public removeControlCharacters(value: string): string {
        return super.removeControlCharacters(value);
    }
}
describe('Gs1Reader', () => {
    let config: IReaderConfiguration;
    let classUnderTest: Tester;

    beforeEach(() => {
        config = {
            delimiter: ' ',
            identifier: ']C1',
        } as IReaderConfiguration;

        classUnderTest = new Tester(config);
    });

    describe('validate', () => {
        test('should validate identifier is prefixed', () => {
            expect(classUnderTest.testValidate('ABCDEFG')).toBe(false);
            expect(classUnderTest.testValidate('C1')).toBe(false);
            expect(classUnderTest.testValidate(']]C1')).toBe(false);
            expect(classUnderTest.testValidate(']C1A')).toBe(true);
            expect(classUnderTest.testValidate(']C1111111111111111111111111')).toBe(
                true,
            );
        });

        test('should validate value is at least 1 character', () => {
            expect(classUnderTest.testValidate(']C1')).toBe(false);
            expect(classUnderTest.testValidate(']C1A')).toBe(true);
        });
    });

    describe('parseValues', () => {
        test('should parse single fixed width AI', () => {
            const actual = classUnderTest.testParseValues('0196283290839476');
            expect(actual).toContainEqual({
                code: '01',
                value: '96283290839476',
            });

            const actual1 = classUnderTest.testParseValues('11150523');
            expect(actual1).toContainEqual({ code: '11', value: '150523' });
        });

        test('should parse multiple fixed width AI', () => {
            const actual = classUnderTest.testParseValues(
                '019628329083947611150523',
            );
            expect(actual).toContainEqual({
                code: '01',
                value: '96283290839476',
            });
            expect(actual).toContainEqual({ code: '11', value: '150523' });

            const actual1 = classUnderTest.testParseValues(
                '01962832908394761115052312999999',
            );
            expect(actual1).toContainEqual({
                code: '01',
                value: '96283290839476',
            });
            expect(actual1).toContainEqual({ code: '11', value: '150523' });
            expect(actual1).toContainEqual({ code: '12', value: '999999' });
        });

        test('should parse variable length value less than max length', () => {
            const actual2 = classUnderTest.testParseValues('10ES005867003');
            expect(actual2).toContainEqual({
                code: '10',
                value: 'ES005867003',
            });
        });

        test('should parse fractional values', () => {
            // scale 0
            const actual0 = classUnderTest.testParseValues('3300010000');
            expect(actual0).toContainEqual({ code: '330', value: 10000 });

            // scale 2
            const actual = classUnderTest.testParseValues('3302010000');
            expect(actual).toContainEqual({ code: '330', value: 100.0 });

            // scale 4
            const actual1 = classUnderTest.testParseValues('3224999999');
            expect(actual1).toContainEqual({ code: '322', value: 99.9999 });

            // scale 6
            const actual2 = classUnderTest.testParseValues('3616123456');
            expect(actual2).toContainEqual({ code: '361', value: 0.123456 });
        });

        test('should handle fractional after non-fractional', () => {
            const actual = classUnderTest.testParseValues(
                '36161234560196283290839476',
            );
            expect(actual).toContainEqual({ code: '361', value: 0.123456 });
            expect(actual).toContainEqual({
                code: '01',
                value: '96283290839476',
            });
        });

        test('should handle non-fractional after fractional ', () => {
            const actual = classUnderTest.testParseValues(
                '01962832908394763916123456',
            );
            expect(actual).toContainEqual({ code: '391', value: 0.123456 });
            expect(actual).toContainEqual({
                code: '01',
                value: '96283290839476',
            });
        });
    });

    describe('findAi', () => {
        test('should get 2 character Ai', () => {
            const testVals = ['01', '0199999', '01ABCDEFG'];

            testVals.forEach(val => {
                const actual = classUnderTest.testGetAi(val);
                expect(actual.code).toBe('01');
                expect(actual.description).toBe('Global Trade Item Number');
                expect(actual.length).toBe(14);
                /* tslint:disable */
                expect(actual.variableLength).toBe(false);
                /* tslint:enable */
            });
        });

        test('should get 3 character Ai', () => {
            const testVals = ['241', '241ABCDEFG', '2419999999'];

            testVals.forEach(val => {
                const actual = classUnderTest.testGetAi(val);

                expect(actual.code).toBe('241');
                expect(actual.description).toBe('Customer Part Number');
                expect(actual.length).toBe(30);
                /* tslint:disable */
                expect(actual.variableLength).toBe(true);
                /* tslint:enable */
            });
        });

        test('should get 4 character Ai', () => {
            const testVals = ['8020', '8020ABCDEFGHIJ', '8020999999999'];

            testVals.forEach(val => {
                const actual = classUnderTest.testGetAi(val);

                expect(actual.code).toBe('8020');
                expect(actual.description).toBe(
                    'Payment slip preference number',
                );
                expect(actual.length).toBe(25);
                expect(actual.variableLength).toBe(true);
            });
        });
    });

    describe('decode', () => {
        test('should split on default delimiter', () => {
            const actual = classUnderTest.decode(']C112999999101 1001 2101');
            expect(actual.values).toContainEqual({
                code: '12',
                value: '999999',
            });
            expect(actual.values).toContainEqual({ code: '10', value: '1' });
            expect(actual.values).toContainEqual({ code: '10', value: '01' });
            expect(actual.values).toContainEqual({ code: '21', value: '01' });
        });

        test('should split on space if no specified delimiter', () => {
            config = {
                delimiter: '',
                identifier: ']C1',
            } as IReaderConfiguration;

            classUnderTest = new Tester(config);

            const actual = classUnderTest.decode(
                ']C10196283290839476101 1001 2101',
            );
            expect(actual.values).toContainEqual({
                code: '01',
                value: '96283290839476',
            });
            expect(actual.values).toContainEqual({ code: '10', value: '1' });
            expect(actual.values).toContainEqual({ code: '10', value: '01' });
            expect(actual.values).toContainEqual({ code: '21', value: '01' });
        });
    });

    describe('removeControlCharacters', () => {
        test('should replace control characters with delimiter', () => {
            const expected = ']C102084135560009503703 10ES003472002';
            const input = expected.replace(' ', String.fromCharCode(29));
            expect(classUnderTest.removeControlCharacters(input)).toBe(
                expected,
            );
        });
    });

    test('should parse known gs1s', () => {
        const actual = classUnderTest.decode(
            ']C1019628329083134011150523310200059421145143242042',
        );
        const actual1 = classUnderTest.decode(
            ']C1019628329083947611150529310200178721145149307335',
        );
        const actual2 = classUnderTest.decode(
            ']C102084135560009503703 10ES003472002',
        );
        const actual3 = classUnderTest.decode(
            ']C102084135560009503703 10ES003472002'.replace(
                ' ',
                String.fromCharCode(29),
            ),
        );
        const actual4 = classUnderTest.decode(
            ']C102084135560009503703 7007211024211101 7006210101'.replace(
                ' ',
                String.fromCharCode(29),
            ),
        );

        expect(actual.values).toContainEqual({
            code: '21',
            value: '145143242042',
        });
        expect(actual.values).toContainEqual({ code: '310', value: 5.94 });
        expect(actual.values).toContainEqual({ code: '11', value: '150523' });
        expect(actual.values).toContainEqual({
            code: '01',
            value: '96283290831340',
        });

        expect(actual1.values).toContainEqual({
            code: '21',
            value: '145149307335',
        });
        expect(actual1.values).toContainEqual({ code: '310', value: 17.87 });
        expect(actual1.values).toContainEqual({ code: '11', value: '150529' });
        expect(actual1.values).toContainEqual({
            code: '01',
            value: '96283290839476',
        });

        expect(actual2.values).toContainEqual({
            code: '02',
            value: '08413556000950',
        });
        expect(actual2.values).toContainEqual({ code: '37', value: '03' });
        expect(actual2.values).toContainEqual({
            code: '10',
            value: 'ES003472002',
        });

        expect(actual3.values).toContainEqual({
            code: '02',
            value: '08413556000950',
        });
        expect(actual3.values).toContainEqual({ code: '37', value: '03' });
        expect(actual3.values).toContainEqual({
            code: '10',
            value: 'ES003472002',
        });

        expect(actual4.values).toContainEqual({
            code: '02',
            value: '08413556000950',
        });
        expect(actual4.values).toContainEqual({ code: '37', value: '03' });
        expect(actual4.values).toContainEqual({
            code: '7007',
            value: '211024211101',
        });

        expect(actual4.values).toContainEqual({
            code: '7006',
            value: '210101',
        });
    });
});
