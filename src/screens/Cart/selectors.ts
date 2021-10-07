import { RootState } from "../../store/rootReducer";
import { storeItem } from "../Homepage/types";

export const cartSlice = (state: RootState): Array<storeItem> => state.cart.items