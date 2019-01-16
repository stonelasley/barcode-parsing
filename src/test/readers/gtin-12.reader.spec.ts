import {expect} from 'chai';
import {IReaderConfiguration} from '../../models';
import {Gtin12Reader} from '../../readers';

describe('Gtin12Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Gtin12Reader;

	beforeEach(() => {
		classUnderTest = new Gtin12Reader(config);
	});

	describe('validate', () => {

		it('should validate by length', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E111111111111')).to.be.true;
			expect(classUnderTest['validate'](']E111111111111111')).to.be.false;
			expect(classUnderTest['validate']('E[1111111')).to.be.false;
			/* tslint:enable */
		});

		it('should validate character type', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E111111111111')).to.be.true;
			expect(classUnderTest['validate'](']Eaaaaaaaaaaaa')).to.be.false;
			/* tslint:enable */
		});
	});
});
