import React, { useState, useRef, useContext } from "react";
import classes from "./Register.module.css";
import { userContext } from "../../Store/UserAuthContext";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../FIrebase/Firebase";

const RegisterForm = (props) => {
  const [MobileorEmail, setMobileorEmail] = useState(false);
  const [PhoneNo, setphoneNo] = useState("");
  const [Otp, setOtp] = useState("");
  const [otpsent, setotbSent] = useState(false);
  const fullNameRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();
  const confirmPasswordRef = useRef();
  const userctx = useContext(userContext);
  console.log(userctx.currentUser?.email);

 

  const generateRecapcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      auth
    );
  };
  const otpHandler = () => {
    if (PhoneNo.length === 13) {
      setotbSent(true);
      generateRecapcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, PhoneNo, appVerifier)
        .then((confirmationresult) => {
          console.log(confirmationresult);
          window.confirmationreasult = confirmationresult;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };


 const submitHandler = (e) => {
    e.preventDefault();
    if(Otp.length===6){
      let confirmationreasult =window.confirmationreasult;
      confirmationreasult.confirm(Otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        console.log(error)
      });
    }
    // if (passwordRef.current.value !== confirmPasswordRef.current.value) {
    //   console.log("the password doesnt match");
    // } else {
    //   userctx.register(userNameRef.current.value, passwordRef.current.value);
    //   console.log(userctx.currentUser?.email);
    // }

    console.log(PhoneNo);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.center}>
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.txt_field}>
            <input type="text" required ref={fullNameRef} />
            <span></span>
            <label>Full Name</label>
          </div>

          {!MobileorEmail && (
            <div className={classes.txt_field}>
              <input type="text" required ref={userNameRef} />
              <span></span>
              <label>Email</label>
            </div>
          )}

          {MobileorEmail && (
            <div>
              <div className={classes.txt_field}>
                <input
                  type="text"
                  required
                  onChange={(e) => setphoneNo(`+91${e.target.value}`)}
                />
                <span></span>
                <label>Phone No</label>
              </div>
              <button className={classes.btn} onClick={otpHandler}>
                Send OTP
              </button>
              <div className={classes.txt_field}>
                <input
                  type="text"
                  required
                  onChange={(e) => setOtp(e.target.value)}
                />
                <span></span>
                <label>OTP</label>
              </div>
            </div>
          )}

          <div className={classes.signup_link}>
            Change Register method ?
            <a onClick={() => setMobileorEmail(!MobileorEmail)}>Click here </a>
          </div>

          {!MobileorEmail && (
            <div>
              <div className={classes.txt_field}>
                <input type="password" required ref={passwordRef} />
                <span></span>
                <label>Password</label>
              </div>
              <div className={classes.txt_field}>
                <input type="password" required ref={confirmPasswordRef} />
                <span></span>
                <label>Confirm Password</label>
              </div>
              <div className={classes.pass}>Forgot Password?</div>
            </div>
          )}

          <input type="submit" value="Register" />

          <div className={classes.signup_link}>
            Already a Member ? <a onClick={props.IsUserNewHandler}>Login </a>
          </div>
        </form>
      </div>
      <div id="recaptcha"></div>
    </div>
  );
};
export default RegisterForm;
