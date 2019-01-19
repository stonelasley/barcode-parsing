import { IReaderConfiguration } from '../../models';
import { Gtin14Reader } from '../../readers';

describe('Gtin14Reader', () => {
    const config = {} as IReaderConfiguration;
    let classUnderTest: Gtin14Reader;

    beforeEach(() => {
        classUnderTest = new Gtin14Reader(config);
    });

    describe('validate', () => {
        test('should validate value length', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E11111111111111')).toBe(true);
            expect(classUnderTest['validate'](']E111111111111111')).toBe(false);
            expect(classUnderTest['validate'](']E1111111')).toBe(false);
            /* tslint:enable */
        });

        test('should validate character type', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E11111111111111')).toBe(true);
            expect(classUnderTest['validate'](']Eaaaaaaaaaaaaaa')).toBe(false);
            /* tslint:enable */
        });
    });
});
