import React from "react";
import { connect } from "react-redux";
import uuid from 'uuid/v4';
import { nextQuestion } from "../actions/index";
import AnswerButton from "./AnswerButton";

const mapStateToProps = state => {
	return { 
		question: state.currentQuestion,
		questionNumber: state.currentQuestionNumber
	};
}

const mapDispatchToProps = dispatch => {
	return { nextQuestion: (bool) => dispatch(nextQuestion(bool))};
}

const ConnectedQuestionBoard = ({question, questionNumber, nextQuestion}) => {
	let answers = [...question.incorrect_answers, question.correct_answer];
	answers = (question.type == "boolean") ? answers : answers.sort(); 
	let ids = Array(4).fill().map((i) => uuid());

	//timer
	let timeleft = 15;
	const timer = setInterval(() => {
		timeleft--;
		document.getElementById("countdowntimer-" + questionNumber).textContent = timeleft;
		if(timeleft <= 0){
			clearInterval(timer);
			disableAllAnswers();
			showCorrectAnswer();
			goToNextQuestion(false);
		}
	}, 1000);
	//end timer

	const disableAllAnswers = () => {
		for(let i = 0; i < ids.length; i++){
			document.getElementById(ids[i]).disabled = true;
			document.getElementById(ids[i]).style.pointerEvents = "none";
		}
	}

	const showCorrectAnswer = () => {
		const answerId = answers.indexOf(question.correct_answer);
		document.getElementById(ids[answerId]).style.backgroundColor = "green";
		document.getElementById(ids[answerId]).style.color = "black";
	}

	//bool: is answer correct?
	const goToNextQuestion = (bool) => {
		setTimeout(() => {
			document.getElementById("countdowntimer-" + questionNumber).textContent = 15;
			nextQuestion(bool);
		}, 2000);
	}

	const handleButtonClick = (e) => {
		const answer = e.currentTarget.value;

		clearInterval(timer);
		disableAllAnswers();
		showCorrectAnswer();

		if(answer != question.correct_answer){
			document.getElementById(e.currentTarget.id).style.backgroundColor = "red";
			document.getElementById(e.currentTarget.id).style.color = "white";
		}

		goToNextQuestion((answer == question.correct_answer));
	}

	return (
		<div className="question-board">
			<p>Question { questionNumber } of 10 ||  <span id={ "countdowntimer-" + questionNumber}>{ timeleft }</span> seconds</p>
			<p dangerouslySetInnerHTML={{ __html: question.question }}></p>
			{answers.map((answer, i) => 
				<AnswerButton
					key={ ids[i] } 
					onClick={ handleButtonClick } 
					value={ answer } 
					id={ ids[i] }
				/>
			)}
		</div>
	);
}

const QuestionBoard =  connect(mapStateToProps, mapDispatchToProps)(ConnectedQuestionBoard);

export default QuestionBoard;