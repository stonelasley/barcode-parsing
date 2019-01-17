import { Code39Reader } from './code-39.reader';
import { Gtin8Reader } from './gtin-8.reader';
import { Gtin12Reader } from './gtin-12.reader';
import { Gtin13Reader } from './gtin-13.reader';
import { Gtin14Reader } from './gtin-14.reader';
import { GS1Reader } from './gs-1.reader';
import { Itf8Reader } from './itf-8.reader';
import { Itf12Reader } from './itf-12.reader';
import { Itf13Reader } from './itf-13.reader';
import { Itf14Reader } from './itf-14.reader';
import { Code128Reader } from './code-128.reader';

export {
	Code39Reader,
        Code128Reader,
	Gtin8Reader,
	Gtin12Reader,
	Gtin13Reader,
	Gtin14Reader,
	Itf8Reader,
	Itf12Reader,
	Itf13Reader,
	Itf14Reader,
	GS1Reader,
};

export const READERS = [
	Code39Reader,
        Code128Reader,
	Gtin8Reader,
	Gtin12Reader,
	Gtin13Reader,
	Gtin14Reader,
	Itf8Reader,
	Itf12Reader,
	Itf13Reader,
	Itf14Reader,
	GS1Reader,
];

export const READER_TYPES = {
	code_39: Code39Reader,
	code_128: Code128Reader,
	gs1_128: GS1Reader,
	gtin_12: Gtin12Reader,
	gtin_13: Gtin13Reader,
	gtin_14: Gtin14Reader,
	gtin_8: Gtin8Reader,
	itf_12: Itf12Reader,
	itf_13: Itf13Reader,
	itf_14: Itf14Reader,
	itf_8: Itf8Reader,
};
