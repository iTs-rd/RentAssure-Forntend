import React, { useEffect, useState } from "react";
import "../css/profile.css";
import { useCookies } from "react-cookie";
import { Row, Col, Card, Button, ListGroup, Toast } from "react-bootstrap";
import EditProfile from "./EditProfile";
// import Show from "./contactOwner";

function Profile() {
	const [token, setToken] = useCookies(["auth"]);
	const [user, setUser] = useState(null);
	const [mode, SetMode] = useState(0);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!token["auth"]) window.location.href = "/login";
	}, []);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/api/viewuser/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["auth"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {
				if (res.message === "ok") {
					console.log(res);
					setUser(res.result);
					SetMode(1);
				} else window.location.href = "/login";
			})
			.catch((error) => console.log(error));
	}, []);

	function ChangeMode() {
		SetMode(!mode);
	}
	const logout = () => {
		document.cookie = "auth=" + token["auth"] + ";max-age=0";
		window.location.reload();
	};

	const ShowProfile = () => {
		if (user != null)
			return (
				<React.Fragment>
					<Row>
						<Col md={{ offset: 2 }}>
							<h1>USER PROFILE</h1>
						</Col>
						<Col md={{ offset: 2 }}>
							{/* work on User Profile */}
							<Button variant="danger" className="mx-4 block-example border border-0 border-dark rounded-top rounded-right" onClick={logout}>
								Log Out <i class="fas fa-sign-out-alt"></i>
							</Button>
							<Button
								variant="info"
								className="block-example border border-0 border-dark rounded-top rounded-right"
								onClick={() => (window.location.href = "/profile/properties")}
							>
								List property <i class="fas fa-list"></i>
							</Button>
						</Col>
					</Row>
					<br />
					<Row>
						<Col md={{ span: 4, offset: 1 }} className="mb-4">
							<Card>
								<Card.Img variant="top" src={user.dp}></Card.Img>
								<Button variant="dark" onClick={ChangeMode}>
									Edit Profile
								</Button>
							</Card>
						</Col>
						<Col md={{ span: 5, offset: 2 }} className="my-3">
							<Row>
								<Col md={{ span: 3 }} className="my-2 mx-5" id="firstList">
									<ListGroup variant="flush">
										<ListGroup.Item className="my-3 border-left border-dark  rounded-top rounded-right">First Name</ListGroup.Item>
										<ListGroup.Item className="my-3 border-left border-dark rounded-top rounded-right">Last Name</ListGroup.Item>
										<ListGroup.Item className="my-3 border-left border-dark rounded-top rounded-right">Handle</ListGroup.Item>
										<ListGroup.Item className="my-3 border-left border-dark rounded-top rounded-right">Age</ListGroup.Item>
										<ListGroup.Item className="my-3 border-left border-bottom border-dark rounded-top rounded-right">Gender</ListGroup.Item>
									</ListGroup>
								</Col>
								<Col md={{ span: 4 }} className="my-2 mx-5 ">
									<ListGroup variant="flush" className="mx-2">
										<ListGroup.Item className="my-3 border-right rounded-pill Info text-capitalize">{user.firstname}</ListGroup.Item>
										<ListGroup.Item className="my-3 border-right rounded-pill Info text-capitalize">{user.lastname}</ListGroup.Item>
										<ListGroup.Item className="my-3 border-right rounded-pill Info">{user.username}</ListGroup.Item>
										<ListGroup.Item className="my-3 border-right rounded-pill Info">{user.age}</ListGroup.Item>
										<ListGroup.Item className="my-3 border-right border rounded-pill  Info">{user.gender}</ListGroup.Item>
									</ListGroup>
								</Col>
								<div>
									<Row>
										<Col sm={6} md={5}>
											<Toast onClose={() => setShow(false)} show={show} delay={8000} autohide>
												<Toast.Header>
													<i class="fas fa-id-card-alt"></i>
													<strong className="mr-auto">Owner/Agent</strong>
												</Toast.Header>
												<Toast.Body>
													<ListGroup.Item>
														<i class="fas fa-at"></i>
													</ListGroup.Item>
													<strong>{user.email}</strong>
													<ListGroup.Item className="my-1">
														<i class="fas fa-mobile-alt"></i>
													</ListGroup.Item>
													{user.mobile}
												</Toast.Body>
											</Toast>
										</Col>
										<Col>
											<Button variant="success" className="  block-example border border-0 border-dark rounded" onClick={() => setShow(true)}>
												Contact Owner / Agent
											</Button>
										</Col>
									</Row>
								</div>
							</Row>
						</Col>
					</Row>
				</React.Fragment>
			);
		else return <div></div>;
	};

	return <div>{mode ? ShowProfile() : <EditProfile user={user} ChangeMode={ChangeMode} />}</div>;
}

export default Profile;
// {mode?<ShowProfile id={userid} ChangeMode={ChangeMode}/>:<EditProfile id={userid} ChangeMode={ChangeMode} />}
