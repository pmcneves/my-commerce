import types, { OverlayActions } from "../actions/headerTogglesActions";

type OverlayReducer = {
  isOverlayOpen: boolean;
  isLoginPopinOpen: boolean;
  isBurgerIconOpen: boolean;
  isSidebarOpen: boolean;
  isHeaderHeightReduced: boolean;
};

const initialState: OverlayReducer = {
  isOverlayOpen: false,
  isLoginPopinOpen: false,
  isBurgerIconOpen: false,
  isSidebarOpen: false,
  isHeaderHeightReduced: false,
};

const headerToggleReducer = (
  state = initialState,
  action: OverlayActions
): OverlayReducer => {
  switch (action.type) {
    case types.LOGIN_POPIN:
      return {
        ...state,
        isOverlayOpen: !state.isOverlayOpen,
        isLoginPopinOpen: !state.isLoginPopinOpen,
      };
    case types.BURGER_ICON:
      return {
        ...state,
        isOverlayOpen: !state.isOverlayOpen,
        isBurgerIconOpen: !state.isBurgerIconOpen,
      };
    case types.SIDEBAR:
      return {
        ...state,
        isOverlayOpen: !state.isOverlayOpen,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case types.CLOSE_OVERLAY:
      return {
        ...state,
        isOverlayOpen: false,
        isLoginPopinOpen: false,
        isBurgerIconOpen: false,
        isSidebarOpen: false,
      };
    case types.HEADER_HEIGHT:
      return {
        ...state,
        isHeaderHeightReduced: !state.isHeaderHeightReduced,
      };
    default:
      return state;
  }
};

export default headerToggleReducer;
