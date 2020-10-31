import React, { Component } from 'react';

class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
        appointments:[],
         userId:this.props.userId
        };
      }
      componentDidMount() {
          axios.get("http://localhost:3000/appointments").then((res)=>{
              this.setState({
                  appointments: res.data,
              })
          })
      }
    render() {
       
        return (
            <div>
               <h1>this is appointments</h1>
            </div>
        );
    }
}

export default Appointments;