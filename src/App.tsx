import { useState } from "react";
import "./App.css";
import { compareDigits, generateRandomDigits } from "./utils/logic";
import { Keypad } from "./components/Numpad";
import { InputDisplay } from "./components/InputDisplay";
import { CompareHistory } from "./components/CompareHistory";
import { CompleteHitResult } from "./components/CompleteHitResult";

export type FocusIndex = number;
export type Digits =
	| ""
	| "0"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9";
export type CompareResult = {
	digits: Digits[];
	hit: number;
	blow: number;
};
export type CompareHistoryRecord = {
	submitIndex: number;
	compareResult: CompareResult;
};

function App() {
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

	return (
		<div className="box">
			{compareHistory && <CompareHistory compareHistory={compareHistory} />}
			{!clear && (
				<div>
					<InputDisplay
						focus={focus}
						inputDigits={inputDigits}
						onClickInputDigit={onClickInputDigit}
					/>
					<Keypad
						inputDigits={inputDigits}
						onClickNum={onClickNum}
						onClickDelete={onClickDelete}
						onClickSubmit={onClickSubmit}
					/>
				</div>
			)}
			{clear && <CompleteHitResult onClickReplay={onClickReplay} />}
		</div>
	);
}

export default App;
