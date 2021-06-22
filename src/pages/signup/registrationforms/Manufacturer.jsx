import React from "react";
import ManuForm from "./forms/ManuForm.jsx";
import { connect } from "react-redux";

const SignUpManufacturer = (props) => {
  props.allb.all = 0;
  return (
    <div
      className="page"
      style={{
        display: "table",
        position: "absolute",
        top: "100px",
        left: "0",
        width: "100%"
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Manufacturer Registration </h1>
      </div>
      <ManuForm />
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
const mapdispatchtoaction = () => {
  return {};
};
export default connect(
  mapstatetoprops,
  mapdispatchtoaction
)(SignUpManufacturer);
