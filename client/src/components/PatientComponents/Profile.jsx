import React, { Component } from 'react';
import Messages from './Messages.jsx';
import SelectTypeOfDoctor from "./SelectTypeOfDoctor.jsx"
import Axios from "axios"
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          book:false,
           view:"profile",
           name:this.props.name,
           email:this.props.email,
           address:this.props.address,
           city:this.props.city,
           phoneNumber:this.props.phoneNumber,
           accountBanc:this.props.accountBanc,
          //  patientId:this.props.userId
        }
    }
    // componentDidMount(){
    //   let email=this.state.email
    //       Axios
    //       .post("/patients/profile",{email})
    //       .then(res=>console.log(res))
    //       .catch(err=>console.log(err))
    // }
   
  book(){
    this.setState({book:!this.state.book})
  }
    message(){
          this.setState({ view:"messages"})
    }
    render() { 
    console.log(this.props.email)
      if(this.state.view==="messages"){
            return <Messages/>
        } if(this.state.book===true){
              return <SelectTypeOfDoctor name={this.state.name} email={this.state.email}  />
        }else{
            return (
                <div >
            <ul>
  <li className="userName">     {this.state.name}                  </li>
  <li onClick={this.message.bind(this)}><a href="#news">Messages</a></li>
  <li className="dropdown">
    <a href="#" className="dropbtn" onClick={this.book.bind(this)} >Book an appointment</a>
    
  </li>
</ul>
            <div> email: {this.state.email}</div>
            <div> address :{this.state.address}</div>   
            <div> city : {this.state.city}</div>        
            <div> phone Number: {this.state.phoneNumber}</div>   
                </div>
            );
        }
      
    }
}

export default Profile;