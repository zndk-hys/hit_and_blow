import { useState } from "react";
import { compareDigits, generateRandomDigits } from "../utils/logic";
import type { CompareHistoryRecord, Digits } from "../types";
import { DIGIT_LENGTH } from "../constants";

export function useHitBlowGame() {
	const [gameRound, setGameRound] = useState(1);
	const [randomDigits, setRandomDigits] = useState<Digits[]>(
		generateRandomDigits(DIGIT_LENGTH),
	);
	const [compareHistory, setCompareHistory] = useState<CompareHistoryRecord[]>(
		[],
	);
	const [clear, setClear] = useState(false);

	const submitAnswer = (inputDigits: Digits[]) => {
		const compareResult = compareDigits(inputDigits, randomDigits);
		setCompareHistory((compareHistory) => [
			...compareHistory,
			{
				submitIndex: compareHistory.length + 1,
				compareResult,
			},
		]);
		if (compareResult.hit === DIGIT_LENGTH) {
			setClear(true);
		}
	};

	const resetGame = () => {
		setGameRound(gameRound => gameRound + 1);
		setRandomDigits(generateRandomDigits(DIGIT_LENGTH));
		setCompareHistory([]);
		setClear(false);
	};

	return {
		gameRound,
		compareHistory,
		clear,
		submitAnswer,
		resetGame,
	};
}
