import React from "react";

const PhotoCard = props => {
	return (
		<div className="App-header">
			<div className="App-link">
				<h2>Title: {props.getTitle}</h2>
			</div>
			<img className="App-logo" alt="outer space" src={props.getUrl} />
			<p>{props.getDate}</p>
			<p>{props.getExplanation}</p>
		</div>
	);
};

export default PhotoCard;
