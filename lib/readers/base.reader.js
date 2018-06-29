"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseReader = /** @class */ (function () {
    function BaseReader(_symbology, _validationExpression, _readerConfig) {
        this._symbology = _symbology;
        this._validationExpression = _validationExpression;
        this._readerConfig = _readerConfig;
    }
    Object.defineProperty(BaseReader.prototype, "configuration", {
        get: function () {
            return this._readerConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReader.prototype, "symbology", {
        get: function () {
            return this._symbology;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReader.prototype, "validationExpression", {
        get: function () {
            return this._validationExpression;
        },
        enumerable: true,
        configurable: true
    });
    BaseReader.prototype.validate = function (value) {
        return this.validationExpression.test(value);
    };
    BaseReader.prototype.tryValidate = function (value) {
        if (!this.validate(value)) {
            throw new Error('Invalid Value');
        }
    };
    return BaseReader;
}());
exports.BaseReader = BaseReader;
//# sourceMappingURL=base.reader.js.map