import { ApplicationIdentifier } from '../../models/application-identifier';

describe('ApplicationIdentifier', () => {
    let classUnderTest: ApplicationIdentifier;

    describe('code', () => {
        test('should set code', () => {
            classUnderTest = new ApplicationIdentifier('code', '', 0, true);

            expect(classUnderTest.code).toBe('code');
        });
    });

    describe('description', () => {
        test('should set description', () => {
            classUnderTest = new ApplicationIdentifier('', 'aaa', 0, true);

            expect(classUnderTest.description).toBe('aaa');
        });
    });

    describe('length', () => {
        test('should set length', () => {
            classUnderTest = new ApplicationIdentifier('', 'aaa', 100, true);

            expect(classUnderTest.length).toEqual(100);
        });
    });

    describe('fractional', () => {
        test('should set variableLength', () => {
            classUnderTest = new ApplicationIdentifier('', 'aaa', 0, true);

            expect(classUnderTest.variableLength).toBe(true);
        });
    });

    describe('fractional', () => {
        test('should default fractional to false', () => {
            classUnderTest = new ApplicationIdentifier('', 'aaa', 0, true);

            expect(classUnderTest.fractional).toBe(false);
        });
    });

    describe('totalLength', () => {
        test('should return code length + length for non-fractional', () => {
            classUnderTest = new ApplicationIdentifier('a', 'b', 10, true);

            expect(classUnderTest.totalLength).toEqual(11);
        });

        test('should return code length + length + 1 for fractional', () => {
            classUnderTest = new ApplicationIdentifier(
                'a',
                'b',
                10,
                true,
                true
            );

            expect(classUnderTest.totalLength).toEqual(12);
        });
    });

    test('should set fractional', () => {
        classUnderTest = new ApplicationIdentifier('', 'aaa', 0, true, true);

        expect(classUnderTest.fractional).toBe(true);
    });
});
