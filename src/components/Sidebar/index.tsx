import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { GrClose } from 'react-icons/gr';
import { sidebarToggler } from '../../screens/Homepage/actions';

type SidebarProps = {
    classToAdd: string;
    closeSidebar: () => void
};

const Sidebar: React.FC<SidebarProps> = ({ classToAdd, closeSidebar }: SidebarProps) => {
    return (
        <div className={`${classToAdd} sidenav`}>
            <a onClick={closeSidebar} className="closebtn">
                &times;
            </a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    );
};

export default Sidebar;
