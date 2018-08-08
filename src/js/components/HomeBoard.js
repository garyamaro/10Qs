import React from "react";

const HomeBoard = ({ goToGameLevel }) => {
	return (
		<div className="home-board">
			<p>10Qs</p>
			<h6>( TAKE A TEST BEFORE YOU SLEEP )</h6>
			<button type="button" className="btn tile-button" onClick={ goToGameLevel }>PLAY</button>
		</div>
	);
}

export default HomeBoard;