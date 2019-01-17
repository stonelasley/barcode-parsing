"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readers_1 = require("./readers");
var models_1 = require("./models");
var BarcodeParser = /** @class */ (function () {
    function BarcodeParser(config) {
        this.initReaders(config.readers, config.readerConfigurations);
    }
    Object.defineProperty(BarcodeParser.prototype, "readers", {
        get: function () {
            return this._readers;
        },
        set: function (value) {
            this._readers = value;
        },
        enumerable: true,
        configurable: true
    });
    BarcodeParser.prototype.parse = function (barcodeVal) {
        var result = null;
        this._readers.forEach(function (reader) {
            if (reader.validate(barcodeVal)) {
                result = reader.decode(barcodeVal);
            }
        });
        if (!result) {
            result = new models_1.BarcodeValue(null, barcodeVal);
            result.errorMessage = 'No Reader Found';
            result.success = false;
        }
        return result;
    };
    BarcodeParser.prototype.initReaders = function (readerTypes, configurations) {
        this.readers = readerTypes.map(function (r) {
            var readerConfig;
            if (configurations.length > 0) {
                var configs = configurations.filter(function (c) { return c !== undefined && r === c.symbology; });
                readerConfig = configs.pop();
            }
            if (readers_1.READER_TYPES[r]) {
                return new readers_1.READER_TYPES[r](readerConfig);
            }
        });
        /* tslint:disable */
        this._readers.forEach(function (reader) { return console.log('Reader Initialized: ', reader); });
        /* tslint:enable */
    };
    return BarcodeParser;
}());
exports.BarcodeParser = BarcodeParser;
//# sourceMappingURL=barcode-parser.js.map