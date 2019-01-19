import { IReaderConfiguration } from '../../models';
import { Gtin13Reader } from '../../readers';

describe('Gtin13Reader', () => {
    const config = {} as IReaderConfiguration;
    let classUnderTest: Gtin13Reader;

    beforeEach(() => {
        classUnderTest = new Gtin13Reader(config);
    });

    describe('validate', () => {
        test('should validate value length', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E1111111111111')).toBe(true);
            expect(classUnderTest['validate'](']E11111111111111')).toBe(false);
            expect(classUnderTest['validate'](']E111111')).toBe(false);
            /* tslint:enable */
        });

        test('should validate character type', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E1111111111111')).toBe(true);
            expect(classUnderTest['validate'](']Eaaaaaaaaaaaaa')).toBe(false);
            /* tslint:enable */
        });
    });
});
