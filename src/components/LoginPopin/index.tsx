import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginPopinToggler } from "../../store/actions/headerTogglesActions";

interface LoginPopinProps{
  loginClassToAdd: string;

}

const LoginPopin: React.FC<LoginPopinProps> = ({
  loginClassToAdd,
}: LoginPopinProps) => {
  const history = useHistory();
  const dispatch = useDispatch()

  const goToSignUpPage = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    history.push("/create-account");
    dispatch(loginPopinToggler())
  };

  const closeLoginPopinBtnHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginPopinToggler())
  };

  return (
    <div className={`login-popin-container ${loginClassToAdd}`}>
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
