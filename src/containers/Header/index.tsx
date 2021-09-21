import { NavLink } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { HiUserCircle } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';

const Header: React.FC = () => {


    /**
     * sidebar handling
     */
    const [classToAdd, setClassToAdd] = useState<string>('');
    const openSidebar = (): void => {
        setClassToAdd('sidebar-open');
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    };
    const closeSidebar = (): void => {
        setClassToAdd('');
        document.body.style.backgroundColor = 'rgba(0,0,0,0)';

    };

    /**
     * burger icon handler
     */
    const [isBurgerClicked, setIsBurgetClicked] = useState(false);
    const handleClick = () => setIsBurgetClicked(!isBurgerClicked);
    const closeMobileMenu = () => setIsBurgetClicked(false);

    return (
        // <header className="header">
        //     <div className="container">
        //         <div className="header-container">
        //             <div className="header__brand"> A Lojinha </div>
        //             <div className="header__nav">
        //                 <nav className="header__nav__options">
        //                     <NavLink to="#" className="header__nav__item">
        //                         Página inicial
        //                     </NavLink>
        //                     <NavLink to="#" className="header__nav__item">
        //                         Loja
        //                     </NavLink>
        //                     <NavLink to="#" className="header__nav__item">
        //                         Sobre
        //                     </NavLink>
        //                     <NavLink to="#" className="header__nav__item">
        //                         Contacto
        //                     </NavLink>
        //                 </nav>
        //                 {/* <div className="header__cart" onClick={openSidebar}> */}
        //                 <div className="header__cart">
        //                     <GiShoppingCart size={30} />
        //                 </div>
        //                 <div className="header__log">
        //                     <HiUserCircle size={30}/>
        //                     <p>Login</p>
        //                 </div>
        //                 <div className="header__burger">
        //                     <GiHamburgerMenu/>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* <Sidebar classToAdd={classToAdd} closeSidebar={closeSidebar}/> */}
        // </header>

        <header className="header">
            <div className="container header-container">
                <div className="header__brand">a lojinha</div>
                <div className="header__container">
                    <nav className="header__nav">
                        <ul
                            className={`header__nav__items ${
                                isBurgerClicked && 'active'
                            }`}
                        >
                            <NavLink
                                to="#"
                                className="header__nav__item"
                                onClick={closeMobileMenu}
                            >
                                Página inicial
                            </NavLink>
                            <NavLink
                                to="#"
                                className="header__nav__item"
                                onClick={closeMobileMenu}
                            >
                                Loja
                            </NavLink>
                            <NavLink
                                to="#"
                                className="header__nav__item"
                                onClick={closeMobileMenu}
                            >
                                Sobre
                            </NavLink>
                            <NavLink
                                to="#"
                                className="header__nav__item"
                                onClick={closeMobileMenu}
                            >
                                Contacto
                            </NavLink>
                        </ul>
                    </nav>
                    <div className="header__cart" onClick={openSidebar}>
                        <GiShoppingCart size={30} />
                    </div>
                    <div className="header__log" >
                        <HiUserCircle size={30} />
                        <p>Login</p>
                    </div>
                    <div
                        className="header__burger__container"
                        onClick={handleClick}
                    >
                        {isBurgerClicked ? (
                            <AiOutlineClose className="header__burger-icon" />
                        ) : (
                            <GiHamburgerMenu className="header__burger-icon" />
                        )}
                    </div>
                </div>
            </div>
            <Sidebar classToAdd={classToAdd} closeSidebar={closeSidebar}/>              
        </header>
    );
};

export default Header;
