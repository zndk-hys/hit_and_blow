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
