"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var symbologies_1 = require("./../config/symbologies");
var aim_codes_1 = require("../config/aim-codes");
var AimParser = /** @class */ (function () {
    function AimParser() {
    }
    AimParser.parseAimCode = function (symbology, value) {
        switch (symbology) {
            case symbologies_1.Symbologies.GTIN8:
                return value.replace(aim_codes_1.AIMCODES.GTIN, '');
            case symbologies_1.Symbologies.GTIN12:
                return value.replace(aim_codes_1.AIMCODES.GTIN, '');
            case symbologies_1.Symbologies.GTIN13:
                return value.replace(aim_codes_1.AIMCODES.GTIN, '');
            case symbologies_1.Symbologies.GTIN14:
                return value.replace(aim_codes_1.AIMCODES.GTIN, '');
            case symbologies_1.Symbologies.ITF8:
                return value.replace(aim_codes_1.AIMCODES.ITF, '');
            case symbologies_1.Symbologies.ITF12:
                return value.replace(aim_codes_1.AIMCODES.ITF, '');
            case symbologies_1.Symbologies.ITF13:
                return value.replace(aim_codes_1.AIMCODES.ITF, '');
            case symbologies_1.Symbologies.ITF14:
                return value.replace(aim_codes_1.AIMCODES.ITF, '');
            case symbologies_1.Symbologies.GS1128:
                return value.replace(aim_codes_1.AIMCODES.GS1, '');
            case symbologies_1.Symbologies.Code39:
                return value.replace(aim_codes_1.AIMCODES.CODE39, '');
            case symbologies_1.Symbologies.Code128:
                return value.replace(aim_codes_1.AIMCODES.CODE128, '');
            default:
                return value;
        }
    };
    return AimParser;
}());
exports.AimParser = AimParser;
//# sourceMappingURL=aim-parser.js.map