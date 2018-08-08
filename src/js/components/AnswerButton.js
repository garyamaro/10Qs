import React from "react";

const AnswerButton = ({showAnswer, isCorrect, onClick, value})  => {
	let disabled = false;
	let bgColor = '';
	if(showAnswer){
		disabled = true;
		bgColor = 'text-white ' + ( isCorrect ? 'bg-success' : 'bg-danger');
	}

	return (
		<button type="button" className={ 'btn ' + bgColor}  onClick={ onClick } value={ value } disabled={ disabled }>
			<p dangerouslySetInnerHTML={{ __html: value }}></p>
		</button>
	);
}

export default AnswerButton;