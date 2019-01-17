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
var REG = /^\]I0[0-9]{12,12}$/;
var SYMBOLOGY = 'itf_12';
var LENGTH = 12;
var Itf12Reader = /** @class */ (function (_super) {
    __extends(Itf12Reader, _super);
    function Itf12Reader(readerConfig) {
        return _super.call(this, SYMBOLOGY, REG, LENGTH, readerConfig) || this;
    }
    return Itf12Reader;
}(base_gtin_reader_1.BaseGtinReader));
exports.Itf12Reader = Itf12Reader;
//# sourceMappingURL=itf-12.reader.js.map