import { combineReducers } from "redux";
import cartReducer from "../screens/Cart/reducer";
import homepageReducer from "../screens/Homepage/reducer";
import itemReducer from "../screens/ItemPage/reducer";

const rootReducer = combineReducers({
    store: homepageReducer,
    product: itemReducer,
    cart: cartReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>