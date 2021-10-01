import { GiShoppingCart, GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavHashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import {
  burgerIconToggler,
  headerHeightToggler,
  loginPopinToggler,
  sidebarToggler,
} from "../../store/actions/headerTogglesActions";
import {
  isBurgerIconOpen,
  isHeaderHeightReduced,
} from "../../store/selectors/headerToggleSelectors";
import { useEffect, useRef, useState } from "react";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  /**
   * header changes styles when scroll
   */
  const [activatedScrollEffect, setActivedScrollEffect] = useState(false);
  const onScroll = (e: any) => {
    if (e.target.documentElement.scrollTop > 300) {
      setActivedScrollEffect(true);
    } else {
      setActivedScrollEffect(false);
    }
  };

  useEffect(() => {
    isMounted.current = false;
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(headerHeightToggler());
    } else {
      isMounted.current = true;
    }
  }, [activatedScrollEffect]);

  /**
   * sidebar handling
   */
  const sidebarHandler = (): void => {
    dispatch(sidebarToggler());
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
  const loginBtnHandler = (): void => {
    dispatch(loginPopinToggler());
  };

  return (
    <header
      className={`header ${
        activatedScrollEffect ? "header__scroll-effect" : ""
      }`}
    >
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
          </div>
          <div
            className="header__burger__container"
            onClick={burgerIconHandler}
          >
            {isBurgerIconToggledOn ? (
              <AiOutlineClose className="header__burger-icon" />
            ) : (
              <GiHamburgerMenu className="header__burger-icon" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
