export interface IBarcodeValue {
	symbology: string;
	rawValue: string;
	values: any;
	errorMessage: string;
	success: boolean;
	checkDigit: number;
	pluck(valueKey: string): any;
}
