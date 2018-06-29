import {expect}                                 from 'chai';

import {BaseReader}                             from "../../readers/base.reader";
import {IBarcodeValue, IReaderConfiguration}    from '../../models';

const REG: any = /[0-9]/;
const SYMBOLOGY: string = 'MYSYMBOLOGY';

class TestReader extends BaseReader {

	public decode(value: string): IBarcodeValue{
		return <IBarcodeValue>{};
	}

	constructor(readerConfig?: IReaderConfiguration) {
		super(SYMBOLOGY, REG, readerConfig);
	}
}
describe('baseReader', () => {

	let symbology: string;
	let config = {} as IReaderConfiguration;
	let classUnderTest: TestReader;


	beforeEach(() => {
		classUnderTest = new TestReader(config);
	});

	it('should set symbology', () => {
		classUnderTest = new TestReader(<IReaderConfiguration>{});
		expect(classUnderTest.symbology).to.equal(SYMBOLOGY);
	});

	it('should set readerConfig', () => {
		classUnderTest = new TestReader(config);
		expect(classUnderTest['_readerConfig']).to.equal(config);
	});

	describe('validate', () => {

		it('should validate using validationExpression', () => {
				expect(classUnderTest['validate']('1')).to.be.true;
				expect(classUnderTest['validate']('a')).to.be.false;
		});
	});
});