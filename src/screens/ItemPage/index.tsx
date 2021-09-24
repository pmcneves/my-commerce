import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loader from '../../components/Loader';
import { getItem } from './action';
import { getLoadingStatus, getStoreItem } from './selectors';
import { starRating } from './utils';

type ItemParams = {
    id: string;
};

const ItemPage: React.FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams<ItemParams>();
    const loading = useSelector(getLoadingStatus);
    const item = useSelector(getStoreItem);
    
    starRating(3.8)

    /**
     * fetch specific item data on load
     */
    useEffect(() => {
        dispatch(getItem(id));
    }, []);

    /**
     * data to display for reference
     */
    let reference = '';
    if (item && item.id <= 9) {
        reference = `00${item.id}`;
    } else if (item) {
        reference = `0${item.id}`;
    }

    return (
        <main className="section-padding">
            <div className="container">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="product">
                        <div className="product-left">
                            <div className="product__image">
                                <img src={item.image} />
                            </div>
                            <div className="product__description">
                                {item.description}.
                            </div>
                        </div>
                        <div className="product-right">
                            <div className="product__title">{item.title}</div>
                            <div className="product__id">
                                Reference No. #ALOJ{reference}
                            </div>
                            <div className="product__price">{item.price}0€</div>
                            <div className="product__category">
                                Category: {item.category}
                            </div>
                            <div className="product__rating">
                                <div className="product__rating__count">
                                    {item.rating.count}
                                </div>

                                <div className="product__rating__rate">
                                    Rating: {item.rating.rate}
                                </div>
                            </div>
                            <div className="product__btns">
                                <div className="product__btn_add">
                                    <button>Add to Cart</button>
                                </div>
                                <div className="product__btn__buy">
                                    <button>Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default ItemPage;
