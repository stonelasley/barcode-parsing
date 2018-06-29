import {expect}                 from 'chai';
import {IReaderConfiguration}   from '../../models';
import {Gtin13Reader}           from '../../readers';

describe('Gtin13Reader', () => {

	let config = {} as IReaderConfiguration;
	let classUnderTest: Gtin13Reader;


	beforeEach(() => {
		classUnderTest = new Gtin13Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			expect(classUnderTest['validate'](']E1111111111111')).to.be.true;
			expect(classUnderTest['validate'](']E11111111111111')).to.be.false;
			expect(classUnderTest['validate'](']E111111')).to.be.false;
		});

		it('should validate character type', () => {
			expect(classUnderTest['validate'](']E1111111111111')).to.be.true;
			expect(classUnderTest['validate'](']Eaaaaaaaaaaaaa')).to.be.false;
		});
	});
});