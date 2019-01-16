"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BarcodeValue = /** @class */ (function () {
    function BarcodeValue(_symbology, _rawValue) {
        this._symbology = _symbology;
        this._rawValue = _rawValue;
        this._checkDigit = -1;
        this._success = true;
        this.values = [];
    }
    Object.defineProperty(BarcodeValue.prototype, "symbology", {
        get: function () {
            return this._symbology;
        },
        set: function (value) {
            this._symbology = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeValue.prototype, "rawValue", {
        get: function () {
            return this._rawValue;
        },
        set: function (value) {
            this._rawValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeValue.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (value) {
            this._values = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeValue.prototype, "errorMessage", {
        get: function () {
            return this._errorMessage;
        },
        set: function (value) {
            this._errorMessage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeValue.prototype, "success", {
        get: function () {
            return this._success;
        },
        set: function (value) {
            this._success = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeValue.prototype, "checkDigit", {
        get: function () {
            return this._checkDigit;
        },
        set: function (value) {
            this._checkDigit = value;
        },
        enumerable: true,
        configurable: true
    });
    BarcodeValue.prototype.pluck = function (valueKey) {
        if (this.values !== undefined && this.values instanceof Array) {
            var result = this.values.filter(function (r) {
                return r.code === valueKey;
            });
            if (result[0]) {
                return result[0].value;
            }
        }
    };
    return BarcodeValue;
}());
exports.BarcodeValue = BarcodeValue;
//# sourceMappingURL=barcode-value.js.map