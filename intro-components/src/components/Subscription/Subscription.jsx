import { useState } from "react";

const Subscription = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameField, setUserNameField] = useState(true);
  const [lastNameField, setLastNameField] = useState(true);
  const [emailField, setEmailField] = useState(true);
  const [passwordField, setPasswordField] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName) {
      setUserNameField(false);
    } else {
      setUserNameField(true);
    }
    if (!lastName) {
      setLastNameField(false);
    } else {
      setLastNameField(true);
    }
    // check if email is valid or not
    const regex_pattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex_pattern.test(email)) {
      setEmailField(true);
    } else {
      setEmailField(false);
    }

    if (!password) {
      setPasswordField(false);
    } else {
      setPasswordField(true);
    }

    if (userName && lastName && emailField && password) {
      e.target.submit();
    }
  }
  return (
    <div className="flex-1">
      <p className="bg-Blue text-white py-5 px-5 font-bold rounded-2xl mb-[4px] lg:text-center">
        Try it free 7 days &nbsp;
        <span className="text-[#d9d5fb] font-light">
          then <br className="sm:hidden" />
          $20/mo. thereafter
        </span>
      </p>
      <form
        action="https://httpbin.org/post"
        method="POST"
        className="bg-white rounded-2xl px-8 mt-6"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset>
          <div className="relative">
            <input
              type="text"
              placeholder="First Name"
              name="FirstName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={!userNameField && "input-error"}
            />
            <p className={userNameField ? "hidden" : "error-message"}>
              First name cannot be empty
            </p>
            <img
              src="images/icon-error.svg"
              alt="error"
              className={
                userNameField ? "hidden" : "absolute top-[38%] right-[2.75rem]"
              }
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Last Name"
              name="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={!lastNameField && "input-error"}
            />
            <p className={lastNameField ? "hidden" : "error-message"}>
              Last name cannot be empty
            </p>
            <img
              src="images/icon-error.svg"
              alt="error icon"
              className={
                lastNameField ? "hidden" : "absolute top-[38%] right-[2.75rem]"
              }
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={!emailField && "input-error"}
            />
            <p className={emailField ? "hidden " : "error-message"}>
              Looks like this is not an email
            </p>
            <img
              src="images/icon-error.svg"
              alt="error icon"
              className={
                emailField ? "hidden" : "absolute top-[38%] right-[2.75rem]"
              }
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={!passwordField && "input-error"}
            />

            <p className={passwordField ? "hidden " : "error-message"}>
              Password cannot be empty
            </p>
            <img
              src="images/icon-error.svg"
              alt="error icon"
              className={
                passwordField ? "hidden" : "absolute top-[38%] right-[2.75rem]"
              }
              id="last-error-icon"
            />
          </div>
          <button className="uppercase bg-Green rounded-md p-[0.75em] pt-[1.5em] text-white w-full mt-2 font-semibold tracking-wider mb-4">
            Claim your free trial
          </button>
          <p className="text-[10px] text-[#d2d1d7] font-semibold text-center mb-8">
            By clicking the button, you are agreeing to
            <br className="lg:hidden" />
            our
            <span className="text-Red">Terms and Services</span>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Subscription;
