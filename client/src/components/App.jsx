import React from "react";
import DoctorHome from "./DoctorsComponents/DoctorHome.jsx"
import PatientHome from "./PatientComponents/PatientHome.jsx"
import Profile from "./PatientComponents/Profile.jsx"
// import ConfirmAppointment from "./PatientComponents/ConfirmAppointment.jsx"
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        
        <Profile/>
        {/* <ConfirmAppointment/> */}
        <DoctorHome />
        <PatientHome />
      </div>
    )
  }
}
export default App;
