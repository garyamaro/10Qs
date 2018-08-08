import React, { Component } from "react";
import { connect } from "react-redux";
import { nextQuestion } from "../actions/index";
import AnswerButton from "./AnswerButton";

const mapsStateToProps = state => {
	return { 
		question: state.currentQuestion,
		questionNumber: state.currentQuestionNumber
	};
};

const mapDispatchToProps = dispatch => {
	return {
		nextQuestion: bool => dispatch(nextQuestion(bool))
	};
};

class QuestionBoard extends Component {

	constructor(){
		super();
		this.state = {
			showAnswer: false
		};
	}

	handleButtonClick = (e) => {
		const answer = e.currentTarget.value;

		this.setState({showAnswer: true});
		setTimeout(() => {
			this.setState({showAnswer: false});
			this.props.nextQuestion(answer == this.props.question.correct_answer);
		}, 2000);
		
	}

	render() {
		let answers = [...this.props.question.incorrect_answers, this.props.question.correct_answer].sort();
		return (
			<div className="question-board">
				<p>Question { this.props.questionNumber } of 10</p>
				<p dangerouslySetInnerHTML={{ __html: this.props.question.question }}></p>
				{answers.map((answer, i) => 
					<AnswerButton
						key={ answer } 
						onClick={ this.handleButtonClick } 
						value={ answer }
						showAnswer={ this.state.showAnswer }
						isCorrect={ answer ==  this.props.question.correct_answer}
					/>
				)}
			</div>
		);
	}
}

export default connect(mapsStateToProps, mapDispatchToProps)(QuestionBoard);