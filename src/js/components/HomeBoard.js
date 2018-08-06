import React from "react";
import { connect } from "react-redux";
import { goToGameLevel } from "../actions/index";

const mapDispatchToProps = dispatch => {
	return {
		goToGameLevel: () => dispatch(goToGameLevel())
	};
};

const ConnectedHomeBoard = ({ goToGameLevel }) => {
	return (
		<div className="home-board">
			<p>10Qs</p>
			<h6>( THE ULTIMATE PRE-WAR INTELLIGENCE TEST )</h6>
			<button type="button" className="btn tile-button" onClick={ goToGameLevel }>PLAY</button>
		</div>
	);
}

const HomeBoard = connect(null, mapDispatchToProps)(ConnectedHomeBoard);

export default HomeBoard;