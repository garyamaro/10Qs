import React from "react";
import img from "../../images/loading2.gif";

const Loading = () => {
	return (
		<div className="container loading">
			<img src={ img } alt="loading..."/>
		</div>
	);
}

export default Loading;