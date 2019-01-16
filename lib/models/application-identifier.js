"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationIdentifier = /** @class */ (function () {
    function ApplicationIdentifier(_code, _description, _length, _variableLength, fractional) {
        this._code = _code;
        this._description = _description;
        this._length = _length;
        this._variableLength = _variableLength;
        this.frac = false;
        this.frac = fractional || false;
    }
    Object.defineProperty(ApplicationIdentifier.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationIdentifier.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationIdentifier.prototype, "variableLength", {
        get: function () {
            return this._variableLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationIdentifier.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationIdentifier.prototype, "totalLength", {
        get: function () {
            return this._code.length + this._length + (this.fractional === true ? 1 : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationIdentifier.prototype, "fractional", {
        get: function () {
            return this.frac;
        },
        enumerable: true,
        configurable: true
    });
    return ApplicationIdentifier;
}());
exports.ApplicationIdentifier = ApplicationIdentifier;
//# sourceMappingURL=application-identifier.js.map