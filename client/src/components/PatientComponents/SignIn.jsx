import React, { Component } from "react";
import PatientHome from "./PatientHome.jsx";
import Axios from "axios";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      
    };
   this.handleChange=this.handleChange.bind(this)
   this.submit=this.submit.bind(this)
  }
  handleChange(e){
     this.setState({[e.target.name]:e.target.value})
  }

  submit(e){
    e.preventDefault();
    const newPatient = {
      name: this.state.name,
      password: this.state.password,
      email:this.state.email,
      adress:this.state.adress,
      city:this.state.city,
      phoneNumber:this.state.phoneNumber,
      accountBanc:this.state.accountBanc
    };
    
    Axios.post("http://localhost:3000/patients/register",newPatient)
     .then(res=>{console.log(res)})
     .catch(err=>{throw err})
  }




  render() {
    console.log(this.state)
      return (
        <div>
          <center>
            <input
              type="text"
              id=""
              placeholder="Fullname"
              name="name"
              onChange={this.handleChange}
            />
            <br></br> <br></br>
            <input
              type="text"
              id=""
              placeholder="adress"
           name="adress"
           onChange={this.handleChange}
/>
            <br></br> <br></br>
            <input
              type="text"
              id="email"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
            />
            <br></br> <br></br>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
            <br></br> <br></br>
           
            <input
              type="text"
              id=""
              placeholder="city"
              name="city"
              onChange={this.handleChange}
            />
            <br></br> <br></br>
            <input
              type="text"
              id=""
              placeholder="phoneNumber"
              name="phoneNumber"
              onChange={this.handleChange}
            />
            <br></br> <br></br>
            <input
              type="text"
              id=""
              placeholder="accountBanc"
              name="accountBanc"
              onChange={this.handleChange}
            />
            <br></br> <br></br>
            <input type="button" value="signin" onClick={ this.submit} />
          </center>
        </div>
      );
    } 
  
}
export default SignIn;
