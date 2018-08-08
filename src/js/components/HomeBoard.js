import React from "react";
import { connect } from "react-redux";
import { goToGameLevel } from "../actions/index";

const mapDispatchToProps = dispatch => {
	return {goToGameLevel: () => dispatch(goToGameLevel())}
}
const HomeBoard = ({ goToGameLevel }) => {
	return (
		<div className="home-board">
			<p>10Qs</p>
			<h6>( TAKE A TEST BEFORE YOU SLEEP )</h6>
			<button type="button" className="btn tile-button" onClick={ goToGameLevel }>PLAY</button>
		</div>
	);
}

export default connect(null, mapDispatchToProps)(HomeBoard);