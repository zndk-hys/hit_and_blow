import { DIGIT_LENGTH } from "../constants";
import { usePlayerInput } from "../hooks/usePlayerInput";
import type { Digits } from "../types";
import { InputDisplay } from "./InputDisplay";
import { Keypad } from "./Keypad";

type Props = {
	submitAnswer: (inputDigits: Digits[]) => void;
};

export function HitAndBlowPad({ submitAnswer }: Props) {
	const {
		focus,
		inputDigits,
		handleChangeFocus,
		handleEnterDigit,
		handleDeleteDigit,
		handleResetInput,
	} = usePlayerInput();

	const handleSubmit = () => {
		if (inputDigits.join("").length === DIGIT_LENGTH) {
			handleResetInput();
			submitAnswer(inputDigits);
		}
	};

	return (
		<div>
			<InputDisplay
				focus={focus}
				inputDigits={inputDigits}
				onClickInputDigit={handleChangeFocus}
			/>
			<Keypad
				inputDigits={inputDigits}
				onClickNum={handleEnterDigit}
				onClickDelete={handleDeleteDigit}
				onClickSubmit={handleSubmit}
			/>
		</div>
	);
}
