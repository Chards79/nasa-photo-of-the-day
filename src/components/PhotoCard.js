import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background: #a48fa2;
	color: white;
	border: solid 5px #4c36a4;
	width: 90%;
	height: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 25px;
`;
const Header = styled.div`
	color: #61dafb;
	h1 {
		text-decoration: underline;
		text-decoration-color: #4c36a4;
	}
	p {
		font-weight: bolder;
		font-style: italic;
	}
`;
const SpaceImg = styled.img`
	width: 70%;
	height: 70%;
	border: 30px ridge #4c36a4;
	object-fit: scale;
	flex-shrink: 2;
`;
const Text = styled.div`
	margin: 20px;
	border: 15px ridge #4c36a4;
	padding: 10px;
	background: #644f64;
	color: white;
	a {
		color: #61dafb;
	}
`;

const PhotoCard = props => {
	return (
		<Card>
			<Header>
				<h1>{props.getTitle}</h1>
				<p>{props.getDate}</p>
			</Header>
			<SpaceImg alt="outer space" src={props.getUrl} />
			<Text>
				<p>{props.getExplanation}</p>
				<a href="https://www.nasa.gov">NASA</a>
			</Text>
		</Card>
	);
};

export default PhotoCard;
