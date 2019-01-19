import { AIMCODES } from './../../config/aim-codes';
import { Symbologies } from './../../config/symbologies';
import { AimParser } from '../../utils/aim-parser';
describe('AimParser', () => {

	const value = '123456';

	describe('parseAimCode', () => {

		test('should strip AIM Code from gtin_8', () => {
			expect(AimParser.parseAimCode(Symbologies.GTIN8, AIMCODES.GTIN + value)).toBe(value);
		});

		test('should strip AIM Code from gtin_12', () => {
			expect(AimParser.parseAimCode(Symbologies.GTIN12, AIMCODES.GTIN + value)).toBe(value);
		});

		test('should strip AIM Code from gtin_13', () => {
			expect(AimParser.parseAimCode(Symbologies.GTIN13, AIMCODES.GTIN + value)).toBe(value);
		});

		test('should strip AIM Code from gtin_14', () => {
			expect(AimParser.parseAimCode(Symbologies.GTIN14, AIMCODES.GTIN + value)).toBe(value);
		});

		test('should strip AIM Code from itf_8', () => {
			expect(AimParser.parseAimCode(Symbologies.ITF8, AIMCODES.ITF + value)).toBe(value);
		});

		test('should strip AIM Code from itf_12', () => {
			expect(AimParser.parseAimCode(Symbologies.ITF12, AIMCODES.ITF + value)).toBe(value);
		});

		test('should strip AIM Code from itf_13', () => {
			expect(AimParser.parseAimCode(Symbologies.ITF13, AIMCODES.ITF + value)).toBe(value);
		});

		test('should strip AIM Code from itf_14', () => {
			expect(AimParser.parseAimCode(Symbologies.ITF14, AIMCODES.ITF + value)).toBe(value);
		});
		test('should strip AIM Code from GS1', () => {
			expect(AimParser.parseAimCode(Symbologies.GS1128, AIMCODES.GS1 + value)).toBe(value);
		});

		test('should strip AIM Code from CODE_39', () => {
			expect(AimParser.parseAimCode(Symbologies.Code39, AIMCODES.CODE39 + value)).toBe(value);
		});

		test('should strip AIM Code from CODE_128', () => {
			expect(AimParser.parseAimCode(Symbologies.Code128, AIMCODES.CODE128 + value)).toBe(value);
		});
	});
});
