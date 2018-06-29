import { expect }                 from 'chai';
import { IReaderConfiguration }   from '../../models';
import { Itf13Reader }            from '../../readers';

describe('Itf13Reader', () => {

	let config = {} as IReaderConfiguration;
	let classUnderTest: Itf13Reader;


	beforeEach(() => {
		classUnderTest = new Itf13Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			expect(classUnderTest['validate'](']I01111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0111111111111111')).to.be.false;
			expect(classUnderTest['validate'](']I01111111')).to.be.false;
		});

		it('should validate character type', () => {
			expect(classUnderTest['validate'](']I01111111111111')).to.be.true;
			expect(classUnderTest['validate'](']I0aaaaaaaaaaaaa')).to.be.false;
		});
	});
});