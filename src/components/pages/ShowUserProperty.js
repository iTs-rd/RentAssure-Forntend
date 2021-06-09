import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import MyCard from "./MyCard";
import React from "react";

function ShowUserProperty(props) {
	const [token, setToken] = useCookies(["auth"]);
	const [userId, setUserId] = useState(null);
	const [properties, setProperty] = useState([]);

	useEffect(() => {
		if (!token["auth"]) window.location.href = "/login";
	}, [token]);

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
					setUserId(res.result.id);
				} else window.location.href = "/login";
			})
			.catch((error) => console.log(error));
	}, [token]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/api/datalist/?user=${userId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"start": -1,
				"end": -1,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {
				setProperty(res);
			})
			.catch((error) => console.log(error));
	}, [userId]);

	const logout = () => {
		console.log("hii");
		document.cookie = "auth=" + token["auth"] + ";max-age=0";
		window.location.reload();
	};

	const count = properties.length;

	const AddSomething = () => {
		return (
			<React.Fragment>
				<Row>
					<Col md={{ span: 4, offset: 4 }} className=" my-5">
						<h1 className="mx-5 px-5">
							<i class="fas fa-glasses fa-4x"></i>
						</h1>
						<h3>Nothing to show here</h3>
						<Row md={3} className="mx-5">
							<Link to="/add">
								<Button variant="dark" className=" my-2 mx-5 button rounded ">
									Add Property
								</Button>
							</Link>
						</Row>
					</Col>
				</Row>
			</React.Fragment>
		);
	};

	function ShowProduct(item) {
		const PropertyDetail = () => {
			window.location.href = `/profile/properties/${item.id}`;
		};

		const PropertyDelete = () => {
			if (window.confirm("Are You sure you want to delete")) {
				fetch(`${process.env.REACT_APP_API_URL}/api/data/${item.id}/`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Token ${token["auth"]}`,
					},
				})
					.then(window.location.reload())
					.catch((err) => console.log(err));
			}
		};

		return (
			<div className="carditem row my-5 py-4">
				<div className="col-12 col-md-4" style={{ padding: "0" }}>
					<MyCard img1={item.img1} img2={item.img2} img3={item.img3} img4={item.img4} />
				</div>
				<div className="col-12 col-md-8 row content">
					<div className="col-12 d-flex justify-content-between">
						<div className="title bold" onClick={PropertyDetail}>
							{item.title}
						</div>
						<div>
							<button type="button" onClick={PropertyDetail} class="btn btn-info rounded mr-1">
								edit
							</button>
							<button type="button" onClick={PropertyDelete} class="btn btn-danger rounded ml-1">
								delete
							</button>
						</div>
					</div>
					<div className="col-6 col-md-4 rent f-small">
						<span className="rent-value f-large bold">&#8377; {new Intl.NumberFormat().format(item.rent)}</span>/month
					</div>
					<div className="col-6 col-md-4 area d-flex f-small">
						<div className="area-value f-large bold">{item.area}</div> sq.ft
					</div>
					<div className="col-6 col-md-4 furnishing">{item.furnished}</div>
					<div className="col-6 available-from f-small">
						{/* Ready to move {new Date(item.available_from) } */}
						Ready to move <span className="f-large d-flex">{item.available_from}</span>
					</div>
					<div className="col-6 available-for f-small">
						Available For <span className="f-large">{item.available_for}</span>
					</div>
					<div className="col-12 posted f-small">
						Posted on <span className="">{item.posted_on}</span> by <span className="">{item.posted_by}</span>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<Row>
				<Col md={9}></Col>
				<Col>
					<button onClick={() => logout()} type="button" class="btn btn-danger rounded-pill mx-3">
						logout
					</button>
					<button onClick={() => (window.location.href = "/profile/")} type="button" class="btn btn-primary rounded-pill">
						View profile
					</button>
				</Col>
			</Row>
			<br />

			<div className="homepagecard row">
				{/* {console.log(count)} */}
				{count > 0 ? properties.map((property) => ShowProduct(property)) : <AddSomething />}
			</div>
		</div>
	);
}

export default ShowUserProperty;
