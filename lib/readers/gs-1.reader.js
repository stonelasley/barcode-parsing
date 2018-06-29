"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_reader_1 = require("../readers/base.reader");
var barcode_value_1 = require("../models/barcode-value");
var application_identifiers_1 = require("../models/application-identifiers");
var control_characters_config_1 = require("../config/control-characters.config");
var aim_codes_1 = require("../config/aim-codes");
var aim_parser_1 = require("../utils/aim-parser");
var SYMBOLOGY = 'gs1_128';
var DELIMITER = ' ';
var GS1Reader = /** @class */ (function (_super) {
    __extends(GS1Reader, _super);
    function GS1Reader(readerConfig) {
        return _super.call(this, SYMBOLOGY, null, readerConfig) || this;
    }
    GS1Reader.prototype.validate = function (value) {
        var idPrefix = value.indexOf(aim_codes_1.AIMCODES.GS1);
        var valueLength = aim_parser_1.AimParser.parseAimCode(this.symbology, value).length;
        return idPrefix === 0 && valueLength > 0;
    };
    GS1Reader.prototype.decode = function (value) {
        var _this = this;
        var sterilizedValue = this.removeControlCharacters(value);
        var result = new barcode_value_1.BarcodeValue(this.symbology, value);
        try {
            this.tryValidate(value);
            var valWithoutId = aim_parser_1.AimParser.parseAimCode(this.symbology, sterilizedValue);
            result.values = [].concat.apply([], valWithoutId.split(DELIMITER).map(function (val) { return _this.parseValues(val); }));
        }
        catch (ex) {
            result.success = false;
            result.errorMessage = ex;
        }
        return result;
    };
    GS1Reader.prototype.removeControlCharacters = function (value) {
        var result = value;
        control_characters_config_1.CONTROLCHARS.forEach(function (charCode) {
            result = result.replace(String.fromCharCode(charCode), DELIMITER);
        });
        return result;
    };
    GS1Reader.prototype.findAi = function (value) {
        var ai = null;
        var codeLength = 2;
        var _loop_1 = function () {
            var code = value.substr(0, codeLength);
            var ais = application_identifiers_1.APPLICATION_IDENTIFIERS.filter(function (x) {
                return x.code === code;
            });
            if (ais.length > 0) {
                ai = ais[0];
            }
            else {
                codeLength++;
            }
        };
        while (ai === null && codeLength < 5) {
            _loop_1();
        }
        return ai;
    };
    GS1Reader.prototype.parseValue = function (ai, input) {
        var val = null;
        if (ai.fractional !== true) {
            val = input.substr(ai.code.length, ai.length);
        }
        else {
            var scale = Number(input.charAt(ai.code.length));
            var num = input.substr(ai.code.length + 1, ai.length);
            val = Number(num) / Math.pow(10, scale);
        }
        return {
            code: ai.code,
            value: val,
        };
    };
    GS1Reader.prototype.parseValues = function (input) {
        var vals = Array();
        var ai = this.findAi(input);
        if (input.length > ai.totalLength) {
            vals = vals.concat(this.parseValues(input.substr(ai.totalLength)));
        }
        vals.push(this.parseValue(ai, input));
        return vals;
    };
    return GS1Reader;
}(base_reader_1.BaseReader));
exports.GS1Reader = GS1Reader;
//# sourceMappingURL=gs-1.reader.js.map