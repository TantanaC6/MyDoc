import React, { Component } from "react";
import DoctorHome from "./DoctorHome.jsx";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      address: "",
      city: "",
      phoneNumber: "",
      category: "",
      cabineName: "",
      urlCertificate: "",
      Patients: "",
      accountBanc: "",
      price: "",
      view: "main",
      users: [],
    };
    this.adduser= this.adduser.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  adduser(e){
    e.preventDefault(); 
    const newdoctor = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      phoneNumber: this.state.phoneNumber,
      category: this.state.category,
      cabineName: this.state.cabineName,
      urlCertificate: this.state.urlCertificate,
      Patients: this.state.Patients,
      accountBanc: this.state.accountBanc,
      price: this.state.price,

    }
    axios.post("http://localhost:3000/patients",newdoctor).then((res,req) => {console.log(req)})
  }

  render() {
    if (this.state.view === "main") {
      return (
        <div>
          <center>
            <form onSubmit={(e)=>this.adduser(e)}>
            <input
              type="text"
              id="fisrrname"
              placeholder="Firstname"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              type="text"
              id="Lastname"
              placeholder="Lastname"
              onChange={this.handleChange.bind(this)}
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
              type="CabineName"
              id="CabineName"
              placeholder="CabineName"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              type="text"
              id="phonenumber"
              placeholder="phonenumber"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              type="text"
              id="AccountBanque"
              placeholder="AccountBanque"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              type="text"
              id="CityName"
              placeholder="CityName"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              id="files"
              name="files"
              placeholder="Url Cerfificat"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input type="submit" value="signin" />
            </form>
          </center>
        </div>
      );
    } else if (this.state.view === "signin") {
      return <DoctorHome />;
    }
  }
}
export default SignIn;
