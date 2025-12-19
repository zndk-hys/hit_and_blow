import { DIGIT_LENGTH } from "../constants";
import type { Digits } from "../types";

type Props = {
	inputDigits: Digits[];
	onClickNum: (num: Digits) => void;
	onClickDelete: () => void;
	onClickSubmit: () => void;
};

export function Keypad({
	inputDigits,
	onClickNum,
	onClickDelete,
	onClickSubmit,
}: Props) {
	const keys: Digits[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	return (
		<div>
			<div className="inputButtons">
				{keys.map((key) => (
					<button
						key={key}
						className="inputButton"
						type="button"
						onClick={() => onClickNum(key)}
						disabled={inputDigits.includes(key)}
					>
						{key}
					</button>
				))}
			</div>
			<button
				className="deleteButton"
				type="button"
				onClick={() => onClickDelete()}
			>
				削除
			</button>
			<button
				className="submitButton"
				type="button"
				onClick={() => onClickSubmit()}
				disabled={inputDigits.join("").length < DIGIT_LENGTH}
			>
				送信
			</button>
		</div>
	);
}
