import { AimCodes, Symbologies } from './../enums';

export class AimParser {
    public static parseAimCode(symbology: string, value: string): string {
        switch (symbology) {
            case Symbologies.GTIN8:
                return value.replace(AimCodes.GTIN, '');
            case Symbologies.GTIN12:
                return value.replace(AimCodes.GTIN, '');
            case Symbologies.GTIN13:
                return value.replace(AimCodes.GTIN, '');
            case Symbologies.GTIN14:
                return value.replace(AimCodes.GTIN, '');
            case Symbologies.ITF8:
                return value.replace(AimCodes.ITF, '');
            case Symbologies.ITF12:
                return value.replace(AimCodes.ITF, '');
            case Symbologies.ITF13:
                return value.replace(AimCodes.ITF, '');
            case Symbologies.ITF14:
                return value.replace(AimCodes.ITF, '');
            case Symbologies.GS1128:
                return value.replace(AimCodes.GS1, '');
            case Symbologies.Code39:
                return value.replace(AimCodes.CODE39, '');
            case Symbologies.Code128:
                return value.replace(AimCodes.CODE128, '');
            default:
                return value;
        }
    }
}
