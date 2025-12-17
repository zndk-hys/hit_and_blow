import { useState } from "react";
import "./App.css";

type FocusIndex = number;
type Digits = "" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

function App() {
	const [focus, setFocus] = useState<FocusIndex>(0);
	const [inputDigits, setInputDigits] = useState<Digits[]>(Array(4).fill(""));

	const onClickInputDigit = (focus: FocusIndex) => {
		setFocus(focus);
	};

	const onClickNum = (num: Digits) => {
		setInputDigits((inputDigits) => {
			inputDigits[focus] = num;
			return inputDigits.concat();
		});

		setFocus((focus) => {
			if (focus < inputDigits.length - 1) {
				focus++;
			}
			return focus;
		});
	};

	const onClickDelete = () => {
		if (inputDigits[focus] === "") {
			if (focus !== 0) {
				const leftFocus = focus - 1;
				setFocus(leftFocus);
				setInputDigits((inputDigits) => {
					inputDigits[focus - 1] = "";
					return inputDigits.concat();
				});
			}
		} else {
			setInputDigits((inputDigits) => {
				inputDigits[focus] = "";
				return inputDigits.concat();
			});
		}
	};

	const onClickSubmit = () => {
		console.log(inputDigits.join(""));
		setInputDigits(Array(4).fill(''));
		setFocus(0);
	};

	return (
		<div className="box">
			<div className="inputDigits">
				<button
					type="button"
					onClick={() => onClickInputDigit(0)}
					className={`inputDigit ${focus === 0 ? "focus" : ""}`}
				>
					{inputDigits[0]}
				</button>
				<button
					type="button"
					onClick={() => onClickInputDigit(1)}
					className={`inputDigit ${focus === 1 ? "focus" : ""}`}
				>
					{inputDigits[1]}
				</button>
				<button
					type="button"
					onClick={() => onClickInputDigit(2)}
					className={`inputDigit ${focus === 2 ? "focus" : ""}`}
				>
					{inputDigits[2]}
				</button>
				<button
					type="button"
					onClick={() => onClickInputDigit(3)}
					className={`inputDigit ${focus === 3 ? "focus" : ""}`}
				>
					{inputDigits[3]}
				</button>
			</div>
			<div className="inputButtons">
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("0")}
					disabled={inputDigits.includes("0")}
				>
					0
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("1")}
					disabled={inputDigits.includes("1")}
				>
					1
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("2")}
					disabled={inputDigits.includes("2")}
				>
					2
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("3")}
					disabled={inputDigits.includes("3")}
				>
					3
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("4")}
					disabled={inputDigits.includes("4")}
				>
					4
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("5")}
					disabled={inputDigits.includes("5")}
				>
					5
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("6")}
					disabled={inputDigits.includes("6")}
				>
					6
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("7")}
					disabled={inputDigits.includes("7")}
				>
					7
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("8")}
					disabled={inputDigits.includes("8")}
				>
					8
				</button>
				<button
					className="inputButton"
					type="button"
					onClick={() => onClickNum("9")}
					disabled={inputDigits.includes("9")}
				>
					9
				</button>
			</div>
			<button
				className="deleteButton"
				type="button"
				onClick={() => onClickDelete()}
			>
				削除
			</button>
			<button
				className="submitButton"
				type="button"
				onClick={() => onClickSubmit()}
				disabled={inputDigits.join('').length < 4}
			>
				送信
			</button>
		</div>
	);
}

export default App;
