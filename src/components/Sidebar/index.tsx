import { useDispatch, useSelector } from "react-redux";
import { sidebarToggler } from "../../store/actions/headerTogglesActions";
import { isSidebarOpen } from "../../store/selectors/headerToggleSelectors";
import { BsArrowLeft } from "react-icons/bs";
import { cartSlice } from "../../screens/Cart/selectors";
import SidebarItem from "../SidebarItem";
import { storeItem } from "../../screens/Homepage/types";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(isSidebarOpen);
  const cart: storeItem[] = useSelector(cartSlice);

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
      {/* {cart.map((item: storeItem) => (
        // <div key={item.id}>
        //   <SidebarItem item={item}/>
        // </div>
      ))} */}
    </div>
  );
};

export default Sidebar;
