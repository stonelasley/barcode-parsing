import { expect }                 from 'chai';
import { IReaderConfiguration }   from '../../models';
import { Itf14Reader }            from '../../readers';

describe('Itf14Reader', () => {

	let config = {} as IReaderConfiguration;
	let classUnderTest: Itf14Reader;


	beforeEach(() => {
		classUnderTest = new Itf14Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			expect(classUnderTest['validate'](']I011111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0111111111111111')).to.be.false;
			expect(classUnderTest['validate'](']I01111111')).to.be.false;
		});

		it('should validate character type', () => {
			expect(classUnderTest['validate'](']I011111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0aaaaaaaaaaaaaa')).to.be.false;
		});
	});
});