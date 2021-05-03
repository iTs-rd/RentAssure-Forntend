import { useEffect, useState } from "react";
import '../css/HomePageCard.css'

function HomePageCard() {
    var start=1
    var end=15
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/datalist/`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'start':start,
                'end':end,
            },
        }).then( resp => resp.json()).then(res=> setProduct(res))
        .catch( err => console.log(err))
    },[])

    
    function CreateCard(item) {
        return(
            <div className="carditem row">
                <div className="col-12 col-md-4" style={{padding:'0'}}>
                    <img src= {item.img2} />
                </div>
                <div className="col-12 col-md-8 row content">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="title bold">{item.title}</div>
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

            {/* {console.log(products)} */}
            {/* {CreateCard(products)} */}
            {products.map(product => CreateCard(product))}
        </div>
    );
}

export default HomePageCard;