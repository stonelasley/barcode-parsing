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

	test('should set symbology', () => {
		classUnderTest = new TestReader({} as IReaderConfiguration);
		expect(classUnderTest.symbology).toBe(SYMBOLOGY);
	});

	test('should set readerConfig', () => {
		classUnderTest = new TestReader(config);
		expect(classUnderTest.config).toBe(config);
	});

	describe('validate', () => {

		test('should validate using validationExpression', () => {
			/* tslint:disable */
			expect(classUnderTest.validate('1')).toBe(true);
			expect(classUnderTest.validate('a')).toBe(false);
			/* tslint:enable */
		});
	});
});
