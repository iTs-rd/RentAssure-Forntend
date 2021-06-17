import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logo from "../assets/images/logo.png";
import "../css/navbar.css";

function Navbar() {
	const [token] = useCookies(["auth"]);
	const [name, setName] = useState("");
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
					setName(res.result.firstname);
				}
			})
			.catch((error) => console.log(error));
	}, [token]);

	function NavItem() {
		return (
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link active" href="/">
						<i className="fas fa-home"></i>Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/aboutus">
						<i className="fas fa-info"></i>About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/">
						<i className="fas fa-shopping-cart"></i>Rent
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link " href="/contactus">
						<i className="fas fa-comments"></i>Contact
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link " href="/add">
						<i className="fas fa-clinic-medical"></i>Add Property
					</a>
				</li>
				<li className="nav-item">
					{token["auth"] ? (
						<a className="nav-link " href="/profile">
							<i className="fas fa-user-alt"></i>
							{name}
						</a>
					) : (
						<a className="nav-link " href="/login">
							<i className="fas fa-sign-in-alt"></i>Signin
						</a>
					)}
				</li>
			</ul>
		);
	}

	return (
		<div className="navbarclass">
			<nav className="navbar navbar-expand-sm d-flex justify-content-sm-between ">
				<a className="navbar-brand" href="{#}">
					<img src={logo} alt="RentAssure" />{" "}
				</a>
				<button
					id="nav-collaps-button"
					className=" navbar-toggler"
					type="button"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
					data-toggle="modal"
					data-target="#navbar-model"
				>
					<i className="fas fa-bars" style={{ fontSize: "2rem" }}></i>
				</button>

				<div className="d-none d-sm-block mx-3" id="navbarNav">
					{NavItem()}
				</div>
			</nav>
			<div id="navbar-model" className="modal fade " role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-body">{NavItem()}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
