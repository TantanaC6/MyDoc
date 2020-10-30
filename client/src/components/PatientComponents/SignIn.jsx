import React, { Component } from "react";
import Profile from "./Profile.jsx"
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "" ,
      email: "",
      address : "" ,
      city : "",
      phoneNumber : "" ,
      accountBanc: "",
      view : "signin" ,
      next:false
    };
    this.addPatient = this.addPatient.bind(this);
  }
  
handleChnage(){
  this.setState({
    view:"profile", 
   
  })
}
  
  addPatient(e) {
    e.preventDefault();
    const newPatient = {
      name: this.state.name,
      password: this.state.password ,
      email: this.state.email,
      address : this.state.address ,
      city : this.state.city,
      phoneNumber : this.state.phoneNumber ,
      accountBanc: this.state.accountBanc,
      
    };
    axios.post("http://localhost:3000/patients/register", newPatient) 
      .then(() => this.handleChnage());
  }
  
  render() {
    if((this.state.view==="profile")  ){
      return <Profile name={this.state.name} email={this.state.email} address={this.state.address } city={this.state.city} phoneNumber={this.state.phoneNumber} accountBanc={this.state.accountBanc} />
    }else{
      return (
        <div>
          <center>
           <form onSubmit={(e)=>this.addPatient(e)}> 
           <input type="text" placeholder="name" onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name}/><br></br>
           <input type="text" placeholder="password" onChange={(e)=>this.setState({password: e.target.value})} value={this.state.password}/><br></br>
           <input type="text" placeholder=" email" onChange={(e)=>this.setState({ email: e.target.value})} value={this.state. email}/><br></br>
           <input type="text" placeholder="address" onChange={(e)=>this.setState({address: e.target.value})} value={this.state.address}/><br></br>
           <input type="text" placeholder="city" onChange={(e)=>this.setState({city: e.target.value})} value={this.state.city}/><br></br>
           <input type="text" placeholder="phoneNumber" onChange={(e)=>this.setState({phoneNumber: e.target.value})} value={this.state.phoneNumber}/><br></br>  
           <input type="text" placeholder="accountBanc" onChange={(e)=>this.setState({accountBanc: e.target.value})} value={this.state.accountBanc}/><br></br>
           <input type="submit" value="SignIn"/>
            </form>
          </center>
        </div>
      )
    
    }
     
  }
}
export default SignIn;
