import "./navbar.scss";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isActive, setIsactive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();

  window.addEventListener("scroll", () => {
    window.scrollY > 30 ? setIsactive(true) : setIsactive(false);
  });

  return (
    <nav className={isActive ? "active" : ""}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className={openMenu ? "links active" : "links"}>
          <a href="#" className="active" onClick={() => setOpenMenu(false)}>
            home
          </a>
          <a href="#about" onClick={() => setOpenMenu(false)}>
            about
          </a>
          <a href="#" onClick={() => setOpenMenu(false)}>
            features
          </a>
          <a href="#" onClick={() => setOpenMenu(false)}>
            contact
          </a>
        </div>
        <div className="btn_section">
          <button>Signup / Download</button>
          <div className="menu_btn" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <CgClose /> : <TbMenu2 />}
          </div>
        </div>
      </div>

      <div className={openMenu ? "overlay active" : "overlay"}></div>
    </nav>
  );
};
