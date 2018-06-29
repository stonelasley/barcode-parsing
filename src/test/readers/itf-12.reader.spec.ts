import { expect } from 'chai';
import { IReaderConfiguration } from '../../models';
import { Itf12Reader } from '../../readers';

describe('Itf12Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Itf12Reader;

	beforeEach(() => {
		classUnderTest = new Itf12Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			expect(classUnderTest['validate'](']I0111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0111111111111111')).to.be.false;
			expect(classUnderTest['validate'](']I01111111')).to.be.false;
		});

		it('should validate character type', () => {
			expect(classUnderTest['validate'](']I0111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0aaaaaaaaaaaa')).to.be.false;
		});
	});
});
