import React, { Component } from "react";
import PatientHome from "./PatientHome.jsx";

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
      bankAcc:""
    };
    this.changeView = this.changeView.bind(this);
  }
 handleChange(e){
   this.setState({z
     
   })
 }


  render() {
    if (this.state.view === "main") {
      return (
        <div>
          <center>
            <input
              type="text"
              id=""
              placeholder="Fullname"
              
            />
            <br></br> <br></br>
            <input
              type="text"
              id=""
              placeholder="adress"
           
            />
            <br></br> <br></br>
            <input
              type="text"
              id="email"
              placeholder="Email"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
           
            <input
              type="text"
              id=""
              placeholder="city"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              type="text"
              id=""
              placeholder="phoneNumber"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              type="text"
              id=""
              placeholder="accountBanc"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input type="button" value="signin" onClick={this.changeView} />
          </center>
        </div>
      );
    } else if (this.state.view === "signin") {
      return <PatientHome />;
    }
  }
}
export default SignIn;
