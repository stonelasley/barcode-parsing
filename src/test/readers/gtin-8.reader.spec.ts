import {expect} from 'chai';
import {IReaderConfiguration} from '../../models';
import {Gtin8Reader} from '../../readers';

describe('Gtin8Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Gtin8Reader;

	beforeEach(() => {
		classUnderTest = new Gtin8Reader(config);
	});

	describe('validate', () => {

		it('should validate by length', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E11111111')).to.be.true;
			expect(classUnderTest['validate'](']E111111111')).to.be.false;
			expect(classUnderTest['validate'](']E1111111')).to.be.false;
			/* tslint:enable */
		});

		it('should validate character type', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E11111111')).to.be.true;
			expect(classUnderTest['validate'](']Eaaaaaaaa')).to.be.false;
			/* tslint:enable */
		});
	});
});
