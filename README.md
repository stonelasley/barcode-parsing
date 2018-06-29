[![Coverage Status](https://coveralls.io/repos/github/stonelasley/barcode-parsing/badge.svg?branch=master)](https://coveralls.io/github/stonelasley/barcode-parsing?branch=master)
[![Build Status](https://travis-ci.org/stonelasley/barcode-parsing.svg?branch=master)](https://travis-ci.org/stonelasley/barcode-parsing)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Barcode-Parsing

this package has a fairly narrow scope and is used in conjunction with an [Ionic](https://ionicframework.com/) project to read values provided by a physical wedge scanner and parse out the values. I am working on wrapping up the scanning angular component that consumes this directly. 


## Usage
```javascript
    const barcodeParser = new BarcodeParser({
        readers: [
            Symbologies.Code39,
            Symbologies.ITF8,
            Symbologies.GTINX
        ],
        readerConfigurations: []
    });

    barcodeParser.parse(']I010734074010258');
    barcodeParser.parse(']C100111111111111111111101234 30100 310600100');
    barcodeParser.parse(']Z00000000');
```
** please note the input above with spaces would never be valid from a scanner, the spaces would instead be an invisible [group seperator](http://www.theasciicode.com.ar/ascii-control-characters/group-separator-ascii-code-29.html). This library replaces the GS character with a space before parsing so it works for both illustrative purposes and testing. 

 ### Results 

`]I010734074010258`

```json
    "barcodeVal": {
      "_symbology": "itf_14",
      "_rawValue": "]I010734074010258",
      "_checkDigit": 8,
      "_success": true,
      "_values": "1073407401025"
    }
```

`]C100111111111111111111101234 30100 310600100`
```json
 "barcodeVal": {
    "_symbology": "gs1_128",
    "_rawValue": "]C100111111111111111111101234 30100 310600100",
    "_checkDigit": -1,
    "_success": true,
    "_values": [
      {
        "code": "10",
        "value": "1234"
      },
      {
        "code": "00",
        "value": "111111111111111111"
      },
      {
        "code": "30",
        "value": "100"
      },
      {
        "code": "310",
        "value": 0.0001
      }
    ]
}
```

`]Z00000000`
```json
  "barcodeVal": {
    "_symbology": null,
    "_rawValue": "]Z00000000",
    "_checkDigit": -1,
    "_success": false,
    "_values": [],
    "_errorMessage": "No Reader Found"
  }
```

#### Roadmap

 - This package as it stands is very much a "good enough" for what we needed it for but it needs a little work before it can be used easily in an arbitrary project.
 - Reader Specific Configurations. See Code39. 
