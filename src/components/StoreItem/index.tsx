import { storeItem } from '../../screens/Homepage/types';

type StoreItemModel = {
    item: storeItem;
};

const StoreItem: React.FC<StoreItemModel> = ({ item }: StoreItemModel) => {
    return (
        <div className="item">
            <div className="item__image">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="item__info">
                <div className="item__price">{item.price.toFixed(2)}€</div>
                <div className="item__title">{item.title.slice(0,36)}</div>
            </div>
        </div>
    );
};

export default StoreItem;
