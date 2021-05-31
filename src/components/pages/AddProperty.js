import { Component, useState, useEffect } from "react";
import { withCookies } from "react-cookie";
import { Form, Row, Col, Button } from "react-bootstrap";

class AddProperty extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			property_type: null,
			title: null,
			img1: null,
			img2: null,
			img3: null,
			img4: null,
			description: null,
			bedroom: null,
			bathroom: null,
			balconies: null,
			Kitchen: null,
			area: null,
			parking: false,
			lift: false,
			swimming_pool: false,
			gym: false,
			gas_pipeline: false,
			electricity_charge: null,
			electricity_supply: null,
			Power_backup: false,
			water_charge: null,
			water_supply: false,
			water_purifier: false,
			fridge: false,
			washing_machine: false,
			CCTV: false,
			guard: false,
			medical: false,
			fire_alarme: false,
			cleaning: null,
			furnished: null,
			available_for: null,
			available_from: null,
			rent: null,
			additional_charge: null,
			security_money: null,
			one_time_charge: null,
			agreement_duration: null,
			owner_name: null,
			owner_phone_no1: null,
			owner_phone_no2: null,
			posted_by: null,
			posted_on: null,
			agent_name: null,
			age_of_property: null,
			locality: null,
			address: null,
			city: null,
			state: null,
			pin: null,

			token: this.props.cookies.get("auth"),
		};
		if (!this.state.token) window.location.href = "/login";
		this.eventHandler = this.eventHandler.bind(this);
	}

	componentDidMount() {
		fetch(`${process.env.REACT_APP_API_URL}/api/viewuser/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${this.state.token}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {
				console.log(res);
				if (res.message === "ok")
					this.setState({
						user: res.result.id,
					});
				else {
					alert("something went wrong");
					window.location.href = "/";
				}
			})
			.catch((error) => console.log(error));
	}

	eventHandler(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	// toggleChange = (event) => {
	// 	this.setState({
	// 		parking: !this.state.parking,
	// 	});
	// };

	logout = () => {
		document.cookie = "auth=" + this.state.token + ";max-age=0";
		window.location.reload();
	};

	submit = () => {
		var frm = document.getElementById("property-form");
		var formdata = new FormData(frm);
		formdata.append("user", this.state.user);
		fetch(`${process.env.REACT_APP_API_URL}/api/data/   `, {
			method: "POST",
			headers: {
				"Authorization": `Token ${this.state.token}`,
			},
			body: formdata,
		})
			.then((resp) => resp.json())
			.then((res) => {
				console.log(res);
				if (res.message === "ok") {
					alert("posted");
					window.location.href = "/";
				} else alert("something went wrong");
			});
		// .catch( error => console.log(error))
	};

	// about1 = ['bedroom', 'bathroom','kitchen','balconies','area']

	render() {
		return (
			<Row className="mx-2">
				<h1>Add Property</h1>
				<Form id="property-form">
					<Form.Row className="align-items-center">
						<Col xs="auto">
							<h5 className="mx-1 my-1">Property Type*</h5>
						</Col>
						<Col xs="auto" className="my-1">
							<Form.Control
								as="select"
								name="property_type"
								onChange={this.eventHandler}
								value={this.state.property_type}
								id="property_type"
								defaultValue="Choose..."
							>
								<option value="Choose..." disabled>
									Choose...
								</option>
								<option value="House">House</option>
								<option value="Room">Room</option>
								<option value="Flat">Flat</option>
								required
							</Form.Control>
						</Col>
					</Form.Row>

					<Form.Group controlId="title">
						<Form.Label as="h5">1 . Property Title*</Form.Label>
						<Form.Control name="title" onChange={this.eventHandler} value={this.state.title} placeholder="2BHK House in Mayur Vihar,Delhi" required />
					</Form.Group>

					<Form.Group controlId="description">
						<Form.Label as="h5">2 . Description of Property*</Form.Label>
						<Form.Control
							as="textarea"
							name="description"
							onChange={this.eventHandler}
							value={this.state.description}
							placeholder="Write detail description of the property"
							required
						/>
					</Form.Group>

					<Form.Group controlId="address">
						<Form.Label as="h5">3 . Address*</Form.Label>
						<Form.Control name="address" onChange={this.eventHandler} value={this.state.address} id="address" placeholder="1234 Main St" required />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="city">
							<Form.Label as="h5">4 . City*</Form.Label>
							<Form.Control name="city" onChange={this.eventHandler} value={this.state.city} id="city" placeholder="City" required />
						</Form.Group>

						<Form.Group as={Col} controlId="state">
							<Form.Label as="h5">5 . State*</Form.Label>
							<Form.Control name="state" onChange={this.eventHandler} value={this.state.state} id="state" placeholder="State" required />
						</Form.Group>

						<Form.Group as={Col} controlId="pin">
							<Form.Label as="h5">6 . Pin Code</Form.Label>
							<Form.Control name="pin" onChange={this.eventHandler} value={this.state.pin} id="pin" placeholder="Pin Code" />
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="owner_name">
							<Form.Label as="h5">7 . Owner Name</Form.Label>
							<Form.Control name="owner_name" onChange={this.eventHandler} value={this.state.owner_name} id="owner_name" placeholder="Owner Name" />
						</Form.Group>
						<Form.Group as={Col} controlId="owner_phone_no1">
							<Form.Label as="h5">8 . Owner Phone No.1*</Form.Label>
							<Form.Control
								type="text"
								name="owner_phone_no1"
								onChange={this.eventHandler}
								value={this.state.owner_phone_no1}
								id="owner_phone_no1"
								placeholder="Owner Phone No.1"
								required
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="owner_phone_no2">
							<Form.Label as="h5">9 . Owner Phone No.2</Form.Label>
							<Form.Control
								type="text"
								name="owner_phone_no2"
								onChange={this.eventHandler}
								value={this.state.owner_phone_no2}
								id="owner_phone_no2"
								placeholder="Owner Phone No.2"
								required
							/>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="posted_by">
							<Form.Label as="h5">10 . Posted By*</Form.Label>
							<Form.Control
								as="select"
								name="posted_by"
								id="posted_by"
								onChange={this.eventHandler}
								value={this.state.posted_by}
								defaultValue="Choose..."
							>
								<option>Choose...</option>
								<option value="Owner">Owner</option>
								<option value="Agent">Agent</option>
								required
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col} controlId="agent_name">
							<Form.Label as="h5">11 . Agent Name</Form.Label>
							<Form.Control name="agent_name" onChange={this.eventHandler} value={this.state.agent_name} id="agent_name" placeholder="Agent Name" />
						</Form.Group>
						<Form.Group as={Col} controlId="age_of_property">
							<Form.Label as="h5">12 . Age of Property</Form.Label>
							<Form.Control
								type="number"
								name="age_of_property"
								onChange={this.eventHandler}
								value={this.state.age_of_property}
								id="age_of_property"
								placeholder="Property Age"
								required
							/>
						</Form.Group>
					</Form.Row>
					<h3>Add Images</h3>
					<Form.Row>
						<Col md={3}>
							<Form.Group>
								<img src={this.state.img1} alt="No Image Here" className="boder border-dark border-top border-left" />
								<Form.Group>
									<label for="img1">
										<h6>Image 1*</h6>
									</label>
									<input type="file" name="img1" class="form-control-file" id="img1" onChange={this.eventHandler} required />
								</Form.Group>
							</Form.Group>
						</Col>
						<Col md={3}>
							<Form.Group>
								<img src={this.state.img2} alt="No Image Here" className="boder border-dark border-top border-left" />
								<Form.Group>
									<label for="img2">
										<h6>Image 2*</h6>
									</label>
									<input type="file" name="img2" class="form-control-file" id="img2" onChange={this.eventHandler} required />
								</Form.Group>
							</Form.Group>
						</Col>
						<Col md={3}>
							<Form.Group>
								<img src={this.state.img3} alt="No Image Here" className="boder border-dark border-top border-left" />
								<Form.Group>
									<label for="img3">
										<h6>Image 3</h6>
									</label>
									<input type="file" name="img3" class="form-control-file" id="img3" onChange={this.eventHandler} />
								</Form.Group>
							</Form.Group>
						</Col>
						<Col md={3}>
							<Form.Group>
								<img src={this.state.img4} alt="No Image Here" className="boder border-dark border-top border-left" />
								<Form.Group>
									<label for="img4">
										<h6>Image 4</h6>
									</label>
									<input type="file" name="img4" class="form-control-file" id="img4" onChange={this.eventHandler} />
								</Form.Group>
							</Form.Group>
						</Col>
					</Form.Row>
					<h3 className="my-4">About the Property</h3>
					<Form.Row>
						<Form.Group as={Col} controlId="bedroom">
							<Form.Label as="h6">Bedroom</Form.Label>
							<Form.Control
								type="number"
								name="bedroom"
								onChange={this.eventHandler}
								value={this.state.bedroom}
								class="form-control"
								id="bedroom"
								placeholder="No. of Bedroom"
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="bathroom">
							<Form.Label as="h6">Bathroom</Form.Label>
							<Form.Control
								type="number"
								name="bathroom"
								onChange={this.eventHandler}
								value={this.state.bathroom}
								class="form-control"
								id="bathroom"
								placeholder="No. of Bathroom"
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="kitchen">
							<Form.Label as="h6">Kitchen</Form.Label>
							<Form.Control
								type="number"
								name="kitchen"
								onChange={this.eventHandler}
								value={this.state.kitchen}
								class="form-control"
								id="kitchen"
								placeholder="No. of Kitchen"
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="balconies">
							<Form.Label as="h6">Balcony</Form.Label>
							<Form.Control
								type="number"
								name="balconies"
								onChange={this.eventHandler}
								value={this.state.balconies}
								class="form-control"
								id="balconies"
								placeholder="No. of Balconies"
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="area">
							<Form.Label as="h6">Area*</Form.Label>
							<Form.Control
								type="number"
								name="area"
								onChange={this.eventHandler}
								value={this.state.area}
								class="form-control"
								id="area"
								placeholder="Buildup Area"
								required
							/>
						</Form.Group>
					</Form.Row>

					<h3 className="my-4">Other Facilities</h3>

					<Row className="my-3">
						<Col md={3}>
							<Form.Row>
								<h5>Parking</h5>
								<Form.Check>
									{console.log(this.state.parking)}
									<input
										name="parking"
										defaultChecked={this.state.parking}
										type="checkbox"
										id="parking"
										onChange={() => {
											this.setState({
												parking: !this.state.parking,
											});
										}}
									/>
									{console.log(this.state.parking)}
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>Gym</h5>
								<Form.Check>
									<input
										name="gym"
										defaultChecked={this.state.gym}
										type="checkbox"
										id="gym"
										onChange={() => {
											this.setState({
												gym: !this.state.gym,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>Swimming Pool</h5>
								<Form.Check>
									<input
										name="swimming_pool"
										defaultChecked={this.state.swimming_pool}
										type="checkbox"
										id="swimming_pool"
										onChange={() => {
											this.setState({
												swimming_pool: !this.state.swimming_pool,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>Lift</h5>
								<Form.Check>
									<input
										name="lift"
										defaultChecked={this.state.lift}
										type="checkbox"
										id="lift"
										onChange={() => {
											this.setState({
												lift: !this.state.lift,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
					</Row>

					<Row className="my-3">
						<Col md={3}>
							<Form.Row>
								<h5>Electricity Supply</h5>
								<Form.Check>
									<input
										name="electricity_supply"
										defaultChecked={this.state.electricity_supply}
										type="checkbox"
										id="electricity_supply"
										onChange={() => {
											this.setState({
												electricity_supply: !this.state.electricity_supply,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>Power Backup</h5>
								<Form.Check>
									<input
										name="Power_backup"
										defaultChecked={this.state.Power_backup}
										type="checkbox"
										id="Power_backup"
										onChange={() => {
											this.setState({
												Power_backup: !this.state.Power_backup,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>Water Supply(24*7)</h5>
								<Form.Check>
									<input
										name="water_supply"
										defaultChecked={this.state.water_supply}
										type="checkbox"
										id="water_supply"
										onChange={() => {
											this.setState({
												water_supply: !this.state.water_supply,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>Water Purifier</h5>
								<Form.Check>
									<input
										name="water_purifier"
										defaultChecked={this.state.water_purifier}
										type="checkbox"
										id="water_purifier"
										onChange={() => {
											this.setState({
												water_purifier: !this.state.water_purifier,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
					</Row>
					<Row className="my-3">
						{/* fridge, washing_machine, cctv guard */}
						<Col md={3}>
							<Form.Row>
								<h5>Fridge</h5>
								<Form.Check>
									<input
										name="fridge"
										defaultChecked={this.state.fridge}
										type="checkbox"
										id="fridge"
										onChange={() => {
											this.setState({
												fridge: !this.state.fridge,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>Washing Machine</h5>
								<Form.Check>
									<input
										name="washing_machine"
										defaultChecked={this.state.washing_machine}
										type="checkbox"
										id="washing_machine"
										onChange={() => {
											this.setState({
												washing_machine: !this.state.washing_machine,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>CCTV</h5>
								<Form.Check>
									<input
										name="CCTV"
										defaultChecked={this.state.CCTV}
										type="checkbox"
										id="CCTV"
										onChange={() => {
											this.setState({
												CCTV: !this.state.CCTV,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>Guard</h5>
								<Form.Check>
									<input
										name="guard"
										defaultChecked={this.state.guard}
										type="checkbox"
										id="guard"
										onChange={() => {
											this.setState({
												guard: !this.state.guard,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
					</Row>
					<Row className="my-3">
						{/* Emergency Medical Facilty, Fire Alarm */}
						<Col md={3}>
							<Form.Row>
								<h5>Medical Facilty</h5>
								<Form.Check>
									<input
										name="medical"
										defaultChecked={this.state.medical}
										type="checkbox"
										id="medical"
										onChange={() => {
											this.setState({
												medical: !this.state.medical,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<h5>Fire Alarm</h5>
								<Form.Check>
									<input
										name="fire_alarme"
										defaultChecked={this.state.fire_alarme}
										type="checkbox"
										id="fire_alarme"
										onChange={() => {
											this.setState({
												fire_alarme: !this.state.fire_alarme,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<Col md={6}>
									<Form.Label className="mx-1" as="h5">
										Cleaning
									</Form.Label>
								</Col>
								<Col md={6}>
									<select name="cleaning" id="cleaning" onChange={this.eventHandler} value={this.state.cleaning}>
										<option value="No">No</option>
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
									</select>
								</Col>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Row>
								<Form.Label className="mx-1" as="h5">
									Furnished*
								</Form.Label>
								<select name="furnished" id="furnished" onChange={this.eventHandler} value={this.state.furnished}>
									<option value="FullyFurnished">FullyFurnished</option>
									<option value="SemiFurnished">SemiFurnished</option>
									<option value="Unfurnished">Unfurnished</option>
									required
								</select>
							</Form.Row>
						</Col>
					</Row>
					<br />
					<br />
					<Row className="my-3">
						<Col md={3}>
							<Form.Row>
								<h5>Gas Pipeline</h5>
								<Form.Check>
									<input
										name="gas_pipeline"
										defaultChecked={this.state.gas_pipeline}
										type="checkbox"
										id="gas_pipeline"
										onChange={() => {
											this.setState({
												gas_pipeline: !this.state.gas_pipeline,
											});
										}}
									/>
								</Form.Check>
							</Form.Row>
						</Col>
						<Col md={5}>
							<Form.Group>
								<Row>
									<Col md={6}>
										<Form.Label className="my-1">
											<h5>Electricity Charge</h5>
										</Form.Label>
									</Col>
									<Col md={6}>
										<input
											type="number"
											name="electricity_charge"
											onChange={this.eventHandler}
											value={this.state.electricity_charge}
											class="form-control"
											id="electricity_charge"
											placeholder="Electricity Charge"
										/>
									</Col>
								</Row>
							</Form.Group>
						</Col>
						<Col md={4}>
							<Form.Group>
								<Row>
									<Col md={{ span: 5, offset: 2 }}>
										<Form.Label className="my-1" as="h5">
											Water Charge
										</Form.Label>
									</Col>
									<Col md={5}>
										<input
											type="number"
											name="water_charge"
											onChange={this.eventHandler}
											value={this.state.water_charge}
											class="form-control"
											id="water_charge"
											placeholder="Water Charge"
										/>
									</Col>
								</Row>
							</Form.Group>
						</Col>
					</Row>

					<Row className="my-3">
						<Col md={4}>
							<Form.Row>
								<Col md={6}>
									<Form.Label className="mx-1" as="h5">
										Available For*
									</Form.Label>
								</Col>
								<select name="available_for" id="available_for" onChange={this.eventHandler} value={this.state.available_for}>
									<option value="Any">Any</option>
									<option value="Family">Family</option>
									<option value="Couple">Couple</option>
									<option value="Bachelor">Bachelor</option>
									<option value="Student">Student</option>
									<option value="GovernmentEmployee">Government Employee</option>
									<option value="Girl">Girl</option>
									<option value="Boy">Boy</option>
									required
								</select>
							</Form.Row>
						</Col>

						<Col md={4}>
							<Form.Row>
								<Row>
									<Col md={6}>
										<Form.Label className="mx-1 my-1" as="h5">
											Available From
										</Form.Label>
									</Col>
									<Col md={6}>
										<input
											type="text"
											name="available_from"
											onChange={this.eventHandler}
											value={this.state.available_from}
											class="form-control"
											id="available_from"
											placeholder="Available From"
										/>
									</Col>
								</Row>
							</Form.Row>
						</Col>
						<Col md={3}>
							<Form.Group>
								<Row>
									<Col md={4}>
										<Form.Label className="mx-1 my-1" as="h5">
											Rent*
										</Form.Label>
									</Col>
									<Col md={8}>
										<input
											type="number"
											name="rent"
											onChange={this.eventHandler}
											value={this.state.rent}
											class="form-control"
											id="rent"
											placeholder="Rent"
											required
										/>
									</Col>
								</Row>
							</Form.Group>
						</Col>
					</Row>
					<br />
					<br />
					<Row className="my-3">
						{/* one time charge, agreement dureationa */}
						<Col md={6}>
							<Form.Group>
								<Row>
									<Col md={3}>
										<Form.Label className="mx-1 my-1" as="h5">
											Additional Charge
										</Form.Label>
									</Col>
									<Col md={6}>
										<input
											type="number"
											name="additional_charge"
											onChange={this.eventHandler}
											value={this.state.additional_charge}
											class="form-control"
											id="additional_charge"
											placeholder="Mention Additional Charge if any"
										/>
									</Col>
								</Row>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group>
								<Row>
									<Col md={3}>
										<Form.Label className="mx-1 my-1" as="h5">
											Security Money
										</Form.Label>
									</Col>
									<Col md={6}>
										<input
											type="number"
											name="security_money"
											onChange={this.eventHandler}
											value={this.state.security_money}
											class="form-control"
											id="security_money"
											placeholder="Security Money/Charge"
										/>
									</Col>
								</Row>
							</Form.Group>
						</Col>
					</Row>
					<Row className="my-3">
						{/* one time charge, agreement dureationa */}
						<Col md={4}>
							<Form.Group>
								<Row>
									<Col md={5}>
										<Form.Label className="mx-1 my-1" as="h5">
											One time charge
										</Form.Label>
									</Col>
									<Col md={4}>
										<input
											type="number"
											name="one_time_charge"
											onChange={this.eventHandler}
											value={this.state.one_time_charge}
											class="form-control"
											id="one_time_charge"
											placeholder="One time charge"
										/>
									</Col>
								</Row>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group>
								<Row>
									<Col md={{ span: 4, offset: 3 }}>
										<Form.Label className="mx-1 my-1" as="h5">
											Agreement Duration
										</Form.Label>
									</Col>
									<Col md={5}>
										<input
											type="number"
											name="agreement_duration"
											onChange={this.eventHandler}
											value={this.state.agreement_duration}
											class="form-control"
											id="agreement_duration"
											placeholder="Duration of Agreement"
										/>
									</Col>
								</Row>
							</Form.Group>
						</Col>
					</Row>

					<Row>
						<Col md={5}></Col>
						<Col className="my-4">
							<Button className="btn btn-success border-dark rounded" onClick={this.submit}>
								Submit
							</Button>
						</Col>
					</Row>
				</Form>
			</Row>
		);
	}
}

export default withCookies(AddProperty);
