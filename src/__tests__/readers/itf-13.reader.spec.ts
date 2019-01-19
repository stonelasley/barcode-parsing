import { IReaderConfiguration } from '../../models';
import { Itf13Reader } from '../../readers';

describe('Itf13Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Itf13Reader;

	beforeEach(() => {
		classUnderTest = new Itf13Reader(config);
	});

	describe('validate', () => {

		test('should validate value length', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']I01111111111111')).toBe(true);
			expect(classUnderTest['validate'](']I0111111111111111')).toBe(false);
			expect(classUnderTest['validate'](']I01111111')).toBe(false);
			/* tslint:enable */
		});

		test('should validate character type', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']I01111111111111')).toBe(true);
			expect(classUnderTest['validate'](']I0aaaaaaaaaaaaa')).toBe(false);
			/* tslint:enable */
		});
	});
});
