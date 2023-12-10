import { useContext, useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png";
import logo from "../../assets/images/logo.png";
import { authContext } from "../../context/AuthContext";

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
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  // ======Handle Sticky Header======
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return window.removeEventListener("scroll", handleStickyHeader);
  }, []);
  // ======Handle Toggle Menu======
  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =========Logo========= */}
          <div>
            <img src={logo} alt="Logo" />
          </div>
          {/* ==========Menu========== */}
          <div className="navigation" onClick={toggleMenu} ref={menuRef}>
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
            <div className="hidden">
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
            <h1>{user?.name}</h1>
            <Link to="/login">
              <button className="bg-primaryColor font-semibold py-2 px-6 text-white h-[44px] flex items-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
