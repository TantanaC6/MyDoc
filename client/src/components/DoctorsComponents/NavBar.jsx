import React, { Component } from "react";
import axios from "axios";
import Profile from "./Profile.jsx";
import Messages from "./Messages.jsx";
import Appointments from "./Appointments.jsx";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userId: this.props.userId,
      userName: this.props.userName,
      check: "profile",
    };
    this.profile = this.profile.bind(this);
    this.appointment = this.appointment.bind(this);
    this.message = this.message.bind(this);
  }
  componentDidMount() {
    this.setState({
      check: "profile",
    });
  }
  appointment(e) {
    e.preventDefault();
    this.setState({
      check: "appointment",
    });
  }
  profile(e) {
    e.preventDefault();
    this.setState({
      check: "profile",
    });
  }
  message(e) {
    e.preventDefault();
    this.setState({
      check: "message",
    });
  }

  render() {
    if (this.state.check === "profile") {
      return (
        <div>
          <div className="navbar">
            <span className="logo" onClick={(e) => this.profile(e)}>
            🚑
            </span>
            <span
              className="nav"
              className="nav-selected"
              onClick={(e) => this.appointment(e)}
            >
              My appointments
            </span>
            <span className="nav"  className="nav-selected" onClick={(e) => this.message(e)}>
              {" "}
              My messages
            </span>
          </div>
          <Profile userId={this.state.userId} userName={this.state.userName}/>
        </div>
      );
    } else if (this.state.check === "appointment") {
      return (
        <div>
          <div className="navbar">
            <span className="logo" onClick={(e) => this.profile(e)}>
            🚑
            </span>
            <span
              className="nav"
              className="nav-selected"
              onClick={(e) => this.appointment(e)}
            >
              My appointments
            </span>
            <span className="nav"  className="nav-selected" onClick={(e) => this.message(e)}>
              {" "}
              My messages
            </span>
          </div>
          <Appointments userId={this.state.userId} userName={this.state.userName}/>
        </div>
      );
    } else if (this.state.check === "message") {
      return (
        <div>
           <div className="navbar">
            <span className="logo" onClick={(e) => this.profile(e)}>
            🚑
            </span>
            <span
              className="nav"
              className="nav-selected"
              onClick={(e) => this.appointment(e)}
            >
              My appointments
            </span>
            <span className="nav"  className="nav-selected" onClick={(e) => this.message(e)}>
              {" "}
              My messages
            </span>
          </div>
          <Messages userId={this.state.userId} userName={this.state.userName}/>
        </div>
      );
    }
  }
}

export default NavBar;
