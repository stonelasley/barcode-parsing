export class Symbologies {

	public static get All(): string[] {
		return [
			this.Code39,
			this.GS1128,
			...this.GTINX,
			...this.ITFX,
		];
	}

	public static get GTINX(): string[] {
		return [
			this.GTIN8,
			this.GTIN12,
			this.GTIN13,
			this.GTIN14,
		];
	}

	public static get ITFX(): string[] {
		return [
			this.ITF8,
			this.ITF12,
			this.ITF13,
			this.ITF14,
		];
	}

	public static get Code39(): string {
		return 'code_39';
	}

	public static get GTIN8(): string {
		return 'gtin_8';
	}

	public static get GTIN12(): string {
		return 'gtin_12';
	}

	public static get GTIN13(): string {
		return 'gtin_13';
	}

	public static get GTIN14(): string {
		return 'gtin_14';
	}

	public static get ITF8(): string {
		return 'itf_8';
	}

	public static get ITF12(): string {
		return 'itf_12';
	}

	public static get ITF13(): string {
		return 'itf_13';
	}

	public static get ITF14(): string {
		return 'itf_14';
	}

	public static get GS1128(): string {
		return 'gs1_128';
	}

}
