import { expect } from 'chai';
import { IReaderConfiguration } from '../../models';
import { Itf14Reader } from '../../readers';

describe('Itf14Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Itf14Reader;

	beforeEach(() => {
		classUnderTest = new Itf14Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']I011111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0111111111111111')).to.be.false;
			expect(classUnderTest['validate'](']I01111111')).to.be.false;
			/* tslint:enable*/
		});

		it('should validate character type', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']I011111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0aaaaaaaaaaaaaa')).to.be.false;
			/* tslint:enable*/
		});
	});
});
