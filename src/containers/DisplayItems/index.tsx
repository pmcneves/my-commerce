import { useSelector } from 'react-redux';
import {
    getLoadingStatus,
    getStoreItems,
} from '../../screens/Homepage/selectors';
import Loader from '../../components/Loader';
import StoreItem from '../../components/StoreItem';
import { useHistory } from 'react-router';

const DisplayItems: React.FC = () => {
    const storeItems = useSelector(getStoreItems);
    const loading = useSelector(getLoadingStatus);
    const history = useHistory();

    console.log(JSON.stringify(storeItems));

    /**
     * navigate to specific product id
     */
    const navigateToItem = (id: number): void => {
        history.push(`/products/${id}`);
    };

    return (
        <section id="store" className="container ">
            <div className="display section-padding">
                <div className="section-title display__title">lojinha</div>
                <div className="display__items">
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="items-container">
                            {storeItems.map(item => (
                                <div
                                    key={item.id}
                                    className="item-container"
                                    onClick={() => navigateToItem(item.id)}
                                >
                                    <StoreItem item={item} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DisplayItems;
