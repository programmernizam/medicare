import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/doctors",
      display: "Find a Doctor",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =========Logo========= */}
          <div>
            <img src={logo} alt="Logo" />
          </div>
          {/* ==========Menu========== */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-semibold"
                        : "text-textColor text-[16px] leading-7 font-medium hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* =========Nav Right========= */}
          <div className="flex items-center gap-4">
            <div>
              <Link>
                <figure className="w-[35px] h-[35px] rounded-full cursor-auto">
                  <img
                    src={userImg}
                    className="w-full rounded-full"
                    alt="User Image"
                  />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className="bg-primaryColor font-semibold py-2 px-6 text-white h-[44px] flex items-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
