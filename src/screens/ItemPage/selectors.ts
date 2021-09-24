import { RootState } from '../../store/rootReducer';
import { storeItem } from '../Homepage/types';

export const getStoreItem = (state: RootState): storeItem =>
    state.product.item as storeItem;
export const getLoadingStatus = (state: RootState): boolean =>
    state.product.loading;
