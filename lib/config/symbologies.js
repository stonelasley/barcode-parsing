"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Symbologies = /** @class */ (function () {
    function Symbologies() {
    }
    Object.defineProperty(Symbologies, "All", {
        get: function () {
            return [
                this.Code39,
                this.GS1128
            ].concat(this.GTINX, this.ITFX);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "GTINX", {
        get: function () {
            return [
                this.GTIN8,
                this.GTIN12,
                this.GTIN13,
                this.GTIN14,
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "ITFX", {
        get: function () {
            return [
                this.ITF8,
                this.ITF12,
                this.ITF13,
                this.ITF14,
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "Code39", {
        get: function () {
            return 'code_39';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "GTIN8", {
        get: function () {
            return 'gtin_8';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "GTIN12", {
        get: function () {
            return 'gtin_12';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "GTIN13", {
        get: function () {
            return 'gtin_13';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "GTIN14", {
        get: function () {
            return 'gtin_14';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "ITF8", {
        get: function () {
            return 'itf_8';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "ITF12", {
        get: function () {
            return 'itf_12';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "ITF13", {
        get: function () {
            return 'itf_13';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "ITF14", {
        get: function () {
            return 'itf_14';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbologies, "GS1128", {
        get: function () {
            return 'gs1_128';
        },
        enumerable: true,
        configurable: true
    });
    return Symbologies;
}());
exports.Symbologies = Symbologies;
//# sourceMappingURL=symbologies.js.map