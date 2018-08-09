import React from "react";

const AnswerButton = ({showAnswer, isCorrect, onClick, value})  => {
	let disabled = false;
	let className = 'btn ';
	if(showAnswer){
		disabled = true;
		className += 'text-white ' + ( isCorrect ? 'bg-success' : 'bg-danger');
	}

	return (
		<button type="button" className={ className }  onClick={ onClick } value={ value } disabled={ disabled }>
			<p dangerouslySetInnerHTML={{ __html: value }}></p>
		</button>
	);
}

export default AnswerButton;