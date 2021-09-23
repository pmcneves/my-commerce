import { storeItem } from '../Homepage/types';

export type GetItemType = {
    type: string;
    id: string;
};

export type SetItemType = {
    type: string;
    data: storeItem;
};

export type ItemReducerType = {
    loading: boolean;
    item: storeItem | null;
};

export type ItemActionType = SetItemType | GetItemType;
