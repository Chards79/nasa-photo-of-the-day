import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardLink,
	CardTitle,
	CardSubtitle,
	Col
} from "reactstrap";

const PhotoCard = props => {
	return (
		<Col sm="12" md={{ size: 6, offset: 3 }}>
			<Card>
				<CardBody>
					<CardTitle>{props.getTitle}</CardTitle>
					<CardSubtitle>{props.getDate}</CardSubtitle>
				</CardBody>
				<CardImg width="100%" src={props.getUrl} alt="outer space" />
				<CardBody>
					<CardText>{props.getExplanation}</CardText>
					<CardLink href="https://www.nasa.gov">NASA</CardLink>
				</CardBody>
			</Card>
		</Col>
	);
};

export default PhotoCard;
