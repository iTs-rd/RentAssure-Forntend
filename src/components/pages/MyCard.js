import React, { Component } from "react";
import { Card, Button, Carousel } from "react-bootstrap";
// import MyCarousel from "./MyCarousel";

const MyCard = (props) => {
	return (
		<Card style={{ width: "20rem" }}>
			{/* <MyCarousel /> */}
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img1} alt="First Image" />
					{/* <Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img2} alt="Second Image" />

					{/* <Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img3} alt="Third Image" />

					{/* <Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={props.img4} alt="Fourth Image" />

					{/* <Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
			</Carousel>
			{/* <Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body> */}
		</Card>
	);
};

export default MyCard;
