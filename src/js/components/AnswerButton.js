import React from "react";

const AnswerButton = props  => {
	return (
		<button type="button" className="btn"  {...props}>
			<p className={ props.id + 'p'} dangerouslySetInnerHTML={{ __html: props.value }}></p>
		</button>
	);
}

export default AnswerButton;