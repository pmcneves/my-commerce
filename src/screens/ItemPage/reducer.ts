import { ItemActionType, ItemReducerType } from './types';
import { GET_ITEM, SET_ITEM } from './utils';

const initialState = {
    loading: true,
    loaded: false,
    item: null,
};

const itemReducer = (
    state: ItemReducerType = initialState,
    action: ItemActionType
): ItemReducerType => {
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        case SET_ITEM:
            return {
                ...state,
                loading: false,
                loaded: true,
                item: action.data,
            };
        default:
            return state;
    }
};

export default itemReducer;
