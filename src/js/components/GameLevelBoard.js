import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame, isLoading } from "../actions/index";
import { CATEGORIES, DIFFICULTIES } from "../constants/select-input-options";
import { OPENTDB_API_URL } from "../constants/api-urls";

const mapDispatchToProps = dispatch => {
	return {
		startGame: questions => dispatch(startGame(questions)),
		isLoading: bool => dispatch(isLoading(bool))
	};
};

class ConnectedGameLevelBoard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			category: "any",
			difficulty: "any"
		}
	} 

	fetchQuestions = () => {
		const { category, difficulty } = this.state;
		const API_URL = OPENTDB_API_URL
					  + ((category === "any") ? "" : ("&category=" + category))
					  + ((difficulty === "any") ? "" : ("&difficulty=" + difficulty));
		return fetch(API_URL)
			.then(result => result.json())
			.then(data => {
				return data.results;
			});
	}

	handleChangeCategory = (e) => {
		this.setState({ category: e.target.value });
	}

	handleChangeDifficulty = (e) => {
		this.setState({ difficulty: e.target.value });
	}

	handleSubmit = () => {
		this.props.isLoading(true);
		setTimeout(() => {
			this.fetchQuestions().then((questions) => {
				this.props.isLoading(false);
				if(questions.length == 10){
					return this.props.startGame(questions);
				}
				alert('No sufficient questions! Please try again with another combination of category and difficulty.');
				return;
			});
		}, 1000);
		
	}

	render(){
		return (
			<div className="game-level-board">
				<h2>Game Level</h2>
				<br/>
				<div className="form-group">
			    	<label htmlFor="category">Select Category</label>
			      	<select name="category" className="form-control" onChange={ this.handleChangeCategory  }>
						{CATEGORIES.map( category => 
							<option value={ category.value } key={ category.value }> { category.name } </option> 
						)}
					</select>
					<br/>
					<br/>
					<label htmlFor="difficulty">Select Difficulty</label>
			      	<select name="difficulty" className="form-control" onChange={ this.handleChangeDifficulty }>
						{DIFFICULTIES.map( difficulty => 
							<option value={ difficulty.value } key={ difficulty.value }> { difficulty.name } </option> 
						)}
					</select>
					<br/>
					<br/>
					<button tyoe="button" className="btn btn-default tile-button" onClick={ this.handleSubmit } id="game-level-board-button">START GAME</button>
			    </div>
			</div>
		)
	}
}

const GameLevelBoard = connect(null, mapDispatchToProps)(ConnectedGameLevelBoard);

export default GameLevelBoard;