import React from "react";
import Popup from "reactjs-popup";
import defeatShark from "../../assets/images/defeat_shark.jpg";
import "./LostPopup.css";

export default function LostPopup() {
	return (
		<Popup
			position="center center"
			closeOnDocumentClick
			closeOnEscape
			arrow={false}
			className="LostPopup"
			open
		>
			<div className="Title">You Lost!</div>
			<div className="Content">
				<div>R U DUM??</div>
				<img src={defeatShark} />
			</div>
		</Popup>
	);
}
