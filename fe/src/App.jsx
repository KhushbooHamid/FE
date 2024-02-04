import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './views/jsx/Home.jsx'
import Login from "./views/jsx/Login.jsx";
import Signup from "./views/jsx/Signup.jsx";
import SharedLogin from "./components/common/SharedLogin.jsx";
import SharedSignup from "./components/common/SharedSignup.jsx"
import DoctorLogin from "./components/doctor/DoctorLogin.jsx";
import PatientLogin from "./components/patient/PatientLogin.jsx";
import DoctorSignup from "./components/doctor/DoctorSignup.jsx"
import PatientSignup from "./components/patient/PatientSignup.jsx"
import Header from "./components/common/Header.jsx";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/sharedlogin" element={<SharedLogin />} />
      <Route path="/sharedsignup" element={<SharedSignup />} />
      <Route path="/doctor/login" element={<DoctorLogin />} />
      <Route path="/patient/login" element={<PatientLogin />} />
      <Route path="/signup/patient" element={<PatientSignup />} />
      <Route path="/signup/doctor" element={<DoctorSignup />} />
      </Routes>
    </Router>
  );
};

export default App;
