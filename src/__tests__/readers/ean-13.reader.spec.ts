import { IReaderConfiguration } from '../../models';
import { Ean13Reader } from '../../readers';

describe('Ean13Reader', () => {
    const config = {} as IReaderConfiguration;
    let classUnderTest: Ean13Reader;

    beforeEach(() => {
        classUnderTest = new Ean13Reader(config);
    });

    describe('validate', () => {
        test('should validate value length', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E01111111111111')).toBe(true);
            expect(classUnderTest['validate'](']E011111111111111')).toBe(false);
            expect(classUnderTest['validate'](']E011111')).toBe(false);
            /* tslint:enable */
        });

        test('should validate character type', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']E01111111111111')).toBe(true);
            expect(classUnderTest['validate'](']E0aaaaaaaaaaaaa')).toBe(false);
            /* tslint:enable */
        });
    });
});
