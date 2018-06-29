import { Symbologies } from './../config/symbologies';
import { AIM_CODES } from '../config/aim-codes';

export class AimParser {

	public static parseAimCode(symbology: string, value: string): string {

		switch (symbology) {
			case Symbologies.GTIN8:
				return value.replace(AIM_CODES.GTIN, '');
			case Symbologies.GTIN12:
				return value.replace(AIM_CODES.GTIN, '');
			case Symbologies.GTIN13:
				return value.replace(AIM_CODES.GTIN, '');
			case Symbologies.GTIN14:
				return value.replace(AIM_CODES.GTIN, '');
			case Symbologies.ITF8:
				return value.replace(AIM_CODES.ITF, '');
			case Symbologies.ITF12:
				return value.replace(AIM_CODES.ITF, '');
			case Symbologies.ITF13:
				return value.replace(AIM_CODES.ITF, '');
			case Symbologies.ITF14:
				return value.replace(AIM_CODES.ITF, '');
			case Symbologies.GS1128:
				return value.replace(AIM_CODES.GS1, '');
			case Symbologies.Code39:
				return value.replace(AIM_CODES.CODE39, '');
			default:
				return value;
		}

	}
}
