import React, { Component } from "react";
import { connect } from "react-redux";
import { nextQuestion } from "../actions/index";
import AnswerButton from "./AnswerButton";

const mapsStateToProps = ({currentQuestion, currentQuestionNumber}) => {
	return {
		currentQuestion,
		currentQuestionNumber
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
		const {nextQuestion, currentQuestion} = this.props;
		const answer = e.currentTarget.value;

		this.setState({showAnswer: true});
		setTimeout(() => {
			this.setState({showAnswer: false});
			nextQuestion(answer == currentQuestion.correct_answer);
		}, 2000);
		
	}

	render() {
		const {currentQuestion, currentQuestionNumber} = this.props;
		let answers = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).sort();
		return (
			<div className="question-board">
				<p>Question { currentQuestionNumber } of 10</p>
				<p dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></p>
				{answers.map((answer, i) => 
					<AnswerButton
						key={ answer } 
						onClick={ this.handleButtonClick } 
						value={ answer }
						showAnswer={ this.state.showAnswer }
						isCorrect={ answer ==  currentQuestion.correct_answer}
					/>
				)}
			</div>
		);
	}
}

export default connect(mapsStateToProps, mapDispatchToProps)(QuestionBoard);