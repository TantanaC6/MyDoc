import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.userId
    };
  }
  render() {
    return(
      <div>
     <h1>your id is : {this.state.id}</h1>
      </div>
    )
 
  }
}

export default Profile;
