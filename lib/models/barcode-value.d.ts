import { IBarcodeValue } from './ibarcode-value';
export declare class BarcodeValue implements IBarcodeValue {
    private _symbology;
    private _rawValue;
    private _values;
    private _errorMessage;
    private _success;
    private _checkDigit;
    constructor(_symbology: string, _rawValue: string);
    symbology: string;
    rawValue: string;
    values: any;
    errorMessage: string;
    success: boolean;
    checkDigit: number;
    pluck(valueKey: string): any;
}
