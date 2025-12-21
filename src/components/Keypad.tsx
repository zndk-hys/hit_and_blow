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
			<div className="grid grid-cols-5 gap-2 mb-2">
				{keys.map((key) => (
					<button
						key={key}
						className="inputButton bg-gray-100 aspect-square rounded-sm hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400"
						type="button"
						onClick={() => onClickNum(key)}
						disabled={inputDigits.includes(key)}
					>
						{key}
					</button>
				))}
			</div>
			<div className="grid grid-cols-2 gap-2">
				<button
					className="deleteButton bg-red-400 text-white font-bold rounded-sm hover:bg-red-500"
					type="button"
					onClick={() => onClickDelete()}
				>
					削除
				</button>
				<button
					className="submitButton bg-blue-400 text-white font-bold py-2 rounded-sm hover:bg-blue-500 disabled:bg-gray-400"
					type="button"
					onClick={() => onClickSubmit()}
					disabled={inputDigits.join("").length < DIGIT_LENGTH}
				>
					送信
				</button>
			</div>
		</div>
	);
}
