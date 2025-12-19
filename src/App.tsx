import "./App.css";
import { Keypad } from "./components/Numpad";
import { InputDisplay } from "./components/InputDisplay";
import { CompareHistory } from "./components/CompareHistory";
import { CompleteHitResult } from "./components/CompleteHitResult";
import { useHitBlowGame } from "./hooks/useGameLogic";

function App() {
	const {
		focus,
		inputDigits,
		compareHistory,
		clear,
		onClickInputDigit,
		onClickNum,
		onClickDelete,
		onClickSubmit,
		onClickReplay,
	} = useHitBlowGame();

	return (
		<div className="box">
			{compareHistory && <CompareHistory compareHistory={compareHistory} />}
			{!clear && (
				<div>
					<InputDisplay
						focus={focus}
						inputDigits={inputDigits}
						onClickInputDigit={onClickInputDigit}
					/>
					<Keypad
						inputDigits={inputDigits}
						onClickNum={onClickNum}
						onClickDelete={onClickDelete}
						onClickSubmit={onClickSubmit}
					/>
				</div>
			)}
			{clear && <CompleteHitResult onClickReplay={onClickReplay} />}
		</div>
	);
}

export default App;
