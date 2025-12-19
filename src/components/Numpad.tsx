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
	return (
		<div>
			<div className="inputButtons">
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("0")}
					disabled={inputDigits.includes("0")}
				>
					0
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("1")}
					disabled={inputDigits.includes("1")}
				>
					1
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("2")}
					disabled={inputDigits.includes("2")}
				>
					2
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("3")}
					disabled={inputDigits.includes("3")}
				>
					3
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("4")}
					disabled={inputDigits.includes("4")}
				>
					4
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("5")}
					disabled={inputDigits.includes("5")}
				>
					5
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("6")}
					disabled={inputDigits.includes("6")}
				>
					6
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("7")}
					disabled={inputDigits.includes("7")}
				>
					7
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("8")}
					disabled={inputDigits.includes("8")}
				>
					8
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("9")}
					disabled={inputDigits.includes("9")}
				>
					9
				</button>
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
				disabled={inputDigits.join("").length < 4}
			>
				送信
			</button>
		</div>
	);
}
