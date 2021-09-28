import { storeItem } from "../Homepage/types";
import { CartActions } from "./types";
import { GET_CART, SET_CART } from "./utils";

export interface CartModel {
  loading: boolean;
  cart: Array<storeItem>;
}

const dummyCart = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "description1",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 1,
      count: 1,
    },
    quantity: 1,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "description2",
    category: "category2",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 2,
      count: 2,
    },
    quantity: 2,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "description3",
    category: "category3",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 3,
      count: 3,
    },
    quantity: 3,
  },
];

const initialState = {
  loading: false,
  cart: dummyCart,
};

const cartReducer = (
  state: CartModel = initialState,
  action: CartActions
): CartModel => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        loading: true,
      };
    case SET_CART:
      return {
        ...state,
        loading: false,
        //fix cart
        cart: state.cart,
      };
    default:
      return state;
  }
};

export default cartReducer;
