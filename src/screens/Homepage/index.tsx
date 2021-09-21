import { useDispatch } from "react-redux";
import { sidebarToggler } from "./actions";

const Homepage: React.FC = () => {
    const dispatch = useDispatch()

    const toggleSidebar = () => {
        dispatch(sidebarToggler())
    }
    return (
        
    <div>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
    </div>);
};

export default Homepage;
