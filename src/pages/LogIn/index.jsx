import React from "react";
import LoginForm from "./LoginForm.jsx";
import { connect } from "react-redux";
const LogIn = (props) => {
  
  return (
  
    <div className="page">
      <h1>Log In Page</h1>
      <LoginForm />
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb,
  };
};
export default connect(mapstatetoprops)(LogIn);
