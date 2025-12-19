import { useState } from "react";
import type { CompareHistoryRecord, Digits, FocusIndex } from "../App";
import { compareDigits, generateRandomDigits } from "../utils/logic";

export function useHitBlowGame() {
	const [randomDigits, setRandomDigits] = useState<Digits[]>(
		generateRandomDigits(4),
	);
	const [focus, setFocus] = useState<FocusIndex>(0);
	const [inputDigits, setInputDigits] = useState<Digits[]>(Array(4).fill(""));
	const [compareHistory, setCompareHistory] = useState<CompareHistoryRecord[]>(
		[],
	);
	const [clear, setClear] = useState(false);

	const onClickInputDigit = (focus: FocusIndex) => {
		setFocus(focus);
	};

	const onClickNum = (num: Digits) => {
		setInputDigits((inputDigits) => {
			inputDigits[focus] = num;
			return inputDigits.concat();
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
		if (compareResult.hit === 4) {
			setClear(true);
		}
	};

	const onClickReplay = () => {
		resetGame();
	};

	const resetForm = () => {
		setInputDigits(Array(4).fill(""));
		setFocus(0);
	};

	const resetGame = () => {
		resetForm();
		setRandomDigits(generateRandomDigits(4));
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
