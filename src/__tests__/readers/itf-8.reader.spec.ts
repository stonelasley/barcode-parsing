import { IReaderConfiguration } from '../../models';
import { Itf8Reader } from '../../readers';

describe('Itf8Reader', () => {
    const config = {} as IReaderConfiguration;
    let classUnderTest: Itf8Reader;

    beforeEach(() => {
        classUnderTest = new Itf8Reader(config);
    });

    describe('validate', () => {
        test('should validate value length', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']I011111111')).toBe(true);
            expect(classUnderTest['validate'](']I0111111111111111')).toBe(false);
            expect(classUnderTest['validate'](']I01111111')).toBe(false);
            /* tslint:enable*/
        });

        test('should validate character type', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']I011111111')).toBe(true);
            expect(classUnderTest['validate'](']I0aaaaaaaaaaaaaa')).toBe(false);
            /* tslint:enable*/
        });
    });
});
