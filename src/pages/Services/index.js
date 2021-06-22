import React from "react";
import { connect } from "react-redux";
const Services = (props) => {
  return (
    <div className="page">
      <h1>Services Page</h1>
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.TrackUserB
  };
};
export default connect(mapstatetoprops)(Services);
