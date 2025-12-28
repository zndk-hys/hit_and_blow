import { useState } from "react";
import type { Digits, CompareHistoryRecord } from "../types";

type Props = {
	compareHistory: CompareHistoryRecord[];
};

export function CompareHistory({ compareHistory }: Props) {
	const [assistDigit, setAssistDigit] = useState<Digits>('');

	const onMouseEnterDigit = (digit: Digits) => {
		setAssistDigit(digit);
	};

	const onMouseLeaveDigit = () => {
		setAssistDigit('');
	}

	return (
		<div className="mb-5 text-sm">
			<div className="grid grid-cols-6 gap-1 text-center text-sm font-bold border-b-1 border-gray-400">
				<p className="col-span-4 ">Number</p>
				<p className="">Hit</p>
				<p className="">Blow</p>
			</div>
			<ul>
				{compareHistory.map((record) => (
					<li key={record.submitIndex} className="grid grid-cols-6 gap-1 text-center">
						<div className="col-span-4 py-1 border-b-1 border-gray-300">
							<ul className="grid grid-cols-4 gap-1">
								{record.compareResult.digits.map(digit => {
									const bg = assistDigit === digit ? 'bg-gray-200' : 'bg-gray-100';
									return (
										<li key={`${record.submitIndex}_${digit}`} className={`${bg} rounded py-1`} onMouseEnter={() => onMouseEnterDigit(digit)} onMouseLeave={() => onMouseLeaveDigit()}>{digit}</li>
									)
								})}
							</ul>
						</div>
						<div className="py-1 border-b-1 border-gray-300">
							<p className="py-1">{record.compareResult.hit}</p>
						</div>
						<div className="py-1 border-b-1 border-gray-300">
							<p className="py-1">{record.compareResult.blow}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
