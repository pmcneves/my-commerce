import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeOverlay } from "../../store/actions/headerTogglesActions";
import { isOverlayOpen } from "../../store/selectors/headerToggleSelectors";

const Overlay: React.FC = () => {
  const dispatch = useDispatch();
  const isOverlayVisible = useSelector(isOverlayOpen);

  return (
    <div
      className={`overlay ${isOverlayVisible ? "overlay-active" : ""}`}
      onClick={()=>dispatch(closeOverlay())}
    />
  );
};

export default Overlay;
