import type { CompareResult, Digits } from "../App";

export function generateRandomDigits(length: number): Digits[] {
	const values: Digits[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const randomDigits: Digits[] = [];

	for (let i = 0; i < length; i++) {
		const idx = Math.floor(Math.random() * (values.length - i));
		randomDigits.push(values[idx]);
		const tmp = values[values.length - 1 - i];
		values[values.length - 1 - i] = values[idx];
		values[idx] = tmp;
	}

	return randomDigits;
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
