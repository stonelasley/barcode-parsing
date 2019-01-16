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
var aim_parser_1 = require("../utils/aim-parser");
var models_1 = require("../models");
var BaseGtinReader = /** @class */ (function (_super) {
    __extends(BaseGtinReader, _super);
    function BaseGtinReader(symbology, validationExpression, _length, readerConfig) {
        var _this = _super.call(this, symbology, validationExpression, readerConfig) || this;
        _this._length = _length;
        return _this;
    }
    BaseGtinReader.prototype.decode = function (value) {
        var result = new models_1.BarcodeValue(this.symbology, value);
        try {
            this.tryValidate(value);
            result.values = this.parseValues(value);
            result.checkDigit = this.checkDigit(value);
        }
        catch (ex) {
            result.success = false;
            result.errorMessage = ex.message;
        }
        return result;
    };
    BaseGtinReader.prototype.checkDigit = function (value) {
        return parseInt(value.substring(value.length - 1), null);
    };
    BaseGtinReader.prototype.parseValues = function (value) {
        return aim_parser_1.AimParser.parseAimCode(this.symbology, value);
    };
    return BaseGtinReader;
}(base_reader_1.BaseReader));
exports.BaseGtinReader = BaseGtinReader;
//# sourceMappingURL=base-gtin.reader.js.map