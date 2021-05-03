import { useEffect, useState } from "react";
import {Container,Row,Col,Image} from 'react-bootstrap';
import  "../css/homepagecard.css";
import slide2 from "../assets/images/slide2.JPG.jpg";

function HomePageCard(props) {
    const [house, setHouse] = useState({});
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/house/${props.id}/`,{
            method:'GET',
        }).then( resp => resp.json()).then(res=> setHouse(res))
        .catch( err => console.log(err))
    },[])

    return(
    // <div className="container">
        <div className="row">
            <div className="col-3">
         <img src =  {house.img1}></img>
            </div>
            <div className="col-9">
                <div className="details">
                <h2>{house.title}</h2><br></br>
                <div className="bhati">
                <h3 className="price">Rent=Rs {house.price}/month </h3>
                    <h3 className="area">Area={house.area}/sq.ft</h3>
                    </div><br></br>
                    <div className="jjj">
                        <h3 className="availability">Available for {house.available}</h3>
                        <h3 className="hsj">Available from 1 Nov 2021</h3>
                    </div><br></br>
                    <br></br>
                    <div className="last">
                        <h3>Posted on 27 april 2021 by XYZ</h3>
                    </div>
                </div>
                
        </div>
    // </div>
    );
 
}

export default HomePageCard;