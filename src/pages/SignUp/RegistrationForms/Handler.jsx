import React from "react";
import HandForm from "./forms/HandForm";
import { connect } from "react-redux";

const SignUpHandler = (props) => {
  return (
    <div className="page">
      <div
        className="page"
        style={{
          display: "table",
          position: "absolute",
          top: "80px",
          left: "0",
          width: "100%"
        }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>Handler Registration</h1>
        </div>
        <h5 style={{ textAlign: "center" }}>
          Retailers ,Distributors, Transporters
        </h5>
        <HandForm />
      </div>
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
export default connect(mapstatetoprops)(SignUpHandler);
