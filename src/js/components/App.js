import {
	HOME_BOARD,
	GAME_LEVEL_BOARD,
	QUESTION_BOARD,
	TOTAL_SCORE_BOARD,
	LOADING
} from "../constants/page-names";
import React from "react";
import { connect } from "react-redux";
import HomeBoard from "./HomeBoard";
import GameLevelBoard from "./GameLevelBoard";
import QuestionBoard from "./QuestionBoard";
import TotalScoreBoard from "./TotalScoreBoard";
import Loading from "./Loading";

const mapsStateToProps = ({page}) => {
	return { 
		page
	};
};

const App  = ({ page }) => {
	return (
		<div className="container">
			{ 
				{
					HOME_BOARD: <HomeBoard/>,
					GAME_LEVEL_BOARD: <GameLevelBoard/>,
					QUESTION_BOARD: <QuestionBoard/>,
					TOTAL_SCORE_BOARD: <TotalScoreBoard/>,
					LOADING: <Loading/>
				}[page]
			}
		</div>
	);
};

export default connect(mapsStateToProps)(App);