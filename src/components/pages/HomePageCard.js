import { useEffect, useState } from "react";


function HomePageCard(props) {
    const [house, setHouse] = useState({});
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/house/${props.id}/`,{
            method:'GET',
        }).then( resp => resp.json()).then(res=> setHouse(res))
        .catch( err => console.log(err))
    },[])

    return(
        <div>
            {house.title}
        </div>
    );
}

export default HomePageCard;