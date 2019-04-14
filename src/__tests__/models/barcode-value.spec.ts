import { IBarcodeValue, BarcodeValue } from '../../models';
import { Symbologies } from '../../config/symbologies';

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

    test('isWeightBased should be true for GTIN13', () => {
        classUnderTest = new BarcodeValue(Symbologies.GTIN13, '');
        classUnderTest.values = '2843970021365';
        expect(classUnderTest.isWeightBased).toBeTruthy();
    });

    test('isWeightBased should be false for other Systems', () => {
        classUnderTest = new BarcodeValue(Symbologies.GTIN13, '');
        classUnderTest.values = '3843970021365';
        expect(classUnderTest.isWeightBased).toBeFalsy();
    });

    test('systemId should return first half value', () => {
        classUnderTest = new BarcodeValue(Symbologies.GTIN13, '');
        classUnderTest.values = '2843970021365';
        expect(classUnderTest.systemId).toEqual('84397');
    });

    test('systemValue should return second half value', () => {
        classUnderTest = new BarcodeValue(Symbologies.GTIN13, '');
        classUnderTest.values = '2843970021365';
        expect(classUnderTest.systemMeasure).toEqual(21.36);
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
