import { RootState } from "../../store/rootReducer";
import { storeItem } from "./types";

export const getStoreItems = (state: RootState): Array<storeItem> => state.store.storeItems
export const getLoadingStatus = (state: RootState): boolean => state.store.loading