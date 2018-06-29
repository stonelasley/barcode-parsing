import {expect}                 from 'chai';
import {IReaderConfiguration}   from '../../models';
import {Gtin12Reader}           from '../../readers';

describe('Gtin12Reader', () => {

	let config = {} as IReaderConfiguration;
	let classUnderTest: Gtin12Reader;


	beforeEach(() => {
		classUnderTest = new Gtin12Reader(config);
	});

	describe('validate', () => {

		it('should validate by length', () => {
			expect(classUnderTest['validate'](']E111111111111')).to.be.true;
			expect(classUnderTest['validate'](']E111111111111111')).to.be.false;
			expect(classUnderTest['validate']('E[1111111')).to.be.false;
		});

		it('should validate character type', () => {
			expect(classUnderTest['validate'](']E111111111111')).to.be.true;
			expect(classUnderTest['validate'](']Eaaaaaaaaaaaa')).to.be.false;
		});
	});
});