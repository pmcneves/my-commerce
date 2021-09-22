import loader from '../../assets/loader.gif';

const Loader: React.FC = () => {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
                <div className="spinner__element"></div>
            </div>
        </div>
    );
};

export default Loader;
