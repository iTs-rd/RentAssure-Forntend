import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from './sochemlogo.png';
import { useCookies } from 'react-cookie';




function Navbar(){   
    const [ token, setToken, deleteToken] = useCookies(['mr-token']); 
    const [ isLogin, setIsLogin ] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch('https://api.sochem.org/api/user-from-token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            },
            body: JSON.stringify({
                'token': `${token['mr-token']}`,
            })
            }).then( resp => resp.json()).then(res => setUser(res))
            .catch( error => console.log(error)) 
    },[])

    useEffect(()=>{
        document.getElementById("navbar2").style.display="none";
        window.onscroll = function() {
            if(document.documentElement.scrollTop <100)
            {
                document.getElementById("navbar2").style.display="none";
                document.getElementById("navbar1").style.display="block";
            }
            else
            {
                document.getElementById("navbar1").style.display="none";
                document.getElementById("navbar2").style.display="block";
            }
        };
    },[])

    const logoutUser = () => {
        deleteToken(['mr-token']);
        setIsLogin(false);
        window.location.reload();
    }

    useEffect ( () => {
        if(!token['mr-token']) setIsLogin(false);
    }, [],[token])

    function navbarcontent(){
        return(
            <div className="mx-auto">
                <ul className="navbar-nav">
                    <li className="nav-item" href="#">
                         <a id="navbar-main-text" className="nav-link" name="home" onClick={()=> {window.location='/'}}><i class="fas fa-home"></i> Home</a>
                    </li>
                    <li className="nav-item" href="#">
                        <a className="nav-link" name="events" onClick={()=> {window.location='/events'}}><i class="fas fa-calendar-alt"></i> Events</a>
                    </li>
                    <li className="nav-item" href="#">
                        <a className="nav-link" name="forum" onClick={()=> {window.location='/forum'}}><i class="fas fa-comments"></i> Forum</a>
                    </li>
                    <li className="nav-item" href="#">
                        <a className="nav-link" name="cloud" onClick={()=> {window.location='/cloud'}}><i class="fas fa-database"></i> Cloud</a>
                    </li>
                    <li className="nav-item" href="#">
                        <a className="nav-link" name="people" onClick={()=> {window.location='/people'}}><i class="fas fa-users"></i> People</a>
                    </li>
                    <li className="nav-item">
                    { !(isLogin) ?
                        <a className="nav-link" name="login" onClick={()=> {window.location='/login'}}><i class="fas fa-sign-in-alt"></i> Login</a> :
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user-alt"></i> {user && user.first_name.split(" ")[0]}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" onClick={()=> window.location='/profile'}><i class="fas fa-user-alt"></i> My Profile</a>
                                <a class="dropdown-item" onClick={logoutUser}><i class="fas fa-sign-out-alt"></i> Logout</a>
                            </div>
                        </li>
                    }
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div>
            <div id="navbar1">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light" id="navheader">
                        <a href="#" className="navbar-brand" id="nbrand" name="home" onClick={()=> {window.location='/'}}><img id="brand-logo" src={logo}/></a>
                    </nav>
                </div>

                <div className="row justify-content-lg-center justify-content-end " >
                    <nav className="col-8 navbar navbar-expand-lg navbar-light " id="main_nav">
                        <button id="nav-collaps-button" className=" navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-toggle="modal" data-target="#navbar-model">
                            <span className="navbar-toggler-icon"></span>                
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            {navbarcontent()}
                        </div>
                    </nav>     
                </div>  
            </div>

            <div id="navbar2">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                    <a href="#" className="navbar-brand" id="nbrand" name="home" onClick={()=> {window.location='/'}}><img id="sochem-logo" src={logo}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>                
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {navbarcontent()}
                    </div>
                </nav>
            </div>

            <div id="navbar-model" class="modal fade" role="dialog">
                <div class="modal-dialog modal-lg" role="content">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            {navbarcontent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Navbar;