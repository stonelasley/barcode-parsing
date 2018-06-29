import { expect } from 'chai';
import { IReaderConfiguration } from '../../models';
import { Itf8Reader } from '../../readers';

describe('Itf8Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Itf8Reader;

	beforeEach(() => {
		classUnderTest = new Itf8Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']I011111111')).to.be.true;
			expect(classUnderTest['validate'](']I0111111111111111')).to.be.false;
			expect(classUnderTest['validate'](']I01111111')).to.be.false;
			/* tslint:enable*/
		});

		it('should validate character type', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']I011111111')).to.be.true;
			expect(classUnderTest['validate'](']I0aaaaaaaaaaaaaa')).to.be.false;
			/* tslint:enable*/
		});
	});
});
