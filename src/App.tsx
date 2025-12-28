import "./App.css";
import { CompareHistory } from "./components/CompareHistory";
import { CompleteHitClear } from "./components/CompleteHitClear";
import { useHitBlowGame } from "./hooks/useHitBlowGame";
import { HitAndBlowPad } from "./components/HitAndBlowPad";

function App() {
	const { gameRound, compareHistory, clear, submitAnswer, resetGame } =
		useHitBlowGame();

	return (
		<>
			<h1 className="text-center text-2xl font-bold mb-4">Hit & Blow</h1>
			<div className="box">
				{compareHistory && <CompareHistory compareHistory={compareHistory} />}
				{!clear && (
					<HitAndBlowPad submitAnswer={submitAnswer} key={gameRound} />
				)}
				{clear && (
					<CompleteHitClear
						trialCount={compareHistory.length}
						onClickReplay={resetGame}
					/>
				)}
			</div>
		</>
	);
}

export default App;
