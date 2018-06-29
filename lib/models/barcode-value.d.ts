import { IBarcodeValue } from './ibarcode-value';
export declare class BarcodeValue implements IBarcodeValue {
    private _symbology;
    private _rawValue;
    constructor(_symbology: string, _rawValue: string);
    symbology: string;
    rawValue: string;
    private _values;
    values: any;
    private _errorMessage;
    errorMessage: string;
    private _success;
    success: boolean;
    private _checkDigit;
    checkDigit: number;
    pluck(valueKey: string): any;
}
