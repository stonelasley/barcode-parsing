import { AimCodes, Symbologies } from './../../config';
import { AimParser } from '../../utils';

describe('AimParser', () => {
    const value = '123456';

    describe('parseAimCode', () => {
        test('should strip AIM Code from gtin_8', () => {
            expect(
                AimParser.parseAimCode(Symbologies.GTIN8, AimCodes.GTIN + value)
            ).toBe(value);
        });

        test('should strip AIM Code from gtin_12', () => {
            expect(
                AimParser.parseAimCode(
                    Symbologies.GTIN12,
                    AimCodes.GTIN + value
                )
            ).toBe(value);
        });

        test('should strip AIM Code from gtin_13', () => {
            expect(
                AimParser.parseAimCode(
                    Symbologies.GTIN13,
                    AimCodes.GTIN + value
                )
            ).toBe(value);
        });

        test('should strip AIM Code from gtin_14', () => {
            expect(
                AimParser.parseAimCode(
                    Symbologies.GTIN14,
                    AimCodes.GTIN + value
                )
            ).toBe(value);
        });

        test('should strip AIM Code from itf_8', () => {
            expect(
                AimParser.parseAimCode(Symbologies.ITF8, AimCodes.ITF + value)
            ).toBe(value);
        });

        test('should strip AIM Code from itf_12', () => {
            expect(
                AimParser.parseAimCode(Symbologies.ITF12, AimCodes.ITF + value)
            ).toBe(value);
        });

        test('should strip AIM Code from itf_13', () => {
            expect(
                AimParser.parseAimCode(Symbologies.ITF13, AimCodes.ITF + value)
            ).toBe(value);
        });

        test('should strip AIM Code from itf_14', () => {
            expect(
                AimParser.parseAimCode(Symbologies.ITF14, AimCodes.ITF + value)
            ).toBe(value);
        });
        test('should strip AIM Code from GS1', () => {
            expect(
                AimParser.parseAimCode(Symbologies.GS1128, AimCodes.GS1 + value)
            ).toBe(value);
        });

        test('should strip AIM Code from CODE_39', () => {
            expect(
                AimParser.parseAimCode(
                    Symbologies.Code39,
                    AimCodes.CODE39 + value
                )
            ).toBe(value);
        });

        test('should strip AIM Code from CODE_128', () => {
            expect(
                AimParser.parseAimCode(
                    Symbologies.Code128,
                    AimCodes.CODE128 + value
                )
            ).toBe(value);
        });
    });
});
