import type { CompareResult, Digits } from "../types";

export function generateRandomDigits(length: number): Digits[] {
	const values: Digits[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	for (let i = 0; i < length; i++) {
		const j = Math.floor(Math.random() * (values.length - i)) + i;
		[values[i], values[j]] = [values[j], values[i]];
	}

	return values.slice(0, length);
}

export function compareDigits(
	inputDigits: Digits[],
	randomDigits: Digits[],
): CompareResult {
	let hit = 0;
	let blow = 0;

	for (let i = 0; i < inputDigits.length; i++) {
		if (randomDigits.includes(inputDigits[i])) {
			if (randomDigits[i] === inputDigits[i]) {
				hit++;
			} else {
				blow++;
			}
		}
	}

	return {
		digits: inputDigits,
		hit,
		blow,
	};
}
