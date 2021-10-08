import { useDispatch, useSelector } from "react-redux";
import { sidebarToggler } from "../../store/actions/headerTogglesActions";
import { isSidebarOpen } from "../../store/selectors/headerToggleSelectors";
import { BsArrowLeft } from "react-icons/bs";
import { cartSlice } from "../../screens/Cart/selectors";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(isSidebarOpen);
  const cart = useSelector(cartSlice);

  console.log(cart)

  
  const closeSidebar = () => {
    dispatch(sidebarToggler());
  };


  return (
    <div className={`sidenav ${isSidebarVisible ? "sidenav--open" : ""}`}>
      <div className="sidenav__header">
        <button className="sidenav__header__btn" onClick={closeSidebar}>
          <BsArrowLeft size={30} />
        </button>
        <h1 className="sidenav__header__title">Cart</h1>
      </div>
      <div className="sidenav__content">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Sidebar;
