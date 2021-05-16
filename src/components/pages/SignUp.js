import { waitForElement } from '@testing-library/dom';
import { Component } from 'react';
import { withCookies } from "react-cookie";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

            firstname:null,
            lastname:null,
            username:null,
            mobile:null,
            email:null,
            age:null,
            gender:"",
            password:null,

            token:this.props.cookies.get('auth')
        }
        if(this.state.token)
            window.location.href = '/profile'
    };

    changeHandler=(event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state)
    }

    signup=()=>{
        // var frm=document.getElementById("signup");
        // var formdata=new FormData(frm);
        // formdata.append('dpf','sfvfsv');
        // console.log(formdata)
        // formdata.append('dp',this.state.dp)
        fetch(`${process.env.REACT_APP_API_URL}/api/adduser/`, {
            method: "POST",
            body:  JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json",
            },
        }).then((response) => response.json()).then(res=> {
            console.log(res)
            if(res.id)
                window.location.href = '/login'
            else
                alert("something went wrong");
        }).catch( err => console.log(err))
    }

    render(){
        return(
            <div className="" >
                <button type="button" onClick={() => window.location.href='/login'} class="btn btn-info">LogIn</button>

                <h1>Signup</h1>
                <form id="signup">
                    <div class="form-group">
                        <label for="email">email</label>
                        <input type="text" name="email" onChange={this.changeHandler} value={this.state.email} class="form-control" id="email" placeholder="email" />
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" name="password" onChange={this.changeHandler} value={this.state.password} class="form-control" id="password" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="username">username</label>
                        <input type="text" name="username" onChange={this.changeHandler} value={this.state.username} class="form-control" id="username" placeholder="username" />
                    </div>
                    <div class="form-group">
                        <label for="firstname">firstname</label>
                        <input type="text" name="firstname" onChange={this.changeHandler} value={this.state.firstname} class="form-control" id="firstname" placeholder="firstname" />
                    </div>
                    {/* <div class="form-group">
                        <label for="lastname">lastname</label>
                        <input type="text" name="lastname" onChange={this.changeHandler} value={this.state.lastname} class="form-control" id="lastname" placeholder="lastname" />
                    </div>
                    <div class="form-group">
                        <label for="mobile">mobile</label>
                        <input type="text" name="mobile" onChange={this.changeHandler} value={this.state.mobile} class="form-control" id="mobile" placeholder="mobile" />
                    </div>
                    <div class="form-group">
                        <label for="age">age</label>
                        <input type="text" name="age" onChange={this.changeHandler} value={this.state.age} class="form-control" id="age" placeholder="age" />
                    </div>
                    <div class="form-group">
                        <label for="gender">gender</label>
                        <select name="gender" id="gender" onChange={this.eventHandler} value={this.state.gender} >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <img src={this.state.dp} alt="dp" />
                        <div class="form-group">
                            <label for="dp">Profile Photo</label>
                            <input type="file" name="dp" class="form-control-file" id="dp" onChange={this.eventHandler} />
                        </div>
                    </div> */}
                </form>
                <button class="btn btn-primary" onClick={this.signup}>Submit</button>
            </div>            

        );
    }
}

export default withCookies(SignUp)
