import {
	HOME_BOARD,
	GAME_LEVEL_BOARD,
	QUESTION_BOARD,
	TOTAL_SCORE_BOARD
} from "../constants/page-names";
import React from "react";
import { connect } from "react-redux";
import HomeBoard from "./HomeBoard";
import GameLevelBoard from "./GameLevelBoard";
import QuestionBoard from "./QuestionBoard";
import TotalScoreBoard from "./TotalScoreBoard";
import Loading from "./Loading";

const mapsStateToProps = state => {
	console.log(state);
	return { 
		isLoading: state.isLoading,
		page: state.page
	};
};

const ConnectedApp  = ({ isLoading, page }) => {
	const getBoard = () => {
		switch (page) {
			case HOME_BOARD:
				return <HomeBoard/>;
			case GAME_LEVEL_BOARD:
				return <GameLevelBoard/>;
			case QUESTION_BOARD:
				return <QuestionBoard/>;
			case TOTAL_SCORE_BOARD:
				return <TotalScoreBoard/>;
			default: 
				return <HomeBoard/>
		}
	};

	return (
		<div className="container">
			{isLoading ? <Loading/> : getBoard() }
		</div>
	);
};

const App = connect(mapsStateToProps)(ConnectedApp);

export default App;