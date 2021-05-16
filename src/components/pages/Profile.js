import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import EditProfile from './EditProfile'

function Profile(){
    const [token, setToken] = useCookies(['auth']);
    const [user, setUser] = useState(null);
    const [mode,SetMode]=useState(0);

    useEffect( () => {
        if(!token['auth']) window.location.href = '/login';
    },[])

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
                setUser(res.result)
                SetMode(1)
            }
            else
                window.location.href = '/login'
        }).catch( error => console.log(error)) 
    },[])

    function ChangeMode(){
        SetMode(!mode);
    }
    const logout = () => {
        document.cookie="auth="+token['auth']+";max-age=0";
        window.location.reload();
    }

    
    const ShowProfile=()=>{
        if(user!=null)
            return(
                <div className="container">
                    <button onClick={logout} type="button" class="btn btn-danger">logout</button>
                    <br/><br/>
                    <button onClick={() => window.location.href="/profile/properties"} type="button" class="btn btn-primary">List property</button>
                    <br/><br/>
                    <button onClick={ChangeMode} type="button" class="btn btn-info">Edit</button>
                    <br />
                    
                    <h1>ShowProfile</h1>
                    <h6>first name- {user.firstname}</h6>
                    <h6>last name- {user.lastname}</h6>
                    <h6>handle- {user.username}</h6>
                    <h6>mobile no- {user.mobile}</h6>
                    <h6>email id- {user.email}</h6>
                    <h6>age - {user.age}</h6>
                    <h6>gender - {user.gender}</h6>
                    <img src={user.dp} alt="dp" />
                </div>
            );
        else
            return(<div></div>);
    }


    return(
        <div>
            {mode?ShowProfile():<EditProfile  user={user} ChangeMode={ChangeMode} />}
        </div>
    );
    
}

export default Profile
// {mode?<ShowProfile id={userid} ChangeMode={ChangeMode}/>:<EditProfile id={userid} ChangeMode={ChangeMode} />}