import React from "react";
import classes from "./Layout.module.css";
import MainNavigaton from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigaton />
      <div className={classes.main}>{props.children}</div>
    </div>
  );
};

export default Layout;
