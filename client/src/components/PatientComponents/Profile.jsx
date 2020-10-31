import React, { Component } from "react";
import SelectTypeOfDoctor from "./SelectTypeOfDoctor.jsx"
import Axios from "axios"
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
     patient:[],
     appointments:[],
     name:this.props.name,
     email:this.props.email,
     selectType:false
    };
   
  }
  componentDidMount(){
   let email=this.state.email
             Axios
             .post("http://localhost:3000/patients/profile",{email})
             .then(res=>this.setState({patient:[res.data]}))
             .catch(err=>console.log(err))
}
 
  render() {
    // const list = this.state.patients.filter((doc)=>this.state.userId === doc.id).map((item)=>(
    //   <div key={item.id} className="prop">
    //   <li>Name : {item.name}</li>
    //   <li>Email : {item.email}</li>
    //   <li>Address : {item.address}</li>
    //   <li>Phone : {item.phoneNumber}</li>
    //   </div> 
    // ))
    // const listApp = this.state.appointments.filter((app)=>app.check === "sended" && this.state.userId === app.patientId).map((item)=>(
    //   <div key={item.id} className="prop">
    //   <h1>hello patients please i want to have an appointment as soon as possible</h1><br></br>
    //   </div> 
    // ))
    console.log(this.state)
   return (
     
     <div>
       {this.state.patient.map(patient => (
            <div key={patient.id}>
                 <li> Email :{patient.email}</li> 
                  <li> City :{patient.city}</li> 
                  <li> Address{patient.address}</li> 
                  <li>Phone Number :{patient.phoneNumber}</li> 
            </div>
         ))}
     </div>
    
  ) 
  }
}

export default Profile;
