import React, { Component } from "react";
import AnswerButton from "./AnswerButton";

class QuestionBoard extends Component {

	constructor(){
		super();
		this.state = { showAnswer: false };
	}

	handleButtonClick = (e) => {
		const answer = e.currentTarget.value;

		this.setState({showAnswer: true});
		setTimeout(() => {
			this.setState({showAnswer: false});
			this.props.nextQuestion(answer == this.props.currentQuestion.correct_answer);
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

export default QuestionBoard;