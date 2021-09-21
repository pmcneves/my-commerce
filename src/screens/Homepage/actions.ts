import { HomepageActionType, storeItem } from "./types";
import { SIDEBAR_TOGGLER, FETCH_DATA, SET_DATA_FAIL, SET_DATA_SUCCESS } from "./utils";


export const fetchDataFromApi = (): HomepageActionType => ({
    type: FETCH_DATA
})

export const setDataFromApi = (storeData: Array<storeItem>): HomepageActionType => ({
    type: SET_DATA_SUCCESS,
    payload: storeData
})

export const setDataFromApiFailed = (error: string): HomepageActionType => ({
    type: SET_DATA_FAIL,
    payload: error
})

export const sidebarToggler = (): HomepageActionType => ({
    type: SIDEBAR_TOGGLER
})



