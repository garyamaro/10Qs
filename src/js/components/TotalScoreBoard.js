import React from "react";
import { connect } from "react-redux";
import { goToGameLevel, exitGame } from "../actions/index";
import { MESSAGES } from "../constants/total-score-messages";

const mapsStateToProps = ({totalScore}) => {
	const { message, submessage} = MESSAGES[totalScore];
	return { 
		totalScore,
		message,
		submessage
	};
};

const mapDispatchToProps = {
	goToGameLevel,
	exitGame
};

const TotalScoreBoard = ({ totalScore, message, submessage, goToGameLevel, exitGame }) => {
	return (
		<div className="total-score-board">
			<h1 className="text-success">Total Score: { totalScore }</h1>
			<br/>
			<h3 className="text-primary">{ message }</h3>
			<br/>
			<h5 className="text-danger">{ submessage }</h5>
			<br/>
			<div className="row">
				<div className="col-md-6">
					<button type="button" className="btn tile-button" onClick={ goToGameLevel }>PLAY AGAIN</button>
				</div>
				<div className="col-md-6">
					<button type="button" className="btn tile-button" onClick={ exitGame }>EXIT GAME</button>
				</div>
			</div>
		</div>
	);
}

export default connect(mapsStateToProps, mapDispatchToProps)(TotalScoreBoard);