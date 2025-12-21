import { useState } from "react";
import type { Digits, FocusIndex } from "../types";
import { DIGIT_LENGTH } from "../constants";

export function usePlayerInput() {
	const [focus, setFocus] = useState<FocusIndex>(0);
	const [inputDigits, setInputDigits] = useState<Digits[]>(
		Array(DIGIT_LENGTH).fill(""),
	);

	const handleChangeFocus = (focus: FocusIndex) => {
		setFocus(focus);
	};

	const handleEnterDigit = (num: Digits) => {
		setInputDigits((inputDigits) => {
			const cloneinputDigits = inputDigits.concat();
			cloneinputDigits[focus] = num;
			return cloneinputDigits;
		});

		setFocus((focus) => {
			if (focus < inputDigits.length - 1) {
				focus++;
			}
			return focus;
		});
	};

	const handleDeleteDigit = () => {
		if (inputDigits[focus] === "") {
			if (focus !== 0) {
				const leftFocus = focus - 1;
				setFocus(leftFocus);
				setInputDigits((inputDigits) => {
					inputDigits[focus - 1] = "";
					return inputDigits.concat();
				});
			}
		} else {
			setInputDigits((inputDigits) => {
				inputDigits[focus] = "";
				return inputDigits.concat();
			});
		}
	};

	const handleResetInput = () => {
		setInputDigits(Array(DIGIT_LENGTH).fill(""));
		setFocus(0);
	};

	return {
		focus,
		inputDigits,
		handleChangeFocus,
		handleEnterDigit,
		handleDeleteDigit,
		handleResetInput,
	};
}
