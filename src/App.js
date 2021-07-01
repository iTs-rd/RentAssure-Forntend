import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./App.css";
import HomePageCard from "./components/pages/HomePageCard";
import Filter from "./components/pages/Filter";
import Services from "./components/pages/Services";
import House from "./components/pages/House";
import Flat from "./components/pages/Flat";
import Room from "./components/pages/Room";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/Aboutus";
import Navbar from "./components/pages/Navbar";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import SignUp from "./components/pages/SignUp";
import ShowUserProperty from "./components/pages/ShowUserProperty";
import EditUserProperty from "./components/pages/EditUserProperty";
import AddProperty from "./components/pages/AddProperty";

function App() {
	const ProductId = ({ match }) => {
		const [properties, setProperty] = useState(null);
		useEffect(() => {
			fetch(`${process.env.REACT_APP_API_URL}/api/data/${match.params.productId}`, {
				method: "GET",
			})
				.then((resp) => resp.json())
				.then((res) => {
					console.log(res);
					setProperty(res);
					if (res.detail === "Not found.") window.location.href = "/";
				})
				.catch((err) => console.log(err));
		}, [match.params.productId]);
		if (properties === null) return <div />;
		if (properties.property_type === "House") return <House item={properties} />;
		if (properties.property_type === "Room") return <Room item={properties} />;
		if (properties.property_type === "Flat") return <Flat item={properties} />;
		return <div />;
	};

	function Home() {
		const [filterValues, setfilterValues] = useState({
			"pin": "",
			"rent__gte": "",
			"rent__lte": "",
			"bhk": [],
			"property_type": [],
			"furnishing": [],
			"area__gte": "",
			"area__lte": "",
			"available_for": [],
			"parking": "",
			"lift": "",
			"CCTV": "",
			"gym": "",
			"gas_pipeline": "",
			"fire_alarme": "",
		});

		return (
			<div >
				{/* <Slider /> */}
				<div className="row">
					<div className="col-3 d-none d-md-block">
						<Filter setfilterValues={setfilterValues} />
					</div>
					<div className="col-12 col-md-9 ">
						<HomePageCard filterValues={filterValues} />
					</div>
				</div>
			</div>
		);
	}

	return (
		<React.Fragment>
			<CookiesProvider>
				<Router>
					<Navbar />
					{/* This will help in switching through pages and components are provided in components/pages */}
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home/:productId" exact component={ProductId} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
						<Route path="/profile" exact component={Profile} />
						<Route path="/profile/properties" exact component={() => <ShowUserProperty />} />
						<Route path="/profile/properties/:productId" exact component={(x) => <EditUserProperty id={x.match.params.productId} />} />
						<Route path="/services" component={Services} />
						<Route path="/contactus" component={ContactUs} />
						<Route path="/aboutus" component={AboutUs} />
						<Route path="/add" component={AddProperty} />
						<Redirect to="/" />
					</Switch>
				</Router>
			</CookiesProvider>
		</React.Fragment>
	);
}

export default App;
