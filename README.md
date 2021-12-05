![npm](https://img.shields.io/npm/v/barcode-parser)
[![Coverage Status](https://coveralls.io/repos/github/stonelasley/barcode-parsing/badge.svg?branch=master)](https://coveralls.io/github/stonelasley/barcode-parsing?branch=master)
[![Build](https://github.com/stonelasley/barcode-parsing/actions/workflows/test-release.yml/badge.svg)](https://github.com/stonelasley/barcode-parsing/actions/workflows/test-release.yml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/stonelasley/barcode-parsing.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/stonelasley/barcode-parsing/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/stonelasley/barcode-parsing.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/stonelasley/barcode-parsing/context:javascript)



# Barcode-Parsing

this package has a fairly narrow scope and is used in conjunction with an [Ionic](https://ionicframework.com/) project to read values provided by a physical wedge scanner and parse out the values. I am working on wrapping up the scanning angular component that consumes this directly. 


## Usage
```javascript
    const barcodeParser = new BarcodeParser({
        readers: [
            Symbologies.Code39,
            Symbologies.ITF8,
            ...Symbologies.GTINX // This spreads to support all GTIN lengths 8-14
        ],
        readerConfigurations: [
            {
              symbology: Symbologies.Code39,
              values: [
                {
                  length: 2,
                  start: 0,
                  valueType: 'foo'
                },
                {
                  length: 3,
                  start: 2,
                  valueType: 'bar'
                }
              ]
            }
        ]
    });



    const itfResult = barcodeParser.parse(']I010734074010258');
    // {
    //   symbology: 'itf_14',
    //   rawValue: ']I010734074010258',
    //   checkDigit: 8,
    //   success: true,
    //   values: '1073407401025'
    // }

    // the below input with spaces would never be valid from a scanner, the spaces would instead be an invisible [group seperator](http://www.theasciicode.com.ar/ascii-control-characters/group-separator-ascii-code-29.html). This library replaces the GS character with a space before parsing so it works for both illustrative purposes and testing. 
    const code128Result = barcodeParser.parse(']C100111111111111111111101234 30100 310600100');
    code128Result.pluck(AICode.BatchLot) // '1234'
    code128Result.pluck(AICode.SerialShippingContainerCode) // '111111111111111111'
    code128Result.pluck(AICode.CountOfItems) // '100'
    code128Result.pluck(AICode.ProductNetWeightKg) // .0001

    // {
    //   symbology: 'gs1_128',
    //   rawValue: ']C100111111111111111111101234 30100 310600100',
    //   checkDigit: -1,
    //   success: true,
    //   values: [
    //     {
    //       code: '10',
    //       value: '1234'
    //     },
    //     {
    //       code: '00',
    //       value: '111111111111111111'
    //     },
    //     {
    //       code: '30',
    //       value: '100'
    //     },
    //     {
    //       'code': '310',
    //       'value': 0.0001
    //     }
    //   ]
    // }  

    const code39Result = barcodeParser.parse(']A01234567777777');
    code39Result.success // true
    code39Result.errorMessage // undefined
    code39Result.pluck('foo') // '12'
    code39Result.pluck('bar') // '345'
    code39Result.pluck('bizz') // undefined
    {
      symbology: 'code_39',
      rawValue: ']A01234567777777',
      checkDigit: -1,
      success: true,
      values: [
        {
          code: 'foo',
          value: '12'
        },
        {
          code: 'bar',
          value: '345'
        }
      ]
    }

    const invalidInputResult = barcodeParser.parse(']Z00000000');
    invalidInputResult.success // false
    invalidInputResult.errorMessage // 'No Reader Found'
    // {
    //   symbology: null,
    //   rawValue: ']Z00000000',
    //   checkDigit: -1,
    //   success: false,
    //   values: [],
    //   errorMessage: 'No Reader Found'
    // }
```
