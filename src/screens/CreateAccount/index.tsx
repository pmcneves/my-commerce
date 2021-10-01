import { useState, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { startCreateAccount } from "./actions";

const CreateAccount: React.FC = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const createAccountSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      username: username,
      password: password,
      address: address,
      phone: phoneNumber,
    };
    dispatch(startCreateAccount(data));
  };

  return (
    <main className="create-container">
      <div className="create-subcontainer">
          <div className="new-account">
            <div className="new-account__header">Create an account</div>
            <form
              onSubmit={(e: SyntheticEvent) => createAccountSubmitHandler(e)}
            >
              <div className="form-container">
                <div className="new-account-left">
                  <div className="new-account__form-inputs new-account__name__first">
                    <label className="new-account__label">First name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="new-account__form-inputs new-account__name__last">
                    <label className="new-account__label">Last name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="new-account__form-inputs new-account__email">
                    <label className="new-account__label">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="new-account__form-inputs new-account__username">
                    <label className="new-account__label">Username</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="new-account-right">
                  <div className="new-account__form-inputs new-account__password">
                    <label className="new-account__label">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="new-account__form-inputs new-account__password">
                    <label className="new-account__label">
                      Repeat password
                    </label>
                    <input
                      type="password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                  </div>
                  <div className="new-account__form-inputs new-account__address">
                    <label className="new-account__label">Address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="new-account__form-inputs new-account__phone">
                    <label className="new-account__label">Phone Number</label>
                    <input
                      type="number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="new-account__btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </main>
  );
};

export default CreateAccount;
