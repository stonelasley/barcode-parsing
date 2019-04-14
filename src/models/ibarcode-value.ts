export interface IBarcodeValue {
    symbology: string;
    rawValue: string;
    values: any;
    errorMessage: string;
    success: boolean;
    checkDigit: number;
    isWeightBased: boolean;
    systemId: string;
    systemMeasure: number;
    pluck(valueKey: string): any;
}
