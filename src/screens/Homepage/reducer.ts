import { HomepageActionType, HomepageReducerType } from './types';
import {
    FETCH_DATA,
    SIDEBAR_TOGGLER,
    SET_DATA_FAIL,
    SET_DATA_SUCCESS,
} from './utils';

const initialValues = {
    loading: false,
    loaded: true,
    isSidebarOpen: null,
    storeItems: [],
    error: '',
};

const homepageReducer = (
    state: HomepageReducerType = initialValues,
    action: HomepageActionType
): HomepageReducerType => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        case SET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                storeItems: action.payload,
            };
        case SET_DATA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload,
            };
        case SIDEBAR_TOGGLER:
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            };
        default:
            return state;
    }
};

export default homepageReducer;
