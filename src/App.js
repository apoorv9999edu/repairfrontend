import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
//

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";

//login
import LogIn from "./pages/login";

//actors home pages
import BeneHomePage from "./pages/beneficiaryhome/BeneHomePage";
import PhyHomePage from "./pages/physicianhome/PhyHomePage";
import HandHomePage from "./pages/handlerhome/HandHomePage";

//manuhomepage
import ManuHomePage from "./pages/manufacturerhome/index";
// import AssociateIOTBox from "./pages/manufacturerhome/AssociateIOTBox";
// import GenerateHVMCID from "./pages/manufacturerhome/GenerateHVMCID";
// import HVMCRequisition from "./pages/manufacturerhome/HVMCRequisition";
// import MWeb from "./pages/manufacturerhome/MWeb";
// import ScheduleHandler from "./pages/manufacturerhome/ScheduleHandler";
// import IHVMCToHandler from "./pages/manufacturerhome/IHVMCToHandler";

//signup forms for different actors
import SignUpBeneficiary from "./pages/signup/registrationforms/Beneficiary";
import SignUpPhysician from "./pages/signup/registrationforms/Physician";
import SignUpHandler from "./pages/signup/registrationforms/Handler";
import SignUpManufacturer from "./pages/signup/registrationforms/Manufacturer";

import SignUp from "./pages/signup/index";

//App.jsx
function App(props) {
  console.log("inside app", props.allb.all);
  return (
    <>
      {props.allb.all === 0 && <Navbar />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={LogIn} />

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
        <Route path="/manufacturerhome/m/" component={ManuHomePage} />
      </Switch>
    </>
  );
}

const mapstatetoprops = (state) => {
  return {
    allb: state.TrackUserB
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
