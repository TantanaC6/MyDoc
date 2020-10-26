import React from "react";
import DoctorHome from "./DoctorsComponents/DoctorHome.jsx"
import PatientHome from "./PatientComponents/PatientHome.jsx"

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <DoctorHome />
        <PatientHome />
      </div>
    )
  }
}
export default App;
