import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginPopinToggler } from "../../store/actions/headerTogglesActions";
import {
  isHeaderHeightReduced,
  isLoginPopinOpen,
} from "../../store/selectors/headerToggleSelectors";

const LoginPopin: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLoginPopinVisible = useSelector(isLoginPopinOpen);
  const hasHeaderHeightChanged = useSelector(isHeaderHeightReduced);

  const goToSignUpPage = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    history.push("/create-account");
    dispatch(loginPopinToggler());
  };

  const closeLoginPopinBtnHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginPopinToggler());
  };

  return (
    <div
      className={`login-popin-container 
      ${isLoginPopinVisible ? "login-popin-container__open" : ""} 
      ${hasHeaderHeightChanged ? "login-popin-container__height-fix" : ""}`}
    >
      <div className="login-popin">
        <form>
          <div className="login-popin__field">
            <label className="login-popin__label">Username</label>
            <input type="text" className="login-popin__input" />
          </div>
          <div className="login-popin__field">
            <label className="login-popin__label">Password</label>
            <input className="login-popin__input" type="password" />
          </div>
          <div className="login-popin__btns">
            <button
              className="btn-popin btn-popin-close"
              onClick={(e) => closeLoginPopinBtnHandler(e)}
            >
              Close
            </button>
            <button className="btn-popin btn-popin-log" type="submit">
              Log in
            </button>
          </div>
          <div className="login-popin__newuser">
            <p>New customer?</p>
            <button
              className="btn-popin btn-popin-new"
              onClick={goToSignUpPage}
            >
              Start here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopin;
