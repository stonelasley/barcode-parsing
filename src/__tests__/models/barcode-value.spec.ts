import { IBarcodeValue, BarcodeValue } from '../../models';

describe('BarcodeValue', () => {
    let classUnderTest: IBarcodeValue;
    const symbology: string = 'MYSYMBOLOGY';
    const rawVal = '123456';

    beforeEach(() => {
        classUnderTest = new BarcodeValue(symbology, rawVal);
    });

    test('should set symbology', () => {
        expect(classUnderTest.symbology).toBe(symbology);
    });

    test('should set rawValue', () => {
        expect(classUnderTest.rawValue).toBe(rawVal);
    });

    describe('pluck', () => {
        test('return values of existing keys', () => {
            classUnderTest.values = [
                {
                    code: '01',
                    value: 'abcd',
                },
            ];

            expect(classUnderTest.pluck('01')).toBe('abcd');
        });

        test('should return undefined for non-existant keys', () => {
            classUnderTest.values = [
                {
                    code: '01',
                    value: 'abcd',
                },
            ];

            expect(classUnderTest.pluck('04')).toBeUndefined();
        });

        test('should return undefined for non-array values', () => {
            classUnderTest.values = 'i am a string';

            expect(classUnderTest.pluck('04')).toBeUndefined();
        });
    });
});
