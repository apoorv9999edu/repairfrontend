import React from "react";
import BenForm from "./forms/BenForm";
import { connect } from "react-redux";

const SignUpBeneficiary = (props) => {
  props.allb.all = 0;

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
          <h1 style={{ textAlign: "center" }}>Beneficiary Registration</h1>
        </div>
        <BenForm />
      </div>
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
export default connect(mapstatetoprops)(SignUpBeneficiary);
