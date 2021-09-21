import { useDispatch } from "react-redux";
import { sidebarToggler } from "./actions";

const Homepage: React.FC = () => {
    const dispatch = useDispatch()

    const toggleSidebar = () => {
        dispatch(sidebarToggler())
    }
    return (
        
    <div>
        <button onClick={toggleSidebar}>open</button>
    </div>);
};

export default Homepage;
