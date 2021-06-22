import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import {
  faBars,
  faTimes,
  faCogs,
  faList,
  faUser,
  faPowerOff,
  faBox,
  faTruckLoading
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import "./styles.css";

function MNavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleTrigger = () => setIsOpen(!isOpen);
  const history = useHistory();

  function handleLogout() {
    props.logout();
    history.push("/");
  }

  return (
    // <div className="page">
    //   <div className="content">
    //     <h1>Welcome Manufacturer HomePage</h1>
    //     <h2>Info</h2>
    //   {/* </div> */}

    <div className={` sidebar ${isOpen ? " sidebar--open" : ""}`}>
      <div className="trigger" onClick={handleTrigger}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      <div id="0" className="sidebar-position">
        <Link to="/manufacturerhome/m/home" onClick={handleTrigger}>
          <FontAwesomeIcon icon={faUser} />
          <span>Home</span>
        </Link>
      </div>

      <div id="1" className="sidebar-position">
        <Link to="/manufacturerhome/m/hvmcrequisition" onClick={handleTrigger}>
          <FontAwesomeIcon icon={faCogs} />
          <span>HVMC-Requisition</span>
        </Link>
      </div>

      <div id="2" className="sidebar-position">
        <Link to="/manufacturerhome/m/generatehvmcid" onClick={handleTrigger}>
          <FontAwesomeIcon icon={faCogs} />
          <span>Generate HVMC ID</span>
        </Link>
      </div>

      <div id="3" className="sidebar-position">
        <Link to="/manufacturerhome/m/associateiotbox" onClick={handleTrigger}>
          <FontAwesomeIcon icon={faBox} />
          <span>Associate IOTBOX</span>
        </Link>
      </div>

      <div id="4" className="sidebar-position">
        <Link to="/manufacturerhome/m/schedulehandler" onClick={handleTrigger}>
          <FontAwesomeIcon icon={faList} />
          <span>Schedule Handler</span>{" "}
        </Link>
      </div>

      <div id="5" className="sidebar-position">
        <Link to="/manufacturerhome/m/ihvmctohandler" onClick={handleTrigger}>
          <FontAwesomeIcon icon={faTruckLoading} />
          <span>IHVMC to Handler</span>{" "}
        </Link>
      </div>

      <div id="6" className="sidebar-position">
        <Link to="/manufacturerhome/m/mweb" onClick={handleTrigger}>
          <FontAwesomeIcon icon={faList} />
          <span>Webconnect</span>
        </Link>
      </div>

      <div className="sidebar-position">
        <Link>
          <FontAwesomeIcon icon={faPowerOff} />
          <span onClick={handleLogout}>Log-Out</span>
        </Link>
      </div>
    </div>
    // </div>
  );
}

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
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
export default connect(mapstatetoprops, mapdispatchtoprops)(MNavBar);
