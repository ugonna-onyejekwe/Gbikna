import "./navbar.scss";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

export const NavBar = () => {
  const [isActive, setIsactive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 100 ? setIsactive(true) : setIsactive(false);
  });

  return (
    <nav className={isActive}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className={openMenu ? "navigators active" : "navigators"}>
          <div className="menu_btn close" onClick={() => setOpenMenu(false)}>
            <IoCloseOutline />
          </div>

          <div className="links">
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

          <div className="btn">
            <button>sign in</button>
          </div>
        </div>

        <div className="menu_btn open" onClick={() => setOpenMenu(true)}>
          <TbMenu2 />
        </div>
      </div>

      <div
        className={openMenu ? "overlay active" : "overlay"}
        onClick={() => setOpenMenu(false)}
      ></div>
    </nav>
  );
};
