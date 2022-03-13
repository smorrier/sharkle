import React, { useMemo } from "react";
import { Guess } from "../../@types/Guess.types";
import useGuesses from "../../context/Guesses";
import useKeyboardInput from "../../context/KeyboardInput";
import GuessDisplay from "../GuessDisplay/GuessDisplay";
import "./GuessesDisplay.css";

export default function GuessesDisplay({
	numberOfGuesses = 6,
}: {
	numberOfGuesses?: number;
}) {
	const { guesses, hasLost, hasWon } = useGuesses();
	const { input } = useKeyboardInput();

	const fillerGuesses = useMemo(() => {
		const pad = numberOfGuesses - guesses.length - 1;
		if (pad <= 0) {
			return [];
		}
		return Array(5).fill({ value: "     " }, 0, pad).slice(0, pad);
	}, [guesses, numberOfGuesses]);

	const guess = useMemo(() => {
		return { value: input.padEnd(5, " ") };
	}, [input]);
	return (
		<div className="GuessesDisplay">
			{guesses.map((guess: Guess, index) => {
				return <GuessDisplay key={index} guess={guess} parentIndex={index} />;
			})}
			{!hasLost && !hasWon && <GuessDisplay guess={guess} />}
			{fillerGuesses.map((guess: Guess, index) => {
				return <GuessDisplay key={index} guess={guess} parentIndex={index} />;
			})}
		</div>
	);
}
