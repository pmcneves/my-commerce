import { storeItem } from "../Homepage/types";
import { GetItemType, SetItemType } from "./types";
import { GET_ITEM, SET_ITEM } from "./utils";

export const getItem = (id: string): GetItemType => ({
    type: GET_ITEM,
    id
})

export const setItem = (data: storeItem): SetItemType => ({
    type: SET_ITEM,
    data
})
