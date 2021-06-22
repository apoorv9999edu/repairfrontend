import React from "react";
import PhyForm from "./forms/PhyForm";
import { connect } from "react-redux";

const SignUpPhysician = (props) => {
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
          <h1 style={{ textAlign: "center" }}>Physician Registration</h1>
        </div>
        <PhyForm />
      </div>
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
export default connect(mapstatetoprops)(SignUpPhysician);
