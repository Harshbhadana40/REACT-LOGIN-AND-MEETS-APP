import classes from "./LoginForm.module.css";
import React, { useState, useRef, useContext } from "react";
import { userContext } from "../../Store/UserAuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [error, setError] = useState("");
  const passwordRef = useRef();
  const emailRef = useRef();
  const userctx = useContext(userContext);
  const Navigate = useNavigate();
  console.log("loginform", userctx?.currentUser?._tokenResponse?.idToken);
  const submitHandler = (e) => {
    e.preventDefault();

    try {
      userctx.login(emailRef.current.value, passwordRef.current.value);
      console.log(userctx.currentUser);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes.Container}>
      <div className={classes.center}>
        <h1>Login</h1>
        <h3>{userctx.error}</h3>
        <form onSubmit={submitHandler}>
          <div className={classes.txt_field}>
            <input type="text" required ref={emailRef} />
            <span></span>
            <label>Email</label>
          </div>
          <div className={classes.txt_field}>
            <input type="password" required ref={passwordRef} />
            <span></span>
            <label>Password</label>
          </div>
          <div className={classes.pass}>Forgot Password?</div>
          <input type="submit" value="Login" />
          <div className={classes.signup_link}>
            Not a member? <a onClick={props.IsUserNewHandler}>Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
