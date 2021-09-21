import Login from '../../components/Login';
import { NavLink } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { sidebarToggler } from '../../screens/Homepage/actions';
import Sidebar from '../../components/Sidebar';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch(sidebarToggler());
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <div className="header__brand"> A Lojinha </div>
                    <nav className="header__nav">
                        <NavLink to="#" className="header__nav__item">
                            Página inicial
                        </NavLink>
                        <NavLink to="#" className="header__nav__item">
                            Loja
                        </NavLink>
                        <NavLink to="#" className="header__nav__item">
                            Sobre
                        </NavLink>
                        <NavLink to="#" className="header__nav__item">
                            Contacto
                        </NavLink>
                    </nav>
                    <Login />
                    <div className="header__cart" onClick={toggleSidebar}>
                        <GiShoppingCart size={20} />
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
