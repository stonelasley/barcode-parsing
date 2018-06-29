import {expect} from 'chai';
import {IReaderConfiguration} from '../../models';
import {Gtin13Reader} from '../../readers';

describe('Gtin13Reader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: Gtin13Reader;

	beforeEach(() => {
		classUnderTest = new Gtin13Reader(config);
	});

	describe('validate', () => {

		it('should validate value length', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E1111111111111')).to.be.true;
			expect(classUnderTest['validate'](']E11111111111111')).to.be.false;
			expect(classUnderTest['validate'](']E111111')).to.be.false;
			/* tslint:enable */
		});

		it('should validate character type', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']E1111111111111')).to.be.true;
			expect(classUnderTest['validate'](']Eaaaaaaaaaaaaa')).to.be.false;
			/* tslint:enable */
		});
	});
});
