import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { GrClose } from 'react-icons/gr';
import { sidebarToggler } from '../../screens/Homepage/actions';

const Sidebar: React.FC = () => {
    const dispatch = useDispatch();

    const { isSidebarOpen } = useSelector((state: RootState) => state.store);
    const [sidebarClass, setSidebarClass] = useState('');

    const toggleSidebar = () => {
        dispatch(sidebarToggler());
    };

    useEffect(() => {
        if (isSidebarOpen === true) {
            setSidebarClass('isOpen');
        } else if (isSidebarOpen === false) {
            setSidebarClass('isClosed');
        }
    }, [isSidebarOpen]);

    return (
        <aside className={`sidebar-container ${sidebarClass}`}>
            <div className="sidebar">
                <div className="sidebar__title">
                    <button onClick={toggleSidebar}>
                        <GrClose />
                    </button>
                    <h1>Carrinho</h1>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
