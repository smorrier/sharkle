import React from "react";
import useKeyboardInput from "../../context/KeyboardInput";
import "./Keyboard.css";

const topRow = "qwertyuiop";
const middleRow = "asdfghjkl";
const bottomRow = "zxcvbnm";

function Key({
	char,
	className = "",
	text,
}: {
	char: string;
	className?: string;
	text?: string;
}) {
	const { addChar } = useKeyboardInput();
	return (
		<div className={`Key ${className}`} onClick={() => addChar(char)}>
			{text || char}
		</div>
	);
}

export default function Keyboard() {
	return (
		<div className="Keyboard">
			<div className="KeyboardRow topRow">
				{[...topRow].map((char: string) => {
					return <Key key={char} char={char} />;
				})}
			</div>
			<div className="KeyboardRow middleRow">
				{[...middleRow].map((char: string) => {
					return <Key key={char} char={char} />;
				})}
			</div>
			<div className="KeyboardRow bottomRow">
				<Key char={"Enter"} className="Enter" />
				{[...bottomRow].map((char: string) => {
					return <Key key={char} char={char} />;
				})}
				<Key char={"Backspace"} text="bksp" className="Backspace" />
			</div>
		</div>
	);
}
