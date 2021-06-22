import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MNavBar from "./MNavBar";
import "./styles.css";

import AssociateIOTBox from "./AssociateIOTBox";
import GenerateHVMCID from "./GenerateHVMCID";
import HVMCRequisition from "./HVMCRequisition";
import IHVMCToHandler from "./IHVMCToHandler";
import MWeb from "./MWeb";
import LogOut from "./LogOut";
import ScheduleHandler from "./ScheduleHandler";
import { connect } from "react-redux";

function ManuHomePage(props) {
  console.log("insidemanufacurerhomepage", props.allb.all);
  return (
    <div>
      {props.allb.all === 4 && <MNavBar />}
      <Switch>
        <Route
          path="/manufacturerhome/m/associateiotbox"
          component={AssociateIOTBox}
          exact
        />
        <Route
          path="/manufacturerhome/m/generatehvmcid"
          component={GenerateHVMCID}
          exact
        />
        <Route
          path="/manufacturerhome/m/ihvmctohandler"
          component={IHVMCToHandler}
          exact
        />
        <Route
          path="/manufacturerhome/m/hvmcrequisition"
          component={HVMCRequisition}
          exact
        />
        <Route path="/manufacturerhome/m/mweb" component={MWeb} exact />
        <Route
          path="/manufacturerhome/m/schedulehandler"
          component={ScheduleHandler}
          exact
        />
      </Switch>
    </div>
  );
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
export default connect(mapstatetoprops, mapdispatchtoprops)(ManuHomePage);
