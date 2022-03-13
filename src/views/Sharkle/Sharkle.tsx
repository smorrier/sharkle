import React from "react";
import GuessesDisplay from "../../components/GuessesDisplay/GuessesDisplay";
import GuessInput from "../../components/GuessInput/GuessInput";
import LostPopup from "../../components/LostPopup/LostPopup";
import WonPopup from "../../components/WonPopup/WonPopup";
import useGuesses from "../../context/Guesses";
import "./Sharkle.css";

export default function Sharkle() {
	const { hasLost, hasWon } = useGuesses();
	return (
		<div className="Sharkle">
			{hasWon && <WonPopup />}
			{hasLost && <LostPopup />}
			<GuessesDisplay />
			<GuessInput />
		</div>
	);
}
