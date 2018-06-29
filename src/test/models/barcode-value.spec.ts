import { expect }                       from 'chai';

import { IBarcodeValue, BarcodeValue }  from '../../models';

describe('BarcodeValue', () => {

	let classUnderTest: IBarcodeValue;
	let symbology: string = 'MYSYMBOLOGY';
	let rawVal = '123456';

	beforeEach(() => {
		classUnderTest = new BarcodeValue(symbology, rawVal);
	});

	it('should set symbology', () => {
		expect(classUnderTest.symbology).to.equal(symbology);
	});

	it('should set rawValue', () => {
		expect(classUnderTest.rawValue).to.equal(rawVal);
	});

	describe('pluck', () => {

		it('return values of existing keys', () => {
			classUnderTest.values = [
				{
					code: '01',
					value: 'abcd'
				}
			];

			expect(classUnderTest.pluck('01')).to.equal('abcd');
		});

		it('should return undefined for non-existant keys', () => {
			classUnderTest.values = [
				{
					code: '01',
					value: 'abcd'
				}
			];

			expect(classUnderTest.pluck('04')).to.equal(undefined);
		});

		it('should return undefined for non-array values', () => {
		    classUnderTest.values = "i am a string";

			expect(classUnderTest.pluck('04')).to.equal(undefined);

		});

	});
});