import { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Magnifier from "react-magnifier";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import RefundPolicy from "../../components/RefundPolicy";
import { getItem } from "./action";
import { getLoadingStatus, getStoreItem } from "./selectors";
import { starRating } from "./utils";
import { BsArrowLeft } from "react-icons/bs";

type ItemParams = {
  id: string;
};

const ItemPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<ItemParams>();
  const loading = useSelector(getLoadingStatus);
  const item = useSelector(getStoreItem);

  /**
   * fetch specific item data on load
   */
  useEffect(() => {
    dispatch(getItem(id));
  }, []);

  /**
   * data to display for reference
   */
  let reference = "";
  if (item && item.id <= 9) {
    reference = `00${item.id}`;
  } else if (item) {
    reference = `0${item.id}`;
  }

  /**
   * go to homepage
   */
  const goBack = (): void => {
    history.push('/')
  }

  return (
    <main className="section-padding">
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="product">
            <div className="product-left">
              <Button classes={'go-back-btn'} fn={goBack}>
                <BsArrowLeft size={40}/>
              </Button>
              <div className="product__image">
                <Magnifier src={item.image} />
              </div>
            </div>
            <div className="product-right">
              <div className="product__title">{item.title}</div>
              <div className="product__id">Reference No. #ALOJ{reference}</div>
              <div className="product__price">{item.price}€</div>
              <div className="product__description">{item.description}</div>
              <div className="product__classification">
                <div className="product__classification__category">
                  <div className="product__label">Category</div>
                  <p className="product__category">{item.category}</p>
                </div>
                <div className="product__classification__rate">
                  <div className="product__label">Rating</div>
                  <div className="product__classification__rate__stars">
                    <ul>
                      {starRating(item.rating.rate).map((rate, i) => (
                        <li key={i}>
                          {rate === 1 ? <AiFillStar /> : <AiOutlineStar />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="product__quantity">
                  <div className="product__label">Quantity</div>
                  <input type="number" />
                </div>
              </div>
              <div className="product__btns">
                <div className="product__btns__add">
                  <Button classes="product__btn__add">Add to Cart</Button>
                </div>
                <Button classes="product__btn__buy">Buy now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <RefundPolicy />
    </main>
  );
};

export default ItemPage;
