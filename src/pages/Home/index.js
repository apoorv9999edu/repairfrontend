import React from "react";

import { connect } from "react-redux";
const Home = (props) => {
  return (
    <div className="page">
      <h1>Home Page</h1>
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
export default connect(mapstatetoprops)(Home);
