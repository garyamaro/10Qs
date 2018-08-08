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

const mapsStateToProps = state => {
	return { 
		page: state.page,
		question: state.currentQuestion,
		questionNumber: state.currentQuestionNumber,
		totalScore: state.totalScore
	};
};

const mapDispatchToProps = dispatch => {
	return {
		goToGameLevel: () => dispatch(goToGameLevel()),
		startGame: questions => dispatch(startGame(questions)),
		isLoading: () => dispatch(isLoading()),
		nextQuestion: bool => dispatch(nextQuestion(bool)),
		exitGame: () => dispatch(exitGame())
	};
};

const ConnectedApp  = ({ page, goToGameLevel, startGame, isLoading, question, questionNumber, nextQuestion, totalScore, exitGame }) => {
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
							question={question} 
							questionNumber={questionNumber} 
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

const App = connect(mapsStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;