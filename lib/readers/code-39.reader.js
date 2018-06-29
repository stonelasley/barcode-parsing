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
var base_reader_1 = require("./base.reader");
var models_1 = require("../models");
var aim_codes_1 = require("../config/aim-codes");
var aim_parser_1 = require("../utils/aim-parser");
var REG = /^[A-Z0-9* \-$%.+\/]{1,43}$/;
var SYMBOLOGY = 'code_39';
// todo this should probably eventually move into host app
var defaultConfig = {
    values: [
        {
            length: 1,
            start: 0,
            valueType: 'documentType',
        },
        {
            length: 2,
            start: -4,
            valueType: 'companyId',
        },
        {
            length: 2,
            start: -2,
            valueType: 'locationId',
        },
        {
            length: 9,
            start: 1,
            valueType: 'documentId',
        },
    ],
};
var Code39Reader = /** @class */ (function (_super) {
    __extends(Code39Reader, _super);
    function Code39Reader(readerConfig) {
        var _this = this;
        var config = readerConfig || defaultConfig;
        _this = _super.call(this, SYMBOLOGY, REG, config) || this;
        return _this;
    }
    Code39Reader.prototype.validate = function (value) {
        var aimPrefix = value.indexOf(aim_codes_1.AIM_CODES.CODE39);
        return aimPrefix === 0 && _super.prototype.validate.call(this, aim_parser_1.AimParser.parseAimCode(this.symbology, value));
    };
    Code39Reader.prototype.decode = function (value) {
        var result = new models_1.BarcodeValue(this.symbology, value);
        try {
            this.tryValidate(value);
            // result.values = this.parseValues(value);
            result.values = aim_parser_1.AimParser.parseAimCode(this.symbology, value);
        }
        catch (ex) {
            result.success = false;
            result.errorMessage = ex;
        }
        return result;
    };
    return Code39Reader;
}(base_reader_1.BaseReader));
exports.Code39Reader = Code39Reader;
//# sourceMappingURL=code-39.reader.js.map