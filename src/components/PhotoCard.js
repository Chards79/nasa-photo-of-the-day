import React from "react";

const PhotoCard = props => {
	return (
		<div className="star-card">
			<h2>Title: {props.title}</h2>
			<img className="star-img" alt="outer space" src={props.url} />
			<p>{props.date}</p>
			<p>{props.explanation}</p>
		</div>
	);
};

export default PhotoCard;
