import {expect} from 'chai';
import {IReaderConfiguration} from '../../models';
import {Gtin14Reader} from '../../readers';

describe('Gtin14Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Gtin14Reader;

	beforeEach(() => {
		classUnderTest = new Gtin14Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E11111111111111')).to.be.true;
			expect(classUnderTest['validate'](']E111111111111111')).to.be.false;
			expect(classUnderTest['validate'](']E1111111')).to.be.false;
			/* tslint:enable */
		});

		it('should validate character type', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E11111111111111')).to.be.true;
			expect(classUnderTest['validate'](']Eaaaaaaaaaaaaaa')).to.be.false;
			/* tslint:enable */
		});
	});
});
