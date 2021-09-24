import { storeItem } from '../Homepage/types';
import { GET_ITEM, SET_ITEM } from './utils';

export type GetItemType = {
    type: typeof GET_ITEM;
    id: string;
};

export type SetItemType = {
    type: typeof SET_ITEM;
    data: storeItem;
};

export type ItemReducerType = {
    loading: boolean;
    loaded: boolean;
    item: storeItem | null;
};

export type ItemActionType = SetItemType | GetItemType;
