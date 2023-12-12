import Dashboard from "../Dashboard/doctor_account/Dashboard";
import MyAccount from "../Dashboard/user_account/MyAccount";
import Contact from "../pages/Contact";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Doctors from "../pages/Doctors/Doctors";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Service from "../pages/Services";
import Signup from "../pages/Signup";

import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
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
        <Route path="/doctor-details" element={<DoctorDetails />} />
        <Route
          path="/user/profile/me"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctors/profile/me"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};
export default Routers;
