import {IReaderConfiguration} from '../../models';
import {Gtin8Reader} from '../../readers';

describe('Gtin8Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Gtin8Reader;

	beforeEach(() => {
		classUnderTest = new Gtin8Reader(config);
	});

	describe('validate', () => {

		test('should validate by length', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E11111111')).toBe(true);
			expect(classUnderTest['validate'](']E111111111')).toBe(false);
			expect(classUnderTest['validate'](']E1111111')).toBe(false);
			/* tslint:enable */
		});

		test('should validate character type', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E11111111')).toBe(true);
			expect(classUnderTest['validate'](']Eaaaaaaaa')).toBe(false);
			/* tslint:enable */
		});
	});
});
