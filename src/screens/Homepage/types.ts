import {
    FETCH_DATA,
    SET_DATA_FAIL,
    SET_DATA_SUCCESS,
    SIDEBAR_TOGGLER,
} from './utils';

export type storeItem = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

type FetchDataType = {
    type: typeof FETCH_DATA;
};

type SetDataSuccessType = {
    type: typeof SET_DATA_SUCCESS;
    payload: Array<storeItem>;
};

type SetDataFailType = {
    type: typeof SET_DATA_FAIL;
    payload: string;
};

type SidebarTogglerType = {
    type: typeof SIDEBAR_TOGGLER;
};



export type HomepageActionType =
    | FetchDataType
    | SetDataSuccessType
    | SetDataFailType
    | SidebarTogglerType

export type HomepageReducerType = {
    loading: boolean;
    loaded: boolean;
    isSidebarOpen: boolean | null;
    error: string;
    storeItems: Array<storeItem>;
};
