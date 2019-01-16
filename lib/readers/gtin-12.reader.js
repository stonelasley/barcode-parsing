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
var base_gtin_reader_1 = require("./base-gtin.reader");
var REG = /^\]E[0-9]{12,12}$/;
var SYMBOLOGY = 'gtin_12';
var LENGTH = 12;
var Gtin12Reader = /** @class */ (function (_super) {
    __extends(Gtin12Reader, _super);
    function Gtin12Reader(readerConfig) {
        return _super.call(this, SYMBOLOGY, REG, LENGTH, readerConfig) || this;
    }
    return Gtin12Reader;
}(base_gtin_reader_1.BaseGtinReader));
exports.Gtin12Reader = Gtin12Reader;
//# sourceMappingURL=gtin-12.reader.js.map