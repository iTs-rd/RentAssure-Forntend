import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function ShowUserProperty(props){

    const [token, setToken] = useCookies(['auth']);
    const [userId, setUserId] = useState(null);
    const [properties, setProperty] = useState([]);


    useEffect( () => {
        if(!token['auth']) window.location.href = '/login';
    },[token])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/viewuser/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['auth']}`,
            },
        }).then( resp => resp.json()).then(res => {
            if(res.message==='ok')
            {
                console.log(res)
                setUserId(res.result.id)
            }
            else
                window.location.href = '/login'
        }).catch( error => console.log(error)) 
    },[token])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/datalist/?user=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'start':-1,
                'end':-1,
            },
        }).then(resp => resp.json()).then(res=> setProperty(res))
        .catch( error => console.log(error)) 
    },[userId])
    
    const logout = () => {
        console.log("hii")
        document.cookie="auth="+token['auth']+";max-age=0";
        window.location.reload();
    }

    function ShowProduct(item) {
        const PropertyDetail = () => {
            window.location.href=`/profile/properties/${item.id}`
        }

        return(
            <div className="col-6 carditem row">
                <div className="col-12 row" style={{padding:'0'}} onClick={PropertyDetail}>
                    <img className="col-6 " src={item.img1} alt="photo1" />
                    <img className="col-6 " src={item.img2} alt="photo2" />
                    <img className="col-6 " src={item.img3} alt="photo3" />
                    <img className="col-6 " src={item.img4} alt="photo4" />
                </div>
                <div className="col-12 row content">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="title bold" onClick={PropertyDetail}>{item.title}</div>
                        <div><button type="button" onClick={PropertyDetail} class="btn btn-primary">edit</button></div>
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
        <div>
            <button onClick={()=>logout()} type="button" class="btn btn-danger">logout</button>
            <br/><br/>
            <button onClick={() => window.location.href="/profile/"} type="button" class="btn btn-primary">View profile</button>
            <br/><br/>
            <div className="homepagecard row">
            {properties.map(property=>ShowProduct(property))}
            </div>
        </div>
    );
}

export default ShowUserProperty