import { GiShoppingCart, GiHamburgerMenu } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { useHistory } from "react-router";

const Header: React.FC = () => {
  /**
   * sidebar handling
   */
  const [classToAdd, setClassToAdd] = useState<string>("");
  const openSidebar = (): void => {
    setClassToAdd("sidebar-open");
    // document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  };
  const closeSidebar = (): void => {
    setClassToAdd("");
    // document.body.style.backgroundColor = 'rgba(0,0,0,0)';
  };

  /**
   * burger icon handler
   */
  const [isBurgerClicked, setIsBurgetClicked] = useState<boolean>(false);
  const handleClick = (): void => setIsBurgetClicked(!isBurgerClicked);

  /**
   * login handler
   */
  //  const history = useHistory();
  // const pushToLogin = (): void => {
  //   history.push("/login");
  // }

  return (
    <header id="top" className="header">
      <div className="container header-container">
        <div className="header__brand">a lojinha</div>
        <div className="header__container">
          <nav className="header__nav">
            <ul className={`header__nav__items ${isBurgerClicked && "active"}`}>
              <NavHashLink smooth to="/#top" className="header__nav__item">
                Home
              </NavHashLink>
              <NavHashLink smooth to="/#store" className="header__nav__item">
                Store
              </NavHashLink>
              <NavHashLink smooth to="/#aboutus" className="header__nav__item">
                About us
              </NavHashLink>
              <NavHashLink smooth to="/#contact" className="header__nav__item">
                Contacts
              </NavHashLink>
            </ul>
          </nav>
          <div className="header__cart" onClick={openSidebar}>
            <GiShoppingCart size={30} />
          </div>
          <div className="header__log">
            {/* <HiUserCircle size={30} /> */}
            <button className="header__log__btn" >Login</button>
          </div>
          <div className="header__burger__container" onClick={handleClick}>
            {isBurgerClicked ? (
              <AiOutlineClose className="header__burger-icon" />
            ) : (
              <GiHamburgerMenu className="header__burger-icon" />
            )}
          </div>
        </div>
      </div>
      <Sidebar classToAdd={classToAdd} closeSidebar={closeSidebar} />
    </header>
  );
};

export default Header;
