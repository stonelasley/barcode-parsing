import { IReaderConfiguration } from '../models/reader.configuration';
import { IBarcodeValue } from '../models';

export abstract class BaseReader {
    constructor(
        protected _symbology: string,
        protected _validationExpression: any,
        protected _readerConfig: IReaderConfiguration
    ) {}

    public get configuration(): IReaderConfiguration {
        return this._readerConfig;
    }

    public get symbology(): string {
        return this._symbology;
    }

    public get validationExpression(): any {
        return this._validationExpression;
    }

    public validate(value: string): boolean {
        return this.validationExpression.test(value);
    }

    public abstract decode(value: string): IBarcodeValue;

    protected tryValidate(value: string): void {
        if (!this.validate(value)) {
            throw new Error('Invalid Value');
        }
    }
}
