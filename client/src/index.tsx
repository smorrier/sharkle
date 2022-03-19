import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { KeyboardInputProvider } from "./context/KeyboardInput";
import { GuessesProvider } from "./context/Guesses";
import "reactjs-popup/dist/index.css";
import { ScreenSizeProvider } from "./context/ScreenSize";
import "./constants/axios";

ReactDOM.render(
	<React.StrictMode>
		<ScreenSizeProvider>
			<GuessesProvider>
				<KeyboardInputProvider>
					<App />
				</KeyboardInputProvider>
			</GuessesProvider>
		</ScreenSizeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
