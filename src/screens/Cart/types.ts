import { storeItem } from "../Homepage/types";
import { GET_CART, SET_CART } from "./utils";

export type ColumnDetails = {
  [key: string]: string;
};

export type GetCartAction = {
  type: typeof GET_CART;
};

export type SetCartAction = {
  type: typeof SET_CART;
  cart: Array<storeItem>;
};

export type CartActions = GetCartAction | SetCartAction;
