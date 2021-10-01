import { useDispatch, useSelector } from "react-redux";
import { sidebarToggler } from "../../store/actions/headerTogglesActions";
import { isSidebarOpen } from "../../store/selectors/headerToggleSelectors";

const Sidebar: React.FC = () => {
    const dispatch = useDispatch();
  const isSidebarVisible = useSelector(isSidebarOpen);

    const closeSidebar = () => {
        dispatch(sidebarToggler())
    }
    return (
        <div className={`${isSidebarVisible ? "sidebar-open" : ""} sidenav`}>
            <div className="sidenav__header">
                <h1>Cart</h1>
                <a onClick={closeSidebar} className="closebtn">
                    &times;
                </a>
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
