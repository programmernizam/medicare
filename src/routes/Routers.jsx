import Contact from "../pages/Contact";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Doctors from "../pages/Doctors/Doctors";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Service from "../pages/Services";
import Signup from "../pages/Signup";

import { Route, Routes } from "react-router-dom";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/details" element={<DoctorDetails />} />
      </Routes>
    </div>
  );
};
export default Routers;
