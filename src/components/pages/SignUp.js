import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { withCookies } from "react-cookie";

import bg from "../assets/images/signupBG.jpg";
import "../css/signup.css";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: null,
			lastname: null,
			username: null,
			mobile: null,
			email: null,
			age: null,
			gender: "",
			password: null,

			token: this.props.cookies.get("auth"),
		};
		if (this.state.token) window.location.href = "/profile";
	}

	changeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		console.log(this.state);
	};

	signup = () => {
		fetch(`${process.env.REACT_APP_API_URL}/api/adduser/`, {
			method: "POST",
			body: JSON.stringify(this.state),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				if (res.id) window.location.href = "/login";
				else alert("something went wrong");
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<React.Fragment>
				<Row className="bgChange" style={{ backgroundImage: `url(${bg}`, width: "100%" }}>
					<Col md={{ offset: 1 }}></Col>
					<Col className="block-example   my-1 p-4 signup">
						<h1 className="text-center bold">Signup</h1>
						<form id="signup">
							<Row>
								<div class="form-group">
									<h5>
										<label for="">Email*</label>
									</h5>
									<input
										type="text"
										name="email"
										onChange={this.changeHandler}
										value={this.state.email}
										class="form-control"
										id="email"
										placeholder="Email"
										required
									/>
								</div>
								<div class="form-group my-23">
									<h5>
										<label for="">Password*</label>
									</h5>
									<input
										type="password"
										name="password"
										onChange={this.changeHandler}
										value={this.state.password}
										class="form-control"
										id="password"
										placeholder="Password"
										required
									/>
								</div>
								<div class="form-group my-2">
									<h5>
										<label for="username">Username*</label>
									</h5>
									<input
										type="text"
										name="username"
										onChange={this.changeHandler}
										value={this.state.username}
										class="form-control"
										id="username"
										placeholder="Username"
										required
									/>
								</div>
							</Row>
							<Row>
								<Col md={6}>
									<Form.Group>
										<h5>
											<label for="firstname">Firstname*</label>
										</h5>
										<input
											type="text"
											name="firstname"
											onChange={this.changeHandler}
											value={this.state.firstname}
											class="form-control text-capitalize"
											id="firstname"
											placeholder="First Name"
											required
										/>
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group>
										<h5>
											<label for="lastname">Lastname</label>
										</h5>
										<input
											type="text"
											name="lastname"
											onChange={this.changeHandler}
											value={this.state.lastname}
											class="form-control text-capitalize"
											id="lastname"
											placeholder="Last Name"
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<div class="form-group my-2">
									<h5>
										<label for="mobile">Mobile</label>
									</h5>
									<input
										type="text"
										name="mobile"
										onChange={this.changeHandler}
										value={this.state.mobile}
										class="form-control"
										id="mobile"
										placeholder="Mobile No."
									/>
								</div>
							</Row>
							<Row>
								<Col md={6}>
									<Form.Group>
										<h5>
											<label for="age">Age</label>
										</h5>
										<input
											type="number"
											name="age"
											onChange={this.changeHandler}
											value={this.state.age}
											class="form-control"
											id="age"
											placeholder="Age"
										/>
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group>
										<h5>
											<label for="gender">Gender</label>
										</h5>
										<Col xs="auto" className="px-1">
											<Form.Control as="select" name="gender" onChange={this.changeHandler} value={this.state.gender} id="gender">
												<option value="Choose..." disabled>
													Choose...
												</option>
												<option value="Male" selected>
													Male
												</option>
												<option value="Female">Female</option>
												<option value="Other">Other</option>
											</Form.Control>
										</Col>
									</Form.Group>
								</Col>
							</Row>
						</form>
						<button class="btn btn-info rounded-pill  my-1 mx-1 " onClick={this.signup}>
							Signup
						</button>
						<br />
						<br />
						<Row>
							<Col md={8} className="my-3 ">
								<h6>Already a member?</h6>
							</Col>
							<Col md={4}>
								<h5>
									<button class="btn btn-info rounded-pill my-1" onClick={() => (window.location.href = "/login")}>
										Signin
									</button>
								</h5>
							</Col>
						</Row>
					</Col>
					<Col md={{ offset: 1 }}></Col>
					<Row></Row>
				</Row>
			</React.Fragment>
			// <div className="" >
			//     <button type="button" onClick={() => window.location.href='/login'} class="btn btn-info">LogIn</button>

			//     <h1>Signup</h1>
			//     <form id="signup">
			//         <div class="form-group">
			//             <label for="email">email</label>
			//             <input type="text" name="email" onChange={this.changeHandler} value={this.state.email} class="form-control" id="email" placeholder="email" />
			//         </div>
			//         <div class="form-group">
			//             <label for="">Password</label>
			//             <input type="password" name="password" onChange={this.changeHandler} value={this.state.password} class="form-control" id="password" placeholder="Password" />
			//         </div>
			//         <div class="form-group">
			//             <label for="username">username</label>
			//             <input type="text" name="username" onChange={this.changeHandler} value={this.state.username} class="form-control" id="username" placeholder="username" />
			//         </div>
			//         <div class="form-group">
			//             <label for="firstname">firstname</label>
			//             <input type="text" name="firstname" onChange={this.changeHandler} value={this.state.firstname} class="form-control" id="firstname" placeholder="firstname" />
			//         </div>
			//         {/* <div class="form-group">
			//             <label for="lastname">lastname</label>
			//             <input type="text" name="lastname" onChange={this.changeHandler} value={this.state.lastname} class="form-control" id="lastname" placeholder="lastname" />
			//         </div>
			//         <div class="form-group">
			//             <label for="mobile">mobile</label>
			//             <input type="text" name="mobile" onChange={this.changeHandler} value={this.state.mobile} class="form-control" id="mobile" placeholder="mobile" />
			//         </div>
			//         <div class="form-group">
			//             <label for="age">age</label>
			//             <input type="text" name="age" onChange={this.changeHandler} value={this.state.age} class="form-control" id="age" placeholder="age" />
			//         </div>
			//         <div class="form-group">
			//             <label for="gender">gender</label>
			//             <select name="gender" id="gender" onChange={this.eventHandler} value={this.state.gender} >
			//                 <option value="Male">Male</option>
			//                 <option value="Female">Female</option>
			//                 <option value="Other">Other</option>
			//             </select>
			//         </div>
			//         <div class="form-group">
			//             <img src={this.state.dp} alt="dp" />
			//             <div class="form-group">
			//                 <label for="dp">Profile Photo</label>
			//                 <input type="file" name="dp" class="form-control-file" id="dp" onChange={this.eventHandler} />
			//             </div>
			//         </div> */}
			//     </form>
			//     <button class="btn btn-primary" onClick={this.signup}>Submit</button>
			// </div>
		);
	}
}

export default withCookies(SignUp);
