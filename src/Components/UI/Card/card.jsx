import React from "react";
import classes from "./card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={props.className}>{props.children}</div>
    </div>
  );
};

export default Card;
