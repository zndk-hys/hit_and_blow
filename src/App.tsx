import "./App.css";
import { CompareHistory } from "./components/CompareHistory";
import { CompleteHitResult } from "./components/CompleteHitResult";
import { useHitBlowGame } from "./hooks/useHitBlowGame";
import { HitAndBlowPad } from "./components/HitAndBlowPad";

function App() {
	const { gameRound, compareHistory, clear, submitAnswer, resetGame } =
		useHitBlowGame();

	return (
		<>
			<h1 className="text-center text-2xl font-bold mb-5">Hit & Blow</h1>
			<div className="box">
				{compareHistory && <CompareHistory compareHistory={compareHistory} />}
				{!clear && (
					<HitAndBlowPad submitAnswer={submitAnswer} key={gameRound} />
				)}
				{clear && <CompleteHitResult onClickReplay={resetGame} />}
			</div>
		</>
	);
}

export default App;
