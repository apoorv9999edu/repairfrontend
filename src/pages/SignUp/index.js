import React from "react";
import Actor from "./components/Actor.jsx";
import { connect } from "react-redux";

const SignUp = (props) => {
  return (
    <div className="page">
      <Actor />
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
export default connect(mapstatetoprops)(SignUp);
