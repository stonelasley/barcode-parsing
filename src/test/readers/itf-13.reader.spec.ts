import { expect } from 'chai';
import { IReaderConfiguration } from '../../models';
import { Itf13Reader } from '../../readers';

describe('Itf13Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Itf13Reader;

	beforeEach(() => {
		classUnderTest = new Itf13Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']I01111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0111111111111111')).to.be.false;
			expect(classUnderTest['validate'](']I01111111')).to.be.false;
			/* tslint:enable */
		});

		it('should validate character type', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']I01111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0aaaaaaaaaaaaa')).to.be.false;
			/* tslint:enable */
		});
	});
});
