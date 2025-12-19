import type { Digits, FocusIndex } from "../types";

type Props = {
	focus: FocusIndex;
	inputDigits: Digits[];
	onClickInputDigit: (index: number) => void;
};

export function InputDisplay({ focus, inputDigits, onClickInputDigit }: Props) {
	return (
		<div className="inputDigits">
			<button
				type="button"
				onClick={() => onClickInputDigit(0)}
				className={`inputDigit ${focus === 0 ? "focus" : ""}`}
			>
				{inputDigits[0]}
			</button>
			<button
				type="button"
				onClick={() => onClickInputDigit(1)}
				className={`inputDigit ${focus === 1 ? "focus" : ""}`}
			>
				{inputDigits[1]}
			</button>
			<button
				type="button"
				onClick={() => onClickInputDigit(2)}
				className={`inputDigit ${focus === 2 ? "focus" : ""}`}
			>
				{inputDigits[2]}
			</button>
			<button
				type="button"
				onClick={() => onClickInputDigit(3)}
				className={`inputDigit ${focus === 3 ? "focus" : ""}`}
			>
				{inputDigits[3]}
			</button>
		</div>
	);
}
