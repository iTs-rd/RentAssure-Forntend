import React from "react";
import { Card, Carousel } from "react-bootstrap";
// import MyCarousel from "./MyCarousel";

const MyCard = (props) => {
	return (
		<Card>
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img1} alt="First" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img2} alt="Second" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img3} alt="Third" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img4} alt="Fourth" />
				</Carousel.Item>
			</Carousel>
		</Card>
	);
};

export default MyCard;
