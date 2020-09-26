import { IBarcodeValue } from './ibarcode-value';
import { Symbologies } from '../enums';

export class BarcodeValue implements IBarcodeValue {
    private _values: any;
    private _errorMessage: string;
    private _success: boolean;
    private _checkDigit: number = -1;

    constructor(private _symbology: string, private _rawValue: string) {
        this._success = true;
        this.values = [];
    }

    public get symbology(): string {
        return this._symbology;
    }

    public set symbology(value: string) {
        this._symbology = value;
    }

    public get rawValue(): string {
        return this._rawValue;
    }

    public set rawValue(value: string) {
        this._rawValue = value;
    }

    public get values(): any {
        return this._values;
    }

    public set values(value: any) {
        this._values = value;
    }

    public get errorMessage(): string {
        return this._errorMessage;
    }

    public set errorMessage(value: string) {
        this._errorMessage = value;
    }

    public get success(): boolean {
        return this._success;
    }

    public set success(value: boolean) {
        this._success = value;
    }

    public get checkDigit(): number {
        return this._checkDigit;
    }

    public set checkDigit(value: number) {
        this._checkDigit = value;
    }

    public get isWeightBased(): boolean {
        const checkOne = this.symbology === Symbologies.GTIN13;
        const checkTwo = typeof this.values;
        const checkThree = this.values.slice(0, 1) === '2';
        return checkOne && checkTwo === 'string' && checkThree;
    }

    public get systemId(): string {
        if (this.isWeightBased === true) {
            return this._values.substring(1, 6);
        }
        return null;
    }

    public get systemMeasure(): number {
        if (this.isWeightBased === true) {
            return parseFloat(this._values.substring(7, 12)) / 100;
        }
        return null;
    }
    public pluck(valueKey: string): any {
        if (this.values !== undefined && this.values instanceof Array) {
            const result = this.values.filter((r: any) => {
                return r.code === valueKey;
            });
            if (result[0]) {
                return result[0].value;
            }
        }
    }
}
