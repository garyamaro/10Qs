import React from "react";;
import { MESSAGES } from "../constants/total-score-messages";

const TotalScoreBoard = ({ totalScore, goToGameLevel, exitGame }) => {
	return (
		<div className="total-score-board">
			<h1 className="text-success">Total Score: { totalScore }</h1>
			<br/>
			<h3 className="text-primary">{ MESSAGES[totalScore].message }</h3>
			<br/>
			<h5 className="text-danger">{ MESSAGES[totalScore].submessage }</h5>
			<br/>
			<div className="row">
				<div className="col-md-6">
					<button type="button" className="btn tile-button" onClick={ () => goToGameLevel() }>PLAY AGAIN</button>
				</div>
				<div className="col-md-6">
					<button type="button" className="btn tile-button" onClick={ () => exitGame() }>EXIT GAME</button>
				</div>
			</div>
		</div>
	);
}

export default TotalScoreBoard;