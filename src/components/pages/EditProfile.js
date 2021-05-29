import React, { Component } from "react";
import render from "react-dom";
import { withCookies } from "react-cookie";
import { Row, Col, Button, Form } from "react-bootstrap";
import editUserBg from "../assets/images/edituserBG.jpg";

class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			firstname: null,
			lastname: null,
			username: null,
			mobile: null,
			email: null,
			age: null,
			gender: null,
			dp: null,
			token: this.props.cookies.get("auth"),
		};
		this.eventHandler = this.eventHandler.bind(this);
	}

	eventHandler(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	logout = () => {
		document.cookie = "auth=" + this.state.token + ";max-age=0";
		window.location.reload();
	};

	componentDidMount() {
		if (!this.state.token) window.location.href = "/login";
		fetch(`${process.env.REACT_APP_API_URL}/api/viewuser`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${this.state.token}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {
				console.log(this.props.id);
				console.log(res);
				this.setState({
					id: res.result.id,
					firstname: res.result.firstname,
					lastname: res.result.lastname,
					username: res.result.username,
					mobile: res.result.mobile,
					email: res.result.email,
					age: res.result.age,
					gender: res.result.gender,
					dp: res.result.dp,
				});
			})
			.catch((error) => console.log(error));
	}

	submit = () => {
		var frm = document.getElementById("profile-form");
		var formdata = new FormData(frm);
		formdata.append("email", this.state.email);
		fetch(`${process.env.REACT_APP_API_URL}/api/viewuser/${this.state.id}/   `, {
			method: "PUT",
			headers: {
				"Authorization": `Token ${this.state.token}`,
			},
			body: formdata,
		})
			.then((resp) => resp.json())
			.then((res) => {
				console.log(res);
				if (res.message === "ok") window.location.href = "/profile";
			})
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<React.Fragment>
				<Row className="bgChange" style={{ backgroundImage: `url(${editUserBg}`, width: "100%" }}>
					<Row>
						<Col md={{ offset: 2 }}></Col>
						<Col md={{ offset: 2 }}>
							<Button variant="danger" className="mx-4 block-example border border-0 border-dark rounded-top rounded-right" onClick={this.logout}>
								Log Out <i class="fas fa-sign-out-alt"></i>
							</Button>
							<Button variant="info" className="block-example border border-0 border-dark rounded-top rounded-right" onClick={this.props.ChangeMode}>
								View Profile <i class="fas fa-list"></i>
							</Button>
						</Col>
					</Row>
					<Row className="my-4 ">
						<Col md={2}></Col>
						<Col md={5}>
							<Form id="profile-form">
								<Row className="text-center my-2 border border-dark border-bottom">
									<h1 className=" my-2 ">EDIT PROFILE</h1>
								</Row>
								<Row className="my-2 border border-dark ">
									<Row>
										<Col>
											<Form.Group controlId="firstname">
												<Form.Label className="font-weight-bolder">1 . First Name</Form.Label>
												<Form.Control
													type="text"
													name="firstname"
													onChange={this.eventHandler}
													value={this.state.firstname}
													id="firstname"
													placeholder="First Name"
													className="text-capitalize block-example border border-top-0 border-dark"
													required
												/>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="lastname">
												<Form.Label className="font-weight-bolder">2 . Last Name</Form.Label>
												<Form.Control
													type="text"
													name="lastname"
													onChange={this.eventHandler}
													value={this.state.lastname}
													id="lastname"
													placeholder="Last Name"
													className="text-capitalize block-example border border-top-0 border-dark"
													required
												/>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col md={6}>
											{/* //user name age gender */}
											<Form.Group controlId="username">
												<Form.Label className="font-weight-bolder">3 . User Name</Form.Label>
												<Form.Control
													type="text"
													name="username"
													onChange={this.eventHandler}
													value={this.state.username}
													id="username"
													placeholder="User Name"
													className="block-example border border-top-0 border-dark"
													required
												/>
											</Form.Group>
										</Col>
										<Col md={3}>
											<Form.Group controlId="age">
												<Form.Label className="font-weight-bolder">4 . Age</Form.Label>
												<Form.Control
													type="text"
													name="age"
													onChange={this.eventHandler}
													value={this.state.age}
													id="age"
													placeholder="Age"
													className="text-capitalize block-example border border-top-0 border-dark"
													required
												/>
											</Form.Group>
										</Col>
										<Col md={3}>
											<Form.Group>
												<Form.Label>5 . Gender </Form.Label>
												<select name="gender" id="gender" onChange={this.eventHandler} value={this.state.gender}>
													<option>Male</option>
													<option>Female</option>
												</select>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col md={6}>
											{/* //mobile email */}
											<Form.Group controlId="mobile">
												<Form.Label className="font-weight-bolder">6 . Mobile</Form.Label>
												<Form.Control
													type="text"
													name="mobile"
													onChange={this.eventHandler}
													value={this.state.mobile}
													class="form-control"
													id="mobile"
													placeholder="Mobile"
													className="block-example border border-top-0 border-dark"
													required
												/>
											</Form.Group>
										</Col>
										<Col md={6}>
											<Form.Group controlId="email">
												<Form.Label className="font-weight-bolder">7 . Email</Form.Label>
												<Form.Control
													type="text"
													name="email"
													onChange={this.eventHandler}
													value={this.state.email}
													id="email"
													placeholder="Email"
													className=" block-example border border-top-0 border-dark"
													required
												/>
											</Form.Group>
										</Col>
									</Row>
								</Row>
								<Row className="text-center my-2 border border-dark">
									<div class="form-group">
										<img src={this.state.dp} alt="dp" />
										<div class="form-group">
											<label for="dp">Profile Photo</label>
											<input type="file" name="dp" class="form-control-file" id="dp" onChange={this.eventHandler} />
										</div>
									</div>
								</Row>
								<Row>
									<Col md={5}></Col>
									<Col className="my-2">
										<Button className="btn btn-success border-dark rounded" onClick={this.submit}>
											Submit
										</Button>
									</Col>
								</Row>
							</Form>
						</Col>
						<Col></Col>
					</Row>
				</Row>

				{/*
				<form id="profile-form">

					<div class="form-group">
						<label for="">mobile</label>
						<input
							type="text"
							name="mobile"
							onChange={this.eventHandler}
							value={this.state.mobile}
							class="form-control"
							id="mobile"
							placeholder="mobile"
						/>
					</div>
					<div class="form-group">
						<label for="">email</label>
						<input type="text" name="email" value={this.state.email} class="form-control" id="email" placeholder="email" disabled />
					</div>


					<div class="form-group">
						<img src={this.state.dp} alt="dp" />
						<div class="form-group">
							<label for="dp">Profile Photo</label>
							<input type="file" name="dp" class="form-control-file" id="dp" onChange={this.eventHandler} />
						</div>
					</div>
				</form>
				<br />
				<button onClick={this.submit} type="button" class="btn btn-primary">
					Submit
				</button> */}
			</React.Fragment>
		);
	}
}

export default withCookies(EditProfile);
