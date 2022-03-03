import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { userContext } from "../Store/UserAuthContext";

const MainNavigation = () => {
  const [userID, setUserID] = useState("");
  const userctx = useContext(userContext);
  const Navigate = useNavigate();
  const logouthandler = () => {
    userctx.logout();
  };
  const UserID = null;
  setTimeout(() => {
    setUserID(userctx.currentUser?.email);
  }, 1000);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>react Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/all-meetup">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link onClick={logouthandler} to="/">
              <span className={classes.badge}>Logout</span>
            </Link>
            <span className={classes.badge}>{userID}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
