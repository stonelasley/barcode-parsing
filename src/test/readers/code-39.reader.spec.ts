import { expect }                 from 'chai';
import { IReaderConfiguration }   from "../../models/reader.configuration";
import { Code39Reader }           from "../../readers/code-39.reader";
import { AIM_CODES }              from '../../config/aim-codes';


describe('code39Reader', () => {

	let config = {} as IReaderConfiguration;
	let classUnderTest: Code39Reader;

	let decodeValues: string[] = [
		AIM_CODES.CODE39 + 'P0010065330101',
		AIM_CODES.CODE39 + 'I0010065330101',
		AIM_CODES.CODE39 + 'M0010065330101',
		AIM_CODES.CODE39 + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-$%.+/',
		AIM_CODES.CODE39 + 'A'
	];

	let invalidValues: string[] = [
		']B011111111111111111111111111111111111111111111',
		']A011111111111111111111111111111111111111111111',
		'ABCDEFGhIJKLMNOPQRSTUVWXYZ1234567890-$%.+/',
		'',
		'~11223344',
		'1122#3344'
	];

	beforeEach(() => {
		classUnderTest = new Code39Reader(config);
	});

	describe('decode', () => {

		it('should include symbology in result', () => {
			let result = classUnderTest.decode(decodeValues[0]);
			expect(result.symbology).to.equal('code_39');
		});

		it('should include rawValue in result', () => {
			let result = classUnderTest.decode(decodeValues[1]);
			expect(result.rawValue).to.equal(decodeValues[1]);
		});
	});

	describe('validate', () => {

		decodeValues.forEach(function (value) {
			it('should return true for valid value: ' + value, () => {
				expect(classUnderTest['validate'](value)).to.be.true;
			});
		});

		invalidValues.forEach(function (value) {
			it('should return false for invalid value: ' + value, () => {
				expect(classUnderTest['validate'](value)).to.be.false;
			});
		});
	});


});