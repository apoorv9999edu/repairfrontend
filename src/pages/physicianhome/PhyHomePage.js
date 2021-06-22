import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import MNavBar from "./MNavBar";
import "./styles.css";
import { connect } from "react-redux";

function PhyHomePage(props) {
  console.log("insidemanufacurerhomepage", props.allb.all);
  return <div>{/* {props.allb.all === 4 && <MNavBar />} */}</div>;
}

const mapstatetoprops = (state) => {
  return {
    allb: state.TrackUserB
  };
};
const mapdispatchtoprops = (dispatch) => {
  return {
    set_who_logged: (data) => {
      dispatch({ type: "GETWHOISLOGGEDIN", payload: data });
    },
    logout: () => {
      dispatch({ type: "BLOGOUT" });
    }
  };
};
export default connect(mapstatetoprops, mapdispatchtoprops)(PhyHomePage);
