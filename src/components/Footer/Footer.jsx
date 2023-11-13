// import logo from "../../assets/images/logo.png";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const socialLinks = [
  { path: "https://www.facebook.com/programmerNizam1", icon: <FaFacebookF /> },
  { path: "https://github.com/programmernizam", icon: <AiFillGithub /> },
  {
    path: "https://www.linkedin.com/in/programmernizam/",
    icon: <RiLinkedinFill />,
  },
  {
    path: "https://www.instagram.com/programmernizam/",
    icon: <AiOutlineInstagram />,
  },
];
const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/", display: "About" },
  { path: "/", display: "Service" },
  { path: "/", display: "Blogs" },
];
const quickLinks02 = [
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/", display: "Request an Appointment" },
  { path: "/", display: "Find a Location" },
  { path: "/", display: "Get a Option" },
];
const quickLinks03 = [
  { path: "/", display: "Donate" },
  { path: "/contact", display: "Contact Us" },
];
const Footer = () => {
  return <div></div>;
};

export default Footer;
