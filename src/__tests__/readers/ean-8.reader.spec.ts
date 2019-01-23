import { IReaderConfiguration } from '../../models';
import { Ean8Reader } from '../../readers';

describe('Ean8Reader', () => {
    const config = {} as IReaderConfiguration;
    let classUnderTest: Ean8Reader;

    beforeEach(() => {
        classUnderTest = new Ean8Reader(config);
    });

    describe('validate', () => {
        test('should validate value length', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E411111111')).toBe(true);
            expect(classUnderTest['validate'](']E411111111111111')).toBe(false);
            expect(classUnderTest['validate'](']E411111')).toBe(false);
            /* tslint:enable */
        });

        test('should validate character type', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E411111111')).toBe(true);
            expect(classUnderTest['validate'](']E4aaaaaaaa')).toBe(false);
            /* tslint:enable */
        });
    });
});
