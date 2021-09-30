import { RootState } from "../rootReducer";

export const isLoginPopinOpen = (state: RootState): boolean =>
  state.headerToggle.isLoginPopinOpen;
export const isOverlayOpen = (state: RootState): boolean =>
  state.headerToggle.isOverlayOpen;
export const isBurgerIconOpen = (state: RootState): boolean =>
  state.headerToggle.isBurgerIconOpen;
export const isSidebarOpen = (state: RootState): boolean =>
  state.headerToggle.isSidebarOpen;
