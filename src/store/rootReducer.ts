import { combineReducers } from "redux";
import homepageReducer from "../screens/Homepage/reducer";

const rootReducer = combineReducers({
    store: homepageReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>