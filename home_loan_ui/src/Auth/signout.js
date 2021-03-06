import React from "react";
import { Redirect } from "react-router-dom";

const SignOut = () => {
  const signoutfn = () => {
    localStorage.removeItem("user");

    return (
      <p>
        Set props.user to null then redirect to home. if props.user is set to
        null the navlink style will also change
        <Redirect to="/SignIn" />
      </p>
    );
  };
  return <div>{signoutfn()}</div>;
};

export default SignOut;
