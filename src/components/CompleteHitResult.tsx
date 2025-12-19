type Props = {
	onClickReplay: () => void;
};

export function CompleteHitResult({ onClickReplay }: Props) {
	return (
		<div>
			クリア
			<button type="button" onClick={() => onClickReplay()}>
				もう一度
			</button>
		</div>
	);
}
