import { BarcodeParser } from '../barcode-parser';
import { IBarcodeValue, IParserConfiguration, IReaderConfiguration } from '../models';
import { Symbologies } from '../enums';

class TestClass extends BarcodeParser {
    constructor(config: IParserConfiguration) {
        super(config);
    }

    public parse(barcodeVal: any): IBarcodeValue {
        return super.parse(barcodeVal);
    }

    protected initReaders(readerTypes: string[], configurations: IReaderConfiguration[]) {
        return super.initReaders(readerTypes, configurations);
    }
}

describe('BarcodeParser', () => {
    let classUnderTest: TestClass;
    let config: IParserConfiguration;

    describe('parse', () => {
        beforeEach(() => {
            config = {
                readerConfigurations: [],
                readers: Symbologies.All,
            };

            classUnderTest = new TestClass(config);
        });

        it('should return IBarcodeValue with errorMessage as \'No Reader Found\'', () => {
            const result: IBarcodeValue = classUnderTest.parse('invalid');

            expect(result.errorMessage).toBe('No Reader Found');
        });

        it('should return IBarcodeValue with success set to false', () => {
            const result: IBarcodeValue = classUnderTest.parse('invalid');

            expect(result.success).toBe(false);
        });

        it('should return IBarcodeValue with rawValue set to input', () => {
            const result: IBarcodeValue = classUnderTest.parse('invalid');

            expect(result.rawValue).toBe('invalid');
        });
    });
});
