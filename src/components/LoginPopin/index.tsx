import { MouseEvent } from "react";
import { useHistory } from "react-router";

interface LoginPopinProps{
  loginClassToAdd: string;
  setIsLoginPopinVisible: (isLoginPopinVisible: boolean) => void;

}

const LoginPopin: React.FC<LoginPopinProps> = ({
  loginClassToAdd,
  setIsLoginPopinVisible,
}: LoginPopinProps) => {
  const history = useHistory();

  const goToSignUpPage = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    history.push("/create-account");
    setIsLoginPopinVisible(false);
  };

  const closeLoginPopinBtnHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoginPopinVisible(false);
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
