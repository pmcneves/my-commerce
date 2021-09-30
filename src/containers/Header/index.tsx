import { GiShoppingCart, GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "../../components/Sidebar";
import { NavHashLink } from "react-router-hash-link";
import LoginPopin from "../../components/LoginPopin";
import { useDispatch, useSelector } from "react-redux";
import {
  burgerIconToggler,
  loginPopinToggler,
  sidebarToggler,
} from "../../store/actions/headerTogglesActions";
import {
  isBurgerIconOpen,
  isLoginPopinOpen,
  isSidebarOpen,
} from "../../store/selectors/headerToggleSelectors";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  /**
   * sidebar handling
   */
  const isSidebarVisible = useSelector(isSidebarOpen);
  const sidebarHandler = (): void => {
    dispatch(sidebarToggler())
  };

  /**
   * burger icon handler
   */
  const isBurgerIconToggledOn = useSelector(isBurgerIconOpen);
  const burgerIconHandler = (): void => {
    dispatch(burgerIconToggler());
  };

  /**
   * login handler
   */
  const isLoginPopinVisible = useSelector(isLoginPopinOpen);
  const loginBtnHandler = (): void => {
    dispatch(loginPopinToggler());
  };

  return (
    <header id="top" className="header">
      <div className="container header-container">
        <div className="header__brand">a lojinha</div>
        <div className="header__container">
          <nav className="header__nav">
            <ul
              className={`header__nav__items ${
                isBurgerIconToggledOn && "active"
              }`}
            >
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
          <div className="header__cart" onClick={sidebarHandler}>
            <GiShoppingCart size={30} />
          </div>
          <div className="header__log">
            <button className="header__log__btn" onClick={loginBtnHandler}>
              Login
            </button>
            <LoginPopin
              loginClassToAdd={isLoginPopinVisible ? "loginpopin-open" : ""}
            />
          </div>
          <div className="header__burger__container" onClick={burgerIconHandler}>
            {isBurgerIconToggledOn ? (
              <AiOutlineClose className="header__burger-icon" />
            ) : (
              <GiHamburgerMenu className="header__burger-icon" />
            )}
          </div>
        </div>
      </div>
      <Sidebar classToAdd={isSidebarVisible ? 'sidebar-open' : ''} sidebarHandler={sidebarHandler} />
    </header>
  );
};

export default Header;
