import React from "react";
import { Guess } from "../../@types/Guess.types";
import "./GuessDisplay.css";

export default function GuessDisplay({
	guess,
	parentIndex,
}: {
	guess: Guess;
	parentIndex?: number;
}) {
	const { correctCharacters, correctPlaces } = guess;
	return (
		<div className="GuessDisplay">
			{[...guess.value].map((char: string, index) => {
				let className = "";
				if (correctCharacters?.[index]) {
					className = "PartiallyCorrent";
				}
				if (correctPlaces?.[index]) {
					className = "Corrent";
				}
				return (
					<div
						key={`${char}-${index}-${parentIndex}`}
						className={`GuessLetter ${className}`}
					>
						{char}
					</div>
				);
			})}
		</div>
	);
}
