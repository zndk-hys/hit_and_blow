import { useState } from "react";
import { compareDigits, generateRandomDigits } from "../utils/logic";
import type { CompareHistoryRecord, Digits, FocusIndex } from "../types";
import { DIGIT_LENGTH } from "../constants";

export function useHitBlowGame() {
	const [randomDigits, setRandomDigits] = useState<Digits[]>(
		generateRandomDigits(DIGIT_LENGTH),
	);
	const [focus, setFocus] = useState<FocusIndex>(0);
	const [inputDigits, setInputDigits] = useState<Digits[]>(
		Array(DIGIT_LENGTH).fill(""),
	);
	const [compareHistory, setCompareHistory] = useState<CompareHistoryRecord[]>(
		[],
	);
	const [clear, setClear] = useState(false);

	const onClickInputDigit = (focus: FocusIndex) => {
		setFocus(focus);
	};

	const onClickNum = (num: Digits) => {
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

	const onClickDelete = () => {
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

	const onClickSubmit = () => {
		const compareResult = compareDigits(inputDigits, randomDigits);
		setCompareHistory((compareHistory) => [
			...compareHistory,
			{
				submitIndex: compareHistory.length + 1,
				compareResult,
			},
		]);
		resetForm();
		if (compareResult.hit === DIGIT_LENGTH) {
			setClear(true);
		}
	};

	const onClickReplay = () => {
		resetGame();
	};

	const resetForm = () => {
		setInputDigits(Array(DIGIT_LENGTH).fill(""));
		setFocus(0);
	};

	const resetGame = () => {
		resetForm();
		setRandomDigits(generateRandomDigits(DIGIT_LENGTH));
		setCompareHistory([]);
		setClear(false);
	};

	return {
		focus,
		inputDigits,
		compareHistory,
		clear,
		onClickInputDigit,
		onClickNum,
		onClickDelete,
		onClickSubmit,
		onClickReplay,
	};
}
