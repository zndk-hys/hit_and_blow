type Props = {
	trialCount: number;
	onClickReplay: () => void;
};

export function CompleteHitClear({ trialCount, onClickReplay }: Props) {
	return (
		<div className="border-1 border-blue-400 bg-blue-50 text-center rounded p-2">
			<p className="mb-1">
				<span className="font-bold text-blue-500 px-1">{trialCount}回</span>でクリア
			</p>
			<div>
				<button type="button" className="w-full bg-blue-400 text-white font-bold py-2 rounded-sm hover:bg-blue-500 disabled:bg-gray-400" onClick={() => onClickReplay()}>
					もう一度
				</button>
			</div>
		</div>
	);
}
