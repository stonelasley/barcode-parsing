"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var code_39_reader_1 = require("./code-39.reader");
exports.Code39Reader = code_39_reader_1.Code39Reader;
var gtin_8_reader_1 = require("./gtin-8.reader");
exports.Gtin8Reader = gtin_8_reader_1.Gtin8Reader;
var gtin_12_reader_1 = require("./gtin-12.reader");
exports.Gtin12Reader = gtin_12_reader_1.Gtin12Reader;
var gtin_13_reader_1 = require("./gtin-13.reader");
exports.Gtin13Reader = gtin_13_reader_1.Gtin13Reader;
var gtin_14_reader_1 = require("./gtin-14.reader");
exports.Gtin14Reader = gtin_14_reader_1.Gtin14Reader;
var gs_1_reader_1 = require("./gs-1.reader");
exports.GS1Reader = gs_1_reader_1.GS1Reader;
var itf_8_reader_1 = require("./itf-8.reader");
exports.Itf8Reader = itf_8_reader_1.Itf8Reader;
var itf_12_reader_1 = require("./itf-12.reader");
exports.Itf12Reader = itf_12_reader_1.Itf12Reader;
var itf_13_reader_1 = require("./itf-13.reader");
exports.Itf13Reader = itf_13_reader_1.Itf13Reader;
var itf_14_reader_1 = require("./itf-14.reader");
exports.Itf14Reader = itf_14_reader_1.Itf14Reader;
var code_128_reader_1 = require("./code-128.reader");
exports.Code128Reader = code_128_reader_1.Code128Reader;
exports.READERS = [
    code_39_reader_1.Code39Reader,
    code_128_reader_1.Code128Reader,
    gtin_8_reader_1.Gtin8Reader,
    gtin_12_reader_1.Gtin12Reader,
    gtin_13_reader_1.Gtin13Reader,
    gtin_14_reader_1.Gtin14Reader,
    itf_8_reader_1.Itf8Reader,
    itf_12_reader_1.Itf12Reader,
    itf_13_reader_1.Itf13Reader,
    itf_14_reader_1.Itf14Reader,
    gs_1_reader_1.GS1Reader,
];
exports.READER_TYPES = {
    code_39: code_39_reader_1.Code39Reader,
    code_128: code_128_reader_1.Code128Reader,
    gs1_128: gs_1_reader_1.GS1Reader,
    gtin_12: gtin_12_reader_1.Gtin12Reader,
    gtin_13: gtin_13_reader_1.Gtin13Reader,
    gtin_14: gtin_14_reader_1.Gtin14Reader,
    gtin_8: gtin_8_reader_1.Gtin8Reader,
    itf_12: itf_12_reader_1.Itf12Reader,
    itf_13: itf_13_reader_1.Itf13Reader,
    itf_14: itf_14_reader_1.Itf14Reader,
    itf_8: itf_8_reader_1.Itf8Reader,
};
//# sourceMappingURL=index.js.map