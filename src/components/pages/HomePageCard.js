import { useEffect, useState } from "react";
import '../css/homepagecard.css'

function HomePageCard() {
    var start=0
    var end=10
    const [properties, setProperty] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/datalist/`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'start':start,
                'end':end,
            },
        }).then( resp => resp.json()).then(res=> {
            setProperty(res);
            console.log(res)
        })
        .catch( err => console.log(err))
    },[])

    function ShowImage(item){
        return(
            <div class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner" >
                    <div class="carousel-item active" data-interval="500">
                        <img src={item[0]} class="d-block w-100" alt={item[0]} />
                    </div>
                    <div class="carousel-item " data-interval="500">
                        <img src={item[1]} class="d-block w-100" alt={item[1]} />
                    </div>
                    <div class="carousel-item " data-interval="500">
                        <img src={item[2]} class="d-block w-100" alt={item[2]} />
                    </div>
                    <div class="carousel-item " data-interval="500">
                        <img src={item[3]} class="d-block w-100" alt={item[3]} />
                    </div>
                </div>
            </div>
        );
    }
    
    function CreateCard(item) {
        const PropertyDetails = () => {
            window.location.href=`/home/${item.id}`
        }

        var img=[item.img1,item.img2,item.img3,item.img2];

        return(
            <div className="carditem row">
                <div className="col-12 col-md-4" style={{padding:'0'}} onClick={PropertyDetails}>
                    {ShowImage(img)}
                </div>
                <div className="col-12 col-md-8 row content">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="title bold" onClick={PropertyDetails}>{item.title}</div>
                        <div><i class="far fa-heart"></i></div>
                    </div>
                    <div className="col-6 col-md-4 rent f-small">
                        <span className="rent-value f-large bold">&#8377; {new Intl.NumberFormat().format(item.rent)}</span>/month
                    </div>
                    <div className="col-6 col-md-4 area d-flex f-small">
                        <div className="area-value f-large bold">{item.area}</div> sq.ft
                    </div>
                    <div className="col-6 col-md-4 furnishing">
                        {item.furnished}
                    </div>
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

    return(
        <div className="homepagecard">
            {properties.map(property => CreateCard(property))}
        </div>
    );
}

export default HomePageCard;