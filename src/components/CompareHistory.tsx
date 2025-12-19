import type { CompareHistoryRecord } from "../App";

type Props = {
	compareHistory: CompareHistoryRecord[];
};

export function CompareHistory({ compareHistory }: Props) {
	return (
		<ul>
			{compareHistory.map((record) => (
				<li key={record.submitIndex}>
					{record.compareResult.digits.join(",")} {record.compareResult.hit}{" "}
					{record.compareResult.blow}
				</li>
			))}
		</ul>
	);
}
