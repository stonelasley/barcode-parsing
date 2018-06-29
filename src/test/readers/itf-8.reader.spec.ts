import { expect }                 from 'chai';
import { IReaderConfiguration }   from '../../models';
import { Itf8Reader }             from '../../readers';

describe('Itf8Reader', () => {

	let config = {} as IReaderConfiguration;
	let classUnderTest: Itf8Reader;


	beforeEach(() => {
		classUnderTest = new Itf8Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			expect(classUnderTest['validate'](']I011111111')).to.be.true;
			expect(classUnderTest['validate'](']I0111111111111111')).to.be.false;
			expect(classUnderTest['validate'](']I01111111')).to.be.false;
		});

		it('should validate character type', () => {
			expect(classUnderTest['validate'](']I011111111')).to.be.true;
			expect(classUnderTest['validate'](']I0aaaaaaaaaaaaaa')).to.be.false;
		});
	});
});