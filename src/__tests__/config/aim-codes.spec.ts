import { AimCodes } from '../../config';

describe('AimCodes', () => {

    describe('GS1', () => {
        it('should return GS1 code', () =>{
            expect(AimCodes.GS1).toBe(']C1');
        });
    });

    describe('GTIN', () => {
        it('should return GTIN code', () =>{
            expect(AimCodes.GTIN).toBe(']E');
        });
    });

    describe('ITF', () => {
        it('should return ITF code', () =>{
            expect(AimCodes.ITF).toBe(']I0');
        });
    });

    describe('CODE39', () => {
        it('should return CODE39 code', () =>{
            expect(AimCodes.CODE39).toBe(']A0');
        });
    });

    describe('CODE128', () => {
        it('should return CODE128 code', () =>{
            expect(AimCodes.CODE128).toBe(']C0');
        });
    });
});
