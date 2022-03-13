import React from "react";
import Popup from "reactjs-popup";
import victoryShark from "../../assets/images/victory_shark.png";
import "./WonPopup.css";

export default function WonPopup() {
	return (
		<Popup
			position="center center"
			closeOnDocumentClick
			closeOnEscape
			arrow={false}
			className="WonPopup"
			open
		>
			<div className="Title">You Won!</div>
			<div className="Content">
				<div>Great Job</div>
				<img src={victoryShark} alt="Happy Shark" />
			</div>
		</Popup>
	);
}
