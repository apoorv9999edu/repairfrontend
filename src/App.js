import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
//

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

//login
import LogIn from "./pages/LogIn";

//actors home pages
import BeneHomePage from "./pages/ActorsHomePages/beneficiaryhome/BeneHomePage";
import PhyHomePage from "./pages/ActorsHomePages/physicianhome/PhyHomePage";
import HandHomePage from "./pages/ActorsHomePages/handlerhome/HandHomePage";

//manuhomepage
import ManuHomePage from "./pages/ActorsHomePages/manufacturerhome/ManuHomePage";
import AssociateIOTBox from "./pages/ActorsHomePages/manufacturerhome/associateiotbox";
import GenerateHVMCID from "./pages/ActorsHomePages/manufacturerhome/generatehvmcid";
import HVMCRequisition from "./pages/ActorsHomePages/manufacturerhome/hvmcrequisition";
import MWeb from "./pages/ActorsHomePages/manufacturerhome/mweb";
import Schedulehandler from "./pages/ActorsHomePages/manufacturerhome/schedulehandler";

//signup forms for different actors
import SignUpBeneficiary from "./pages/SignUp/RegistrationForms/Beneficiary";
import SignUpPhysician from "./pages/SignUp/RegistrationForms/Physician";
import SignUpHandler from "./pages/SignUp/RegistrationForms/Handler";
import SignUpManufacturer from "./pages/SignUp/RegistrationForms/Manufacturer";

import SignUp from "./pages/SignUp/index";

//App.jsx
function App(props) {
  return (
    <>
      {props.allb.all === 0 && <Navbar />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/LogIn" component={LogIn} />

        <Route
          path="/register/manufacturer"
          component={SignUpManufacturer}
          exact
        />
        <Route path="/register/handler" component={SignUpHandler} exact />
        <Route
          path="/register/beneficiary"
          component={SignUpBeneficiary}
          exact
        />
        <Route path="/register/Physician" component={SignUpPhysician} exact />

        {/* //home pages routes */}
        <Route path="/beneficiaryhome/b/" component={BeneHomePage} />
        <Route path="/physicianhome/p/" component={PhyHomePage} />
        <Route path="/handlerhome/h/" component={HandHomePage} />
        <Route path="/manufacturerhome/m/home" component={ManuHomePage} exact />
      </Switch>
    </>
  );
}

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
const mapdispatchtoprops = (dispatch) => {
  return {
    getuserdata: (data) => {
      dispatch({ type: "GETWHOISLOGGEDIN" });
    }
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(App);
