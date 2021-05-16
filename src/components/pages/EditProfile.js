import { Component } from "react";
import { withCookies } from "react-cookie";

class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:null,
            firstname:null,
            lastname:null,
            username:null,
            mobile:null,
            email:null,
            age:null,
            gender:null,
            dp:null,
            token:this.props.cookies.get('auth')
        }
        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    logout = () => {
        document.cookie="auth="+this.state.token+";max-age=0";
        window.location.reload();
    }

    componentDidMount(){
        if(!this.state.token)
            window.location.href = '/login'
        fetch(`${process.env.REACT_APP_API_URL}/api/viewuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.state.token}`,
            },
        }).then(resp => resp.json()).then(res=> {
            console.log(this.props.id)
            console.log(res)
            this.setState({
                id:res.result.id,
                firstname : res.result.firstname,
                lastname : res.result.lastname,
                username : res.result.username,
                mobile : res.result.mobile,
                email : res.result.email,
                age : res.result.age,
                gender : res.result.gender,
                dp : res.result.dp
            })
        })
        .catch( error => console.log(error))     
    }

    submit =() =>{
        var frm=document.getElementById("profile-form")
        var formdata=new FormData(frm);
        formdata.append('email',this.state.email)
        fetch(`${process.env.REACT_APP_API_URL}/api/viewuser/${this.state.id}/   `, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${this.state.token}`,
            },
            body:formdata,
        }).then(resp => resp.json()).then(res=>{
            console.log(res)
            if(res.message==='ok')
                window.location.href = '/profile'
            
        })
        .catch( error => console.log(error)) 
    }

    render(){
        return(
            <div>
                <button onClick={this.logout} type="button" class="btn btn-danger">logout</button>
                <br/><br/>
                <button onClick={this.props.ChangeMode} type="button" class="btn btn-info">View profile</button>
                <br /><br />
                <h1>EditProfile</h1>
                <form id="profile-form">
                    <div class="form-group">
                        <label for="">firstname</label>
                        <input type="text" name="firstname" onChange={this.eventHandler} value={this.state.firstname} class="form-control" id="firstname" placeholder="firstname" required />
                    </div>
                    <div class="form-group">
                        <label for="">lastname</label>
                        <input type="text" name="lastname" onChange={this.eventHandler} value={this.state.lastname} class="form-control" id="lastname" placeholder="lastname" />
                    </div>
                    <div class="form-group">
                        <label for="">age</label>
                        <input type="text" name="age" onChange={this.eventHandler} value={this.state.age} class="form-control" id="age" placeholder="age" />
                    </div>
                    <div class="form-group">
                        <label for="">mobile</label>
                        <input type="text" name="mobile" onChange={this.eventHandler} value={this.state.mobile} class="form-control" id="mobile" placeholder="mobile" />
                    </div>
                    <div class="form-group">
                        <label for="">email</label>
                        <input type="text" name="email" value={this.state.email} class="form-control" id="email" placeholder="email" disabled />
                    </div>
                    <div class="form-group">
                        <label for="">username</label>
                        <input type="text" name="username" onChange={this.eventHandler} value={this.state.username} class="form-control" id="username" placeholder="username" required />
                    </div>
                    <div class="form-group">
                        <label for="gender">gender</label>
                        <select name="gender" id="gender" onChange={this.eventHandler} value={this.state.gender} >
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <img src={this.state.dp} alt="dp" />
                        <div class="form-group">
                            <label for="dp">Profile Photo</label>
                            <input type="file" name="dp" class="form-control-file" id="dp" onChange={this.eventHandler} />
                        </div>
                    </div>
                </form>
                <br/>
                <button onClick={this.submit} type="button" class="btn btn-primary">Submit</button>
            </div>
        );
    }
}
export default withCookies(EditProfile)
