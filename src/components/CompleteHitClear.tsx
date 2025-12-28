type Props = {
	onClickReplay: () => void;
};

export function CompleteHitClear({ onClickReplay }: Props) {
	return (
		<div>
			クリア
			<button type="button" onClick={() => onClickReplay()}>
				もう一度
			</button>
		</div>
	);
}
