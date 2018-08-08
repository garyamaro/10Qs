import React from "react";

const AnswerButton = ({showAnswer, isCorrect, ...props})  => {
	if(showAnswer){
		return (
			<button type="button" className={ 'btn text-white ' + (isCorrect ? 'bg-success' : 'bg-danger')} disabled>
				<p className={ props.id + 'p'} dangerouslySetInnerHTML={{ __html: props.value }}></p>
			</button>
		);
	}
	return (
		<button type="button" className="btn"  {...props}>
			<p className={ props.id + 'p'} dangerouslySetInnerHTML={{ __html: props.value }}></p>
		</button>
	);
}

export default AnswerButton;