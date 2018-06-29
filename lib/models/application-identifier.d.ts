export declare class ApplicationIdentifier {
    private _code;
    private _description;
    private _length;
    private _variableLength;
    readonly code: string;
    readonly length: number;
    readonly variableLength: boolean;
    readonly description: string;
    readonly totalLength: number;
    private _fractional;
    readonly fractional: boolean;
    constructor(_code: string, _description: string, _length: number, _variableLength: boolean, fractional?: boolean);
}
