import { Component } from "react";
import { withCookies } from "react-cookie";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            token:this.props.cookies.get('auth')
        };
        this.eventHandler = this.eventHandler.bind(this);

        fetch(`${process.env.REACT_APP_API_URL}/api/viewuser/`,{
            method:"GET",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Token ${this.state.token}`,
            },
        }).then(resp => resp.json()).then(res => {
            if(res.message==='ok')
                window.location.href="/profile";
           
        })
    }

    eventHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    signin=()=>{
        fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json",
            },
        }).then((response) => response.json()).then(res=> {
            if(res.token)
            {
                this.props.cookies.set('auth',res.token);
                window.location.href="/profile"
            }
            else
            {
                var msg=document.getElementsByClassName("invalid-login-message")[0]
                msg.classList.remove("d-none");
            }
        })
        .catch( err => console.log(err))
    }


    render(){
        return(
            <div className="" >
                <h1>Login</h1>
                <span className="d-none invalid-login-message" style={{color:'red'}}>Unable to log in with provided credentials</span>
                <form id="login">
                    <div class="form-group">
                        <label for="">email</label>
                        <input type="text" name="email" onChange={this.eventHandler} value={this.state.email} class="form-control" id="email" placeholder="email" />
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" name="password" onChange={this.eventHandler} value={this.state.password} class="form-control" id="password" placeholder="Password" />
                    </div>
                </form>
                <button class="btn btn-primary" onClick={this.signin}>Submit</button>
                <br/>
                <br/>
                <button type="button" onClick={() => window.location.href='/signup'} class="btn btn-info">SignUp</button>
            </div>
        );
    }
}

export default withCookies(Login);