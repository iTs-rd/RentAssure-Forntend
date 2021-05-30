import React, { Component } from "react";
import { Card, Button, Carousel } from "react-bootstrap";
// import MyCarousel from "./MyCarousel";

const MyCard = (props) => {
	return (
		<Card>
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img1} alt="First Image" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img2} alt="Second Image" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img3} alt="Third Image" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img4} alt="Fourth Image" />
				</Carousel.Item>
			</Carousel>
		</Card>
	);
};

export default MyCard;
