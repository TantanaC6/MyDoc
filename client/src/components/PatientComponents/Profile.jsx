import React, { Component } from "react";

import axios from "axios"
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
     patients:[],
     appointments:[],
     userId:this.props.userId,
     userName:this.props.userName
    };
   
  }
 componentDidMount() {
      axios.get("http://localhost:3000/patients").then((res) => {
     this.setState({
       patients: res.data,
     })
   })
     axios.get("http://localhost:3000/appointments").then((res) => {
      this.setState({
        appointments: res.data,
      })
     })
 }
 
  render() {
    const list = this.state.patients.filter((doc)=>this.state.userId === doc.id).map((item)=>(
      <div key={item.id} className="prop">
      <li>Name : {item.name}</li>
      <li>Email : {item.email}</li>
      <li>Address : {item.address}</li>
      <li>Phone : {item.phoneNumber}</li>
      </div> 
    ))
    const listApp = this.state.appointments.filter((app)=>app.check === "sended" && this.state.userId === app.patientId).map((item)=>(
      <div key={item.id} className="prop">
      <h1>hello patients please i want to have an appointment as soon as possible</h1><br></br>
      </div> 
    ))
   return (
   <div>
   <ul>
   {list}
   </ul>
   <ul>
   {listApp}
   </ul> 
   </div>
  ) 
  }
}

export default Profile;
