type SidebarProps = {
    classToAdd: string;
    sidebarHandler: () => void
};

const Sidebar: React.FC<SidebarProps> = ({ classToAdd, sidebarHandler }: SidebarProps) => {
    return (
        <div className={`${classToAdd} sidenav`}>
            <div className="sidenav__header">
                <h1>Cart</h1>
                <a onClick={sidebarHandler} className="closebtn">
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
