import { useEffect, useState } from "react";
import MyCard from "./MyCard";
import "../css/homepage.css";
import $ from "jquery";

function HomePageCard(props) {
	var start = 0;
	var end = 10;
	const [properties, setProperty] = useState([]);
	useEffect(() => {
		var y = props.filterValues;
		console.log(props.filterValues);
		window.x = props.filterValues;
		var filter =
			"?rent__lte=" + y.rent__lte + "&rent__gte=" + y.rent__gte + "&pin=" + y.pin + "&area__lte=" + y.area__lte + "&area__gte=" + y.area__gte;

		var temp = "";
		if (y.bhk.length) temp = "&bhk=" + y.bhk[0];
		for (var i = 1; i < y.bhk.length; i++) temp += "," + y.bhk[i];
		filter += temp;

		temp = "";
		if (y.property_type.length) temp = "&property_type=" + y.property_type[0];
		for (i = 1; i < y.property_type.length; i++) temp += "," + y.property_type[i];
		filter += temp;

		temp = "";
		if (y.furnishing.length) temp = "&furnishing=" + y.furnishing[0];
		for (i = 1; i < y.furnishing.length; i++) temp += "," + y.furnishing[i];
		filter += temp;

		temp = "";
		if (y.available_for.length) temp = "&available_for=" + y.available_for[0];
		for (i = 1; i < y.available_for.length; i++) temp += "," + y.available_for[i];
		filter += temp;

		console.log(filter);

		fetch(`${process.env.REACT_APP_API_URL}/api/datalist/${filter}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"start": start,
				"end": end,
			},
		})
			.then((resp) => resp.json())
			.then((res) => setProperty(res))
			.catch((err) => console.log(err));
	}, [props.filterValues]);

	// For fade in animation of card
	useEffect(() => {
		var doAnimations = function () {
			var offset = $(window).scrollTop() + $(window).height(),
				$animatables = $(".animatable");
			if ($animatables.length == 0) {
				$(window).off("scroll", doAnimations);
			}
			$animatables.each(function (i) {
				var $animatable = $(this);
				if ($animatable.offset().top + $animatable.height() - 20 < offset) {
					$animatable.removeClass("animatable").addClass("animated");
				}
			});
		};
		$(window).on("scroll", doAnimations);
		$(window).trigger("scroll");
	});

	function CreateCard(item) {
		const PropertyDetails = () => {
			window.location.href = `/home/${item.id}`;
		};

		return (
			<div className="carditem row animatable bounceIn">
				<div className="col-12 col-md-4" style={{ padding: "0" }}>
					<MyCard img1={item.img1} img2={item.img2} img3={item.img3} img4={item.img4} />
				</div>
				<div className="col-12 col-md-8 row content">
					<div className="col-12 d-flex justify-content-between">
						<div className="title bold" onClick={PropertyDetails}>
							{item.title}
						</div>
						<div>
							<i class="far fa-heart"></i>
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

	return <div className="homepagecard">{properties.map((property) => CreateCard(property))}</div>;
}

export default HomePageCard;
