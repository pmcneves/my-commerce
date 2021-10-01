import { combineReducers } from "redux";
import cartReducer from "../screens/Cart/reducer";
import homepageReducer from "../screens/Homepage/reducer";
import itemReducer from "../screens/ItemPage/reducer";
import headerToggleReducer from "./reducers/headerToggleReducer";

const rootReducer = combineReducers({
    store: homepageReducer,
    product: itemReducer,
    cart: cartReducer,
    headerToggle: headerToggleReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>