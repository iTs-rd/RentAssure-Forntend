import { Component } from "react";
import { withCookies } from "react-cookie";

class AddProperty extends Component{
    constructor(props){
        super(props);
        this.state={
            
            user : null,
            property_type : null,
            title : null,
            img1 : null,
            img2 : null,
            img3 : null,
            img4 : null,
            description : null,
            bedroom : null,
            bathroom : null,
            balconies : null,
            Kitchen : null,
            area : null,
            parking : null,
            lift : null,
            swimming_pool : null,
            gym : null,
            gas_pipeline : null,
            electricity_charge : null,
            electricity_supply : null,
            Power_backup : null,
            water_charge : null,
            water_supply : null,
            water_purifier : null,
            fridge : null,
            washing_machine : null,
            CCTV : null,
            guard : null,
            medical : null,
            fire_alarme : null,
            cleaning : null,
            furnished : null,
            available_for : null,
            available_from : null,
            rent : null,
            additional_charge : null,
            security_money : null,
            one_time_charge : null,
            agreement_duration : null,
            owner_name : null,
            owner_phone_no1 : null,
            owner_phone_no2 : null,
            posted_by : null,
            posted_on : null,
            agent_name : null,
            age_of_property : null,
            locality : null,
            address : null,
            city : null,
            state : null,
            pin : null,

            token : this.props.cookies.get('auth')
        }
        if(!this.state.token)
            window.location.href = '/login'
        this.eventHandler = this.eventHandler.bind(this);
        
    };


    componentDidMount(){
        fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.state.token}`,
            },
        }).then(resp => resp.json()).then(res=>{
            if(res.message==='ok')
                this.setState({
                    user:res.result.id
                });
            else
            {
                alert("something went wrong")
                window.location.href = '/'
            }
        })
        .catch( error => console.log(error))     
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



    submit =() =>{
        var frm=document.getElementById("property-form")
        var formdata=new FormData(frm);
        formdata.append('user',this.state.user)
        fetch(`${process.env.REACT_APP_API_URL}/api/data/   `, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${this.state.token}`,
            },
            body:formdata,
        }).then(resp => resp.json()).then(res=> {
            console.log(res)
            if(res.message==='ok')
            {
                alert("posted");
                // window.location.href = '/';
            }
            else
                alert("something went wrong")

        })
        // .catch( error => console.log(error)) 
    }
    
    render(){
        return(
            <div>
                <h1>edit property</h1>
                <form id="property-form">

                    <div class="form-group">
                        <label for="property_type">property_type</label>
                        <select name="property_type" id="property_type" onChange={this.eventHandler} value={this.state.property_type} >
                            <option value="House">House</option>
                            <option value="Room">Room</option>
                            <option value="Flat">Flat</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="title">title</label>
                        <input type="text" name="title" onChange={this.eventHandler} value={this.state.title} class="form-control" id="title" placeholder="title" />
                    </div>
                    <div class="form-group">
                        <label for="description">description</label>
                        <textarea name="description" onChange={this.eventHandler} value={this.state.description} class="form-control" id="description" placeholder="description" />
                    </div>
                    {/* <div class="form-group">
                        <label for="bedroom">bedroom</label>
                        <input type="number" name="bedroom" onChange={this.eventHandler} value={this.state.bedroom} class="form-control" id="bedroom" placeholder="bedroom" />
                    </div>
                    <div class="form-group">
                        <label for="bathroom">bathroom</label>
                        <input type="number" name="bathroom" onChange={this.eventHandler} value={this.state.bathroom} class="form-control" id="bathroom" placeholder="bathroom" />
                    </div>
                    <div class="form-group">
                        <label for="balconies">balconies</label>
                        <input type="number" name="balconies" onChange={this.eventHandler} value={this.state.balconies} class="form-control" id="balconies" placeholder="balconies" />
                    </div>
                    <div class="form-group">
                        <label for="Kitchen">Kitchen</label>
                        <input type="number" name="Kitchen" onChange={this.eventHandler} value={this.state.Kitchen} class="form-control" id="Kitchen" placeholder="Kitchen" />
                    </div>
                    <div class="form-group">
                        <label for="area">area</label>
                        <input type="number" name="area" onChange={this.eventHandler} value={this.state.area} class="form-control" id="area" placeholder="area" />
                    </div>

                    <div class="form-group">
                        <label for="parking">parking</label>
                        <select name="parking" id="parking" onChange={this.eventHandler} value={this.state.parking} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="lift">lift</label>
                        <select name="lift" id="lift" onChange={this.eventHandler} value={this.state.lift} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="swimming_pool">swimming_pool</label>
                        <select name="swimming_pool" id="swimming_pool" onChange={this.eventHandler} value={this.state.swimming_pool} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="gym">gym</label>
                        <select name="gym" id="gym" onChange={this.eventHandler} value={this.state.gym} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="gas_pipeline">gas_pipeline</label>
                        <select name="gas_pipeline" id="gas_pipeline" onChange={this.eventHandler} value={this.state.gas_pipeline} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>


                    <div class="form-group">
                        <label for="">electricity_charge</label>
                        <input type="number" name="electricity_charge" onChange={this.eventHandler} value={this.state.electricity_charge} class="form-control" id="electricity_charge" placeholder="electricity_charge" />
                    </div>

                    <div class="form-group">
                        <label for="electricity_supply">electricity_supply</label>
                        <select name="electricity_supply" id="electricity_supply" onChange={this.eventHandler} value={this.state.electricity_supply} >
                            <option value="True">Available 24*7</option>
                            <option value="False">Not available 24*7</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="Power_backup">Power_backup</label>
                        <select name="Power_backup" id="Power_backup" onChange={this.eventHandler} value={this.state.Power_backup} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="">water_charge</label>
                        <input type="number" name="water_charge" onChange={this.eventHandler} value={this.state.water_charge} class="form-control" id="water_charge" placeholder="water_charge" />
                    </div>

                    <div class="form-group">
                        <label for="water_supply">water_supply</label>
                        <select name="water_supply" id="water_supply" onChange={this.eventHandler} value={this.state.water_supply} >
                            <option value="True">Available 24*7</option>
                            <option value="False">Not available 24*7</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="water_purifier">water_purifier</label>
                        <select name="water_purifier" id="water_purifier" onChange={this.eventHandler} value={this.state.water_purifier} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="fridge">fridge</label>
                        <select name="fridge" id="fridge" onChange={this.eventHandler} value={this.state.fridge} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="washing_machine">washing_machine</label>
                        <select name="washing_machine" id="washing_machine" onChange={this.eventHandler} value={this.state.washing_machine} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="CCTV">CCTV</label>
                        <select name="CCTV" id="CCTV" onChange={this.eventHandler} value={this.state.CCTV} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="guard">guard</label>
                        <select name="guard" id="guard" onChange={this.eventHandler} value={this.state.guard} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="medical">medical</label>
                        <select name="medical" id="medical" onChange={this.eventHandler} value={this.state.medical} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="fire_alarme">fire_alarme</label>
                        <select name="fire_alarme" id="fire_alarme" onChange={this.eventHandler} value={this.state.fire_alarme} >
                            <option value="True">Available</option>
                            <option value="False">Not available</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="cleaning">cleaning</label>
                        <select name="cleaning" id="cleaning" onChange={this.eventHandler} value={this.state.cleaning} >
                            <option value="No">No</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="furnished">furnished</label>
                        <select name="furnished" id="furnished" onChange={this.eventHandler} value={this.state.furnished} >
                            <option value="FullyFurnished">FullyFurnished</option>
                            <option value="SemiFurnished">SemiFurnished</option>
                            <option value="Unfurnished">Unfurnished</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="available_for">available_for</label>
                        <select name="available_for" id="available_for" onChange={this.eventHandler} value={this.state.available_for} >
                            <option value="Any">Any</option>
                            <option value="Family">Family</option>
                            <option value="Couple">Couple</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Student">Student</option>
                            <option value="GovernmentEmployee">Government Employee</option>
                            <option value="Girl">Girl</option>
                            <option value="Boy">Boy</option>
                        </select>
                    </div>
 */}
                    <div class="form-group">
                        <label for="available_from">available_from</label>
                        <input type="text" name="available_from" onChange={this.eventHandler} value={this.state.available_from} class="form-control" id="available_from" placeholder="available_from" />
                    </div>

                    <div class="form-group">
                        <label for="rent">rent</label>
                        <input type="number" name="rent" onChange={this.eventHandler} value={this.state.rent} class="form-control" id="rent" placeholder="rent" />
                    </div>
                    
                    {/* <div class="form-group">
                        <label for="additional_charge">additional_charge</label>
                        <input type="number" name="additional_charge" onChange={this.eventHandler} value={this.state.additional_charge} class="form-control" id="additional_charge" placeholder="additional_charge" />
                    </div>
                    <div class="form-group">
                        <label for="security_money">security_money</label>
                        <input type="number" name="security_money" onChange={this.eventHandler} value={this.state.security_money} class="form-control" id="security_money" placeholder="security_money" />
                    </div>
                    
                    <div class="form-group">
                        <label for="locality">locality</label>
                        <input type="text" name="locality" onChange={this.eventHandler} value={this.state.locality} class="form-control" id="locality" placeholder="locality" />
                    </div> */}

                    <div class="form-group">
                        <label for="address">address</label>
                        <input type="text" name="address" onChange={this.eventHandler} value={this.state.address} class="form-control" id="address" placeholder="address" />
                    </div>
                    <div class="form-group">
                        <label for="city">city</label>
                        <input type="text" name="city" onChange={this.eventHandler} value={this.state.city} class="form-control" id="city" placeholder="city" />
                    </div>
                    <div class="form-group">
                        <label for="state">state</label>
                        <input type="text" name="state" onChange={this.eventHandler} value={this.state.state} class="form-control" id="state" placeholder="state" />
                    </div>
                    <div class="form-group">
                        <label for="pin">pin</label>
                        <input type="number" name="pin" onChange={this.eventHandler} value={this.state.pin} class="form-control" id="pin" placeholder="pin" />
                    </div>




                    <div class="form-group">
                        <label for="owner_name">owner_name</label>
                        <input type="text" name="owner_name" onChange={this.eventHandler} value={this.state.owner_name} class="form-control" id="owner_name" placeholder="owner_name" />
                    </div>
                    <div class="form-group">
                        <label for="owner_phone_no1">owner_phone_no1</label>
                        <input type="text" name="owner_phone_no1" onChange={this.eventHandler} value={this.state.owner_phone_no1} class="form-control" id="owner_phone_no1" placeholder="owner_phone_no1" />
                    </div>
                    <div class="form-group">
                        <label for="posted_by">posted_by</label>
                        <select name="posted_by" id="posted_by" onChange={this.eventHandler} value={this.state.posted_by} >
                            <option value="Owner">Owner</option>
                            <option value="Agent">Agent</option>
                        </select>
                    </div>

                </form>

                <button class="btn btn-primary" onClick={this.submit}>Submit</button>


            </div>
        );
    }

}

export default withCookies(AddProperty)