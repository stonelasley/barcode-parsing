import { IReaderConfiguration } from '../../models';
import { Gtin12Reader } from '../../readers';

describe('Gtin12Reader', () => {
    const config = {} as IReaderConfiguration;
    let classUnderTest: Gtin12Reader;

    beforeEach(() => {
        classUnderTest = new Gtin12Reader(config);
    });

    describe('validate', () => {
        test('should validate by length', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E0111111111111')).toBe(true);
            expect(classUnderTest['validate'](']E0111111111111111')).toBe(false);
            expect(classUnderTest['validate']('E[01111111')).toBe(false);
            /* tslint:enable */
        });

        test('should validate character type', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E0111111111111')).toBe(true);
            expect(classUnderTest['validate'](']E0aaaaaaaaaaaa')).toBe(false);
            /* tslint:enable */
        });
    });
});
