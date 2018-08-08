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
import { goToGameLevel, startGame, isLoading, nextQuestion, exitGame } from "../actions/index";

const mapsStateToProps = ({page, currentQuestion, currentQuestionNumber, totalScore}) => {
	return {page, currentQuestion, currentQuestionNumber, totalScore };
};

const mapDispatchToProps = {goToGameLevel, startGame, isLoading, nextQuestion, exitGame};

const App  = ({ page, goToGameLevel, startGame, isLoading, currentQuestion, currentQuestionNumber, nextQuestion, totalScore, exitGame }) => {
	return (
		<div className="container">
			{ 
				{
					HOME_BOARD: <HomeBoard 
							goToGameLevel={goToGameLevel}/>,
					GAME_LEVEL_BOARD: <GameLevelBoard 
							startGame={startGame} 
							isLoading={isLoading}
							goToGameLevel={goToGameLevel}/>,
					QUESTION_BOARD: <QuestionBoard 
							currentQuestion={currentQuestion} 
							currentQuestionNumber={currentQuestionNumber} 
							nextQuestion={nextQuestion}/>,
					TOTAL_SCORE_BOARD: <TotalScoreBoard 
							totalScore={totalScore} 
							goToGameLevel={goToGameLevel} 
							exitGame={exitGame}/>,
					LOADING: <Loading/>
				}[page]
			}
		</div>
	);
};

export default connect(
	mapsStateToProps, 
	mapDispatchToProps
)(App);