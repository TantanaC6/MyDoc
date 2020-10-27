import React, { Component } from "react";
import PatientHome from "./PatientHome.jsx";
import Axios from "axios";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      password:"",
      adress:"",
      email:"",
      city:"",
      numb:"",
      bankAcc:"",
      
    };
   this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e){
     this.setState({[e.target.name]:e.target.value})
  }

 handleChange(e){
   this.setState({z
     
   })
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
              name="num"
              onChange={this.handleChange}
            />
            <br></br> <br></br>
            <input
              type="text"
              id=""
              placeholder="accountBanc"
              name="bankAcc"
              onChange={this.handleChange}
            />
            <br></br> <br></br>
            <input type="button" value="signin" onClick={this.submit} />
          </center>
        </div>
      );
    } 
  
}
export default SignIn;
