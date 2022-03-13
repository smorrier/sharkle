import React, {
	createContext,
	useState,
	useEffect,
	useContext,
	ReactNode,
	useMemo,
} from "react";
import useGuesses from "./Guesses";
interface KeyboardInputContextI {
	addChar: (e: string) => string;
	removeChar: () => string;
	input: string;
}
const KeyboardInputContext = createContext<KeyboardInputContextI>({
	addChar: (e) => "",
	removeChar: () => "",
	input: "",
});

export function KeyboardInputProvider({ children }: { children: ReactNode }) {
	const { addGuess, hasWon, hasLost } = useGuesses();
	const [input, setInput] = useState("");

	const removeChar = useMemo(() => {
		return function () {
			if (hasWon || hasLost) {
				return input;
			}
			if (!input.length) {
				return input;
			}
			const newInput = input.slice(0, -1);
			setInput(newInput);
			return newInput;
		};
	}, [input, hasLost, hasWon]);

	const addChar = useMemo(() => {
		return function (char: string) {
			if (hasWon || hasLost) {
				return input;
			}
			if (char === "Backspace") {
				return removeChar();
			}

			if (char === "Enter") {
				if (input.length === 5) {
					addGuess(input);
					setInput("");
				}
				return "";
			}

			if (input.length >= 5) {
				return input;
			}

			const newInput = [...input, char.toUpperCase()].join("");
			setInput(newInput);
			return newInput;
		};
	}, [input, hasWon, hasLost, addGuess, removeChar]);

	useEffect(() => {
		const listener = (e: KeyboardEvent) => {
			if (e.code === "Backspace" || e.code === "Enter") {
				return addChar(e.code);
			}

			if (e.key.length > 1) {
				return input;
			}

			const key = e.key.toUpperCase();
			const keycode = key.charCodeAt(0);
			if (keycode >= 65 && keycode <= 90) {
				return addChar(key);
			}
		};

		window.addEventListener("keydown", listener);

		return () => window.removeEventListener("keydown", listener);
	}, [input, removeChar, addChar, addGuess]);

	return (
		<KeyboardInputContext.Provider value={{ input, addChar, removeChar }}>
			{children}
		</KeyboardInputContext.Provider>
	);
}

//Hook
function useKeyboardInput() {
	return useContext(KeyboardInputContext);
}

export default useKeyboardInput;
