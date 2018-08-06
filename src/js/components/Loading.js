import React from "react";
import img from "../../images/reload.gif";

const Loading = () => {
	return (
		<div className="container loading">
			<img src={ img } alt="loading..."/>
		</div>
	);
}

export default Loading;