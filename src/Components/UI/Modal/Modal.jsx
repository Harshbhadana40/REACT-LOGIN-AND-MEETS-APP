import React, { useContext} from "react";
import UserAuth from "../../UserAuth/UserAuth";
import { userContext } from "../../Store/UserAuthContext";
import { useNavigate } from "react-router-dom";

import "./Modal.css";

const Modal = (props) => {

  const userctx = useContext(userContext);
  const Navigate = useNavigate();

    if (userctx.currentUser?.accessToken) {
    Navigate("/all-meetup");
  }
 
  return (
    <div className="backdrop">
      <div className="modal">
        <UserAuth />
      </div>
    </div>
  );
};

export default Modal;
