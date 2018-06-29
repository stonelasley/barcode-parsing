import {expect} from 'chai';

import {BaseReader} from '../../readers/base.reader';
import {IBarcodeValue, IReaderConfiguration} from '../../models';

const REG: any = /[0-9]/;
const SYMBOLOGY: string = 'MYSYMBOLOGY';

class TestReader extends BaseReader {

	constructor(readerConfig?: IReaderConfiguration) {
		super(SYMBOLOGY, REG, readerConfig);
	}

	public get config(): any {
		return this._readerConfig;
	}

	public validate(val: any): any {
		return super.validate(val);
	}

	public decode(value: string): IBarcodeValue {
		return {} as IBarcodeValue;
	}
}
describe('baseReader', () => {

	const config = {} as IReaderConfiguration;
	let classUnderTest: TestReader;

	beforeEach(() => {
		classUnderTest = new TestReader(config);
	});

	it('should set symbology', () => {
		classUnderTest = new TestReader({} as IReaderConfiguration);
		expect(classUnderTest.symbology).to.equal(SYMBOLOGY);
	});

	it('should set readerConfig', () => {
		classUnderTest = new TestReader(config);
		expect(classUnderTest.config).to.equal(config);
	});

	describe('validate', () => {

		it('should validate using validationExpression', () => {
			/* tslint:disable */
			expect(classUnderTest.validate('1')).to.be.true;
			expect(classUnderTest.validate('a')).to.be.false;
			/* tslint:enable */
		});
	});
});
