import { combineReducers } from "redux";
import homepageReducer from "../screens/Homepage/reducer";
import itemReducer from "../screens/ItemPage/reducer";

const rootReducer = combineReducers({
    store: homepageReducer,
    product: itemReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>