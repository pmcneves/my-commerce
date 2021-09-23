import { ItemActionType, ItemReducerType } from './types';
import { GET_ITEM, SET_ITEM } from './utils';

const initialState = {
    loading: false,
    item: null,
};

const itemReducer = (state: ItemReducerType = initialState, action: ItemActionType): ItemReducerType => {
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state,
                loading: true,
            };
        case SET_ITEM:
            console.log(action)
            return {
                ...state,
                loading: false,
                // item: action.data,
            };
        default:
            return state;
    }
};
