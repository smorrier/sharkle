import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	useMemo,
	useEffect,
} from "react";
import { Guess } from "../@types/Guess.types";
import wordAPI from "../apis/wordAPI";

interface GuessesContextI {
	addGuess: (e: string) => Guess[];
	guesses: Guess[];
	hasWon: boolean;
	hasLost: boolean;
}
const GuessesContext = createContext<GuessesContextI>({
	addGuess: (e) => [],
	guesses: [],
	hasWon: false,
	hasLost: false,
});

export function GuessesProvider({ children }: { children: ReactNode }) {
	const [response, setResponse] = useState<string[]>([]);
	const [guesses, setGuesses] = useState<Guess[]>([]);
	const [hasWon, setHasWon] = useState<boolean>(false);
	const [hasLost, setHasLost] = useState<boolean>(false);

	useEffect(() => {
		wordAPI
			.get()
			.then(({ data }) => {
				setResponse(data.data);
			})
			.catch(() => {
				setResponse(["S", "H", "A", "R", "K"]);
			});
	}, []);

	const addGuess = useMemo(() => {
		return function (guess: string) {
			if (hasWon || hasLost) {
				return guesses;
			}
			let newHasWon = true;
			const correctPlaces: boolean[] = [];
			const correctCharacters: boolean[] = [];
			[...guess].forEach((char: string, index) => {
				correctPlaces[index] = false;
				correctCharacters[index] = false;
				if (response[index] === char) {
					correctPlaces[index] = true;
					correctCharacters[index] = true;
					return;
				}
				if (response.includes(char)) {
					correctCharacters[index] = true;
				}
				newHasWon = false;
				return;
			});
			const newGuesses = [
				...guesses,
				{ value: guess, correctCharacters, correctPlaces },
			];
			setGuesses(newGuesses);
			setHasWon(newHasWon);
			setHasLost(newGuesses.length >= 6);
			return newGuesses;
		};
	}, [response, guesses, hasLost, hasWon]);

	return (
		<GuessesContext.Provider value={{ addGuess, guesses, hasWon, hasLost }}>
			{children}
		</GuessesContext.Provider>
	);
}

//Hook
function useGuesses() {
	return useContext(GuessesContext);
}

export default useGuesses;
