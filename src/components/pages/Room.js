import React from "react";
import DetailsThumb from "./DetailsThumb";
import { Row, Col, Card, Button, Toast } from "react-bootstrap";

import "../css/detailsthumb.css";

class Room extends React.Component {
	state = {
		products: [
			{
				"src": [this.props.item.img1, this.props.item.img2, this.props.item.img3, this.props.item.img4],
			},
		],
		index: 0,
		show: false,
	};

	myRef = React.createRef();

	handleTab = (index) => {
		this.setState({ index: index });
		const images = this.myRef.current.children;
		for (let i = 0; i < images.length; i++) {
			images[i].className = images[i].className.replace("active", "");
		}
		images[index].className = "active";
	};

	componentDidMount() {
		const { index } = this.state;
		this.myRef.current.children[index].className = "active";
	}

	render() {
		const { products, index } = this.state;
		return (
			<div className="row">
				<div className="col-md-7 room ">
					{products.map((item) => (
						<div className="details" key={item._id}>
							<div className="box">
								<DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
							</div>
							<div className="big-img ">
								<img src={item.src[index]} className="border border-white rounded" alt="" />
							</div>
						</div>
					))}
				</div>
				<div className="col py-4 my-2">
					<Row>
						<Card>
							<h5 className="mx-1">PROPERTY TYPE - {this.props.item.property_type}</h5>
							<h3>
								{this.props.item.title} - {this.props.item.area}sq.ft
							</h3>
							<Row>
								<Col as="h5" className="pl-0 py-2">
									{this.props.item.address} <br />
									{this.props.item.city},{this.props.item.state}
									<br />
									{this.props.item.pin}
									<h4 className=" py-1">Rent - ₹ {this.props.item.rent}</h4>
								</Col>
								<Col className={{ span: 2, offset: 5 }}>
									<Toast
										onClose={() => {
											this.setState({ show: false });
										}}
										show={this.state.show}
										delay={8000}
										autohide
									>
										<Toast.Header>
											<i class="fas fa-id-card-alt"></i>
											<strong className="mr-auto ">Owner/Agent</strong>
										</Toast.Header>
										<Toast.Body>
											<i class="fas fa-at"></i>

											<strong className="py-5 mx-3 text-capitalize">{this.props.item.owner_name}</strong>
											<br />
											<i class="fas fa-mobile-alt"></i>
											<strong className="py-5 mx-3 text-capitalize">{this.props.item.owner_phone_no1}</strong>
										</Toast.Body>
									</Toast>
									<Button
										variant="success"
										className="mx-5 my-2 block-example border border-0 border-dark rounded"
										onClick={() => this.setState({ show: true })}
									>
										Contact Owner / Agent
									</Button>
								</Col>
							</Row>
						</Card>
					</Row>
					<Row className="my-3">
						<Card>
							<Card.Header>
								<h2>Facilities</h2>
							</Card.Header>
							<Row style={{ display: "flex", overflow: "hidden", margin: "auto" }}>
								{this.props.item.parking && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-parking fa-3x mx-3"></i>
										<h5>Parking</h5>
									</Col>
								)}
								{this.props.item.lift && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-sort-amount-up-alt fa-3x "></i>
										<h5>Lift</h5>
									</Col>
								)}
								{this.props.item.swimming_pool && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-swimming-pool fa-3x mx-3"></i>
										<h5>Swimming Pool</h5>
									</Col>
								)}
								{this.props.item.gym && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-dumbbell fa-3x "></i>
										<h5>Gym</h5>
									</Col>
								)}
								{this.props.item.gas_pipeline && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-fire fa-3x mx-3"></i>
										<h5>Gas Pipeline</h5>
									</Col>
								)}
								{this.props.item.water_supply && (
									<Col className=" my-3 mx-3 text-center">
										<i className="fas fa-faucet fa-3x mx-3"></i>
										<h5>Water Supply</h5>
									</Col>
								)}
								{this.props.item.water_purifier && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-hand-holding-water fa-3x mx-3"></i>
										<h5>Water Purifier</h5>
									</Col>
								)}
								{this.props.item.fridge && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-icicles fa-3x mx-3"></i>
										<h5>Fridge</h5>
									</Col>
								)}
								{this.props.item.washing_machine && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-parking fa-3x mx-3"></i>
										<h5>Parking</h5>
									</Col>
								)}
								{this.props.item.CCTV && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-video fa-3x mx-3"></i>
										<h5>CCTV</h5>
									</Col>
								)}
								{this.props.item.guard && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-shield-alt fa-3x mx-3"></i>
										<h5>Guard</h5>
									</Col>
								)}
								{this.props.item.medical && (
									<Col className="my-3 mx-3 text-center">
										<i className="fas fa-briefcase-medical fa-3x mx-3"></i>
										<h5>Medical Facility</h5>
									</Col>
								)}
								{this.props.item.fire_alarme && (
									<Col className=" my-3 mx-3 text-center">
										<i className="fas fa-bell fa-3x mx-3"></i>
										<h5>Fire Alarm</h5>
									</Col>
								)}
							</Row>
						</Card>
					</Row>
					<Row className="my-3">
						<Card>
							<Card.Header>
								<h2>Description</h2>
							</Card.Header>
							<Card.Body>
								<h5>{this.props.item.description}</h5>
							</Card.Body>
						</Card>
					</Row>
					<Row className="my-3">
						<Card>
							<Card.Header>
								<h2>Other Info</h2>
							</Card.Header>
							<Row>
								<Col className=" my-3 mx-3 text-center">
									<i className="fas fa-bed fa-3x mx-3"></i>
									<h5>
										Bedroom <br />
										<h5>{this.props.item.bedroom}</h5>
									</h5>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<i className="fas fa-toilet-paper fa-3x mx-3"></i>
									<h5>
										Bathroom <br />
										<h5>{this.props.item.bathroom}</h5>
									</h5>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<i className="fas fa-utensils fa-3x mx-3"></i>
									<h5>
										Kitchen <br />
										<h5>{this.props.item.Kitchen}</h5>
									</h5>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<i className="fas fa-window-maximize fa-3x mx-3"></i>
									<h5>
										Balconies <br />
										<h5>{this.props.item.balconies}</h5>
									</h5>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										Area <br />
										<h5>{this.props.item.area} sq.ft</h5>
									</h6>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										Cleaning <br />
										<h5>{this.props.item.cleaning}</h5>
									</h6>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										Furnished <br />
										<h5>{this.props.item.furnished}</h5>
									</h6>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										Available For <br />
										<h5>{this.props.item.available_for}</h5>
									</h6>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										Available from <br />
										<h5>{this.props.item.available_from}</h5>
									</h6>
								</Col>

								<Col className=" my-3 mx-3 text-center">
									<h6>
										Additional Charge <br />
										<h5>{this.props.item.additional_charge}</h5>
									</h6>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										Security Money <br />
										<h5>{this.props.item.security_money}</h5>
									</h6>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										One time Charge <br />
										<h5>{this.props.item.one_time_charge}</h5>
									</h6>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										Age of Property <br />
										<h5>{this.props.item.age_of_property}</h5>
									</h6>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										Aggreement Duration <br />
										<h5>{this.props.item.agreement_duration}</h5>
									</h6>
								</Col>
								<Col className=" my-3 mx-3 text-center">
									<h6>
										Agent name <br />
										<h5>{this.props.item.owner_name}</h5>
									</h6>
								</Col>
							</Row>
						</Card>
					</Row>
				</div>
			</div>
		);
	}
}

export default Room;
