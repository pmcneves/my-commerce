import { useSelector } from 'react-redux';
import {
    getLoadingStatus,
    getStoreItems,
} from '../../screens/Homepage/selectors';
import Loader from '../../components/Loader';
import StoreItem from '../../components/StoreItem';

const DisplayItems: React.FC = () => {
    const storeItems = useSelector(getStoreItems);
    const loading = useSelector(getLoadingStatus);
    console.log(storeItems);

    return (
        <section className="container ">
            <div className="display section-padding">
                <div className="section-title display__title">
                    lojinha
                </div>
                <div className="display__items">
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="items-container">
                            {storeItems.map(item => (
                                <div key={item.id} className="item-container">
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
