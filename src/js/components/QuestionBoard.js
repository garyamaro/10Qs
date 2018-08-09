import React, { Component } from "react";
import { connect } from "react-redux";
import { nextQuestion } from "../actions/index";
import AnswerButton from "./AnswerButton";

const mapsStateToProps = ({currentQuestion, currentQuestionNumber}) => {
	const { question, correct_answer: correctAnswer, incorrect_answers } = currentQuestion;
	const answers = incorrect_answers.concat(correctAnswer).sort();

	return {
		question,
		correctAnswer,
		questionNumber: currentQuestionNumber,
		answers
	};
};

const mapDispatchToProps =  {
	nextQuestion
};

class QuestionBoard extends Component {

	constructor(){
		super();
		this.state = {
			showAnswer: false
		};
	}

	handleButtonClick = (e) => {
		const {nextQuestion, question, correctAnswer} = this.props;
		const answer = e.currentTarget.value;

		this.setState({showAnswer: true});
		setTimeout(() => {
			this.setState({showAnswer: false});
			nextQuestion(answer == correctAnswer);
		}, 2000);
		
	}

	render() {
		const {question, questionNumber, answers, correctAnswer} = this.props;
		return (
			<div className="question-board">
				<p>Question { questionNumber } of 10</p>
				<p dangerouslySetInnerHTML={{ __html: question }}></p>
				{answers.map((answer, i) => 
					<AnswerButton
						key={ answer } 
						onClick={ this.handleButtonClick } 
						value={ answer }
						showAnswer={ this.state.showAnswer }
						isCorrect={ answer ==  correctAnswer}
					/>
				)}
			</div>
		);
	}
}

export default connect(mapsStateToProps, mapDispatchToProps)(QuestionBoard);