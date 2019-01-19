import { IReaderConfiguration } from '../../models';
import { Itf14Reader } from '../../readers';

describe('Itf14Reader', () => {
    const config = {} as IReaderConfiguration;
    let classUnderTest: Itf14Reader;

    beforeEach(() => {
        classUnderTest = new Itf14Reader(config);
    });

    describe('validate', () => {
        test('should validate value length', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']I011111111111111')).toBe(true);
            expect(classUnderTest['validate'](']I0111111111111111')).toBe(false);
            expect(classUnderTest['validate'](']I01111111')).toBe(false);
            /* tslint:enable*/
        });

        test('should validate character type', () => {
            /* tslint:disable */
            expect(classUnderTest['validate'](']I011111111111111')).toBe(true);
            expect(classUnderTest['validate'](']I0aaaaaaaaaaaaaa')).toBe(false);
            /* tslint:enable*/
        });
    });
});
