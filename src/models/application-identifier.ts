export class ApplicationIdentifier {
    public get code(): string {
        return this._code;
    }

    public get length(): number {
        return this._length;
    }

    public get variableLength(): boolean {
        return this._variableLength;
    }

    public get description(): string {
        return this._description;
    }

    public get totalLength(): number {
        return this._code.length + this._length + (this.fractional === true ? 1 : 0);
    }

    public get fractional(): boolean {
        return this.frac;
    }

    constructor(
        private _code: string,
        private _description: string,
        private _length: number,
        private _variableLength: boolean,
        private frac: boolean = false
    ) {}
}
