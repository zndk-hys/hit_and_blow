import type { Digits, FocusIndex } from "../types";

type Props = {
	focus: FocusIndex;
	inputDigits: Digits[];
	onClickInputDigit: (index: number) => void;
};

export function InputDisplay({ focus, inputDigits, onClickInputDigit }: Props) {
	return (
		<div className="inputDigits grid grid-cols-4 gap-3 mb-3">
			{inputDigits.map((num, idx) => (
				<button
					key={String(idx)}
					type="button"
					onClick={() => onClickInputDigit(idx)}
					className={`inputDigit flex justify-center items-center aspect-square border-1 ${focus === idx ? "border-blue-500" : "border-gray-300"} rounded-sm hover:bg-gray-50`}
				>
					{num}
				</button>
			))}
		</div>
	);
}
