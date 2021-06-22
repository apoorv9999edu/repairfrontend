import React from "react";
import { connect } from "react-redux";

const About = (props) => {
  return (
    <div className="page">
      <h1>About Page</h1>
    </div>
  );
};
const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
export default connect(mapstatetoprops)(About);
