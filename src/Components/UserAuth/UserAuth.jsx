import React, { useState, useContext } from "react";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/Register";


const UserAuth = () => {
  const [isUserNew, setIsUserNew] = useState(false);

  const IsUserNewHandler = () => {
    setIsUserNew(!isUserNew);
  };
  return (
    <div>
      {isUserNew && <RegisterForm IsUserNewHandler={IsUserNewHandler} />}
      {!isUserNew && <LoginForm IsUserNewHandler={IsUserNewHandler} />}
    </div>
  );
};

export default UserAuth;
