import { expect } from 'chai';
import { IReaderConfiguration } from '../../models';
import { GS1Reader } from '../../readers/gs-1.reader';
import { ApplicationIdentifier } from '../../models/application-identifier';

export class Tester extends GS1Reader {

	public testParseValues(v: string): object[] {
		return this.parseValues(v);
	}

	public testGetAi(c: string): ApplicationIdentifier {
		return this.findAi(c);
	}

	public testValidate(v: string): boolean {
		return this.validate(v);
	}

	public removeControlCharacters(value: string): string {
		return super.removeControlCharacters(value);
	}
}
describe('Gs1Reader', () => {

	let config: IReaderConfiguration;
	let classUnderTest: Tester;

	beforeEach(() => {
		config = {
			delimiter: ' ',
			identifier: ']C1',
		} as IReaderConfiguration;

		classUnderTest = new Tester(config);
	});

	describe('validate', () => {

		it('should validate identifier is prefixed', () => {
			/* tslint:disable */
			expect(classUnderTest.validate('ABCDEFG')).to.be.false;
			expect(classUnderTest.validate('C1')).to.be.false;
			expect(classUnderTest.validate(']]C1')).to.be.false;
			expect(classUnderTest.validate(']C1A')).to.be.true;
			expect(classUnderTest.validate(']C1111111111111111111111111')).to.be.true;
			/* tslint:enable */
		});

		it('should validate value is at least 1 character', () => {
			/* tslint:disable */
			expect(classUnderTest['validate'](']C1')).to.be.false;
			expect(classUnderTest['validate'](']C1A')).to.be.true;
			/* tslint:enable */
		});

	});

	describe('parseValues', () => {
		it('should parse single fixed width AI', () => {
			const actual = classUnderTest.testParseValues('0196283290839476');
			expect(actual).to.include({code: '01', value: '96283290839476'});

			const actual1 = classUnderTest.testParseValues('11150523');
			expect(actual1).to.include({code: '11', value: '150523'});
		});

		it('should parse multiple fixed width AI', () => {
			const actual = classUnderTest.testParseValues('019628329083947611150523');
			expect(actual).to.include({code: '01', value: '96283290839476'});
			expect(actual).to.include({code: '11', value: '150523'});

			const actual1 = classUnderTest.testParseValues('01962832908394761115052312999999');
			expect(actual1).to.include({code: '01', value: '96283290839476'});
			expect(actual1).to.include({code: '11', value: '150523'});
			expect(actual1).to.include({code: '12', value: '999999'});
		});

		it('should parse variable length value less than max length', () => {
			const actual2 = classUnderTest.testParseValues('10ES005867003');
			expect(actual2).to.include({code: '10', value: 'ES005867003'});
		});

		it('should parse fractional values', () => {
			// scale 0
			const actual0 = classUnderTest.testParseValues('3300010000');
			expect(actual0).to.include({code: '330', value: 10000});

			// scale 2
			const actual = classUnderTest.testParseValues('3302010000');
			expect(actual).to.include({code: '330', value: 100.00});

			// scale 4
			const actual1 = classUnderTest.testParseValues('3224999999');
			expect(actual1).to.include({code: '322', value: 99.9999});

			// scale 6
			const actual2 = classUnderTest.testParseValues('3616123456');
			expect(actual2).to.include({code: '361', value: .123456});
		});

		it('should handle fractional after non-fractional', () => {
			const actual = classUnderTest.testParseValues('36161234560196283290839476');
			expect(actual).to.include({code: '361', value: .123456});
			expect(actual).to.include({code: '01', value: '96283290839476'});
		});

		it('should handle non-fractional after fractional ', () => {
			const actual = classUnderTest.testParseValues('01962832908394763916123456');
			expect(actual).to.include({code: '391', value: .123456});
			expect(actual).to.include({code: '01', value: '96283290839476'});
		});
	});

	describe('findAi', () => {
		it('should get 2 character Ai', () => {
			const testVals = ['01', '0199999', '01ABCDEFG'];

			testVals.forEach((val) => {
				const actual = classUnderTest.testGetAi(val);
				expect(actual.code).to.eq('01');
				expect(actual.description).to.eq('Global Trade Item Number');
				expect(actual.length).to.eq(14);
				/* tslint:disable */
				expect(actual.variableLength).to.be.false;
				/* tslint:enable */
			});
		});

		it('should get 3 character Ai', () => {
			const testVals = ['241', '241ABCDEFG', '2419999999'];

			testVals.forEach((val) => {
				const actual = classUnderTest.testGetAi(val);

				expect(actual.code).to.eq('241');
				expect(actual.description).to.eq('Customer Part Number');
				expect(actual.length).to.eq(30);
				/* tslint:disable */
				expect(actual.variableLength).to.be.true;
				/* tslint:enable */
			});
		});

		it('should get 4 character Ai', () => {
			const testVals = ['8020', '8020ABCDEFGHIJ', '8020999999999'];

			testVals.forEach((val) => {
				const actual = classUnderTest.testGetAi(val);

				expect(actual.code).to.eq('8020');
				expect(actual.description).to.eq('Payment slip preference number');
				expect(actual.length).to.eq(25);
				/* tslint:disable */
				expect(actual.variableLength).to.be.true;
				/* tslint:enable */
			});
		});
	});

	describe('decode', () => {

		it('should split on default delimiter', () => {

			const actual = classUnderTest.decode(']C112999999101 1001 2101');
			expect(actual.values).to.include({code: '12', value: '999999'});
			expect(actual.values).to.include({code: '10', value: '1'});
			expect(actual.values).to.include({code: '10', value: '01'});
			expect(actual.values).to.include({code: '21', value: '01'});
		});

		it('should split on space if no specified delimiter', () => {

			config = {
				delimiter: '',
				identifier: ']C1',
			} as IReaderConfiguration;

			classUnderTest = new Tester(config);

			const actual = classUnderTest.decode(']C10196283290839476101 1001 2101');
			expect(actual.values).to.include({code: '01', value: '96283290839476'});
			expect(actual.values).to.include({code: '10', value: '1'});
			expect(actual.values).to.include({code: '10', value: '01'});
			expect(actual.values).to.include({code: '21', value: '01'});
		});
	});

	describe('removeControlCharacters', () => {

		it('should replace control characters with delimiter', () => {
			const expected = ']C102084135560009503703 10ES003472002';
			const input = expected.replace(' ', String.fromCharCode(29));
			expect(classUnderTest.removeControlCharacters(input)).to.eq(expected);
		});
	});

	it('should parse known gs1s', () => {
		const actual = classUnderTest.decode(']C1019628329083134011150523310200059421145143242042');
		const actual1 = classUnderTest.decode(']C1019628329083947611150529310200178721145149307335');
		const actual2 = classUnderTest.decode(']C102084135560009503703 10ES003472002');
		const actual3 = classUnderTest.decode(']C102084135560009503703 10ES003472002'.replace(' ', String.fromCharCode(29)));

		expect(actual.values).to.include({code: '21', value: '145143242042'});
		expect(actual.values).to.include({code: '310', value: 5.94});
		expect(actual.values).to.include({code: '11', value: '150523'});
		expect(actual.values).to.include({code: '01', value: '96283290831340'});

		expect(actual1.values).to.include({code: '21', value: '145149307335'});
		expect(actual1.values).to.include({code: '310', value: 17.87});
		expect(actual1.values).to.include({code: '11', value: '150529'});
		expect(actual1.values).to.include({code: '01', value: '96283290839476'});

		expect(actual2.values).to.include({code: '02', value: '08413556000950'});
		expect(actual2.values).to.include({code: '37', value: '03'});
		expect(actual2.values).to.include({code: '10', value: 'ES003472002'});

		expect(actual3.values).to.include({code: '02', value: '08413556000950'});
		expect(actual3.values).to.include({code: '37', value: '03'});
		expect(actual3.values).to.include({code: '10', value: 'ES003472002'});
	});

});
