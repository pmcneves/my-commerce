/**
 * toggles for sidebar-cart, login-popin and burger icon(mobile) and interaction with overlay
 */

const types = {
  CLOSE_OVERLAY: "CLOSE_OVERLAY",
  LOGIN_POPIN: "LOGIN_POPIN",
  BURGER_ICON: "BURGER_ICON",
  SIDEBAR: "SIDEBAR",
  HEADER_HEIGHT: "HEADER_HEIGHT",
};

export default types;

type CloseOverlay = {
  type: typeof types.CLOSE_OVERLAY;
};
type LoginPopin = {
  type: typeof types.LOGIN_POPIN;
};

type BurgerIconToggler = {
  type: typeof types.BURGER_ICON;
};

type SidebarToggler = {
  type: typeof types.SIDEBAR;
};

type HeaderHeightToggler = {
  type: typeof types.HEADER_HEIGHT;
};

export type OverlayActions =
  | CloseOverlay
  | LoginPopin
  | BurgerIconToggler
  | SidebarToggler
  | HeaderHeightToggler;

export const closeOverlay = (): CloseOverlay => ({
  type: types.CLOSE_OVERLAY,
});

export const loginPopinToggler = (): LoginPopin => ({
  type: types.LOGIN_POPIN,
});

export const burgerIconToggler = (): BurgerIconToggler => ({
  type: types.BURGER_ICON,
});

export const sidebarToggler = (): SidebarToggler => ({
  type: types.SIDEBAR,
});

export const headerHeightToggler = (): HeaderHeightToggler => ({
  type: types.HEADER_HEIGHT,
});
