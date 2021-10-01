import { AiOutlineArrowUp } from "react-icons/ai";
import { useSelector } from "react-redux";
import { isHeaderHeightReduced } from "../../../store/selectors/headerToggleSelectors";

const ScrollButton: React.FC = () => {
  const hasHeaderHeightChanged = useSelector(isHeaderHeightReduced);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-btn ${
        hasHeaderHeightChanged ? "scroll-btn__active" : ""
      }`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp size={30} />
    </button>
  );
};

export default ScrollButton;
