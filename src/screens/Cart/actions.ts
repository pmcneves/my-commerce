import { storeItem } from "../Homepage/types";
import { GetCartAction, SetCartAction } from "./types";
import { GET_CART, SET_CART } from "./utils";

export const getCart = (): GetCartAction => ({
  type: GET_CART,
});

export const setCart = (cart: Array<storeItem>): SetCartAction => ({
  type: SET_CART,
  cart
});

