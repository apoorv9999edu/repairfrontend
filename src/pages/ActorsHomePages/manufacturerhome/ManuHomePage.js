import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import AssociateIOTBox from "./associateiotbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCogs,
  faTable,
  faList,
  faUser,
  faPowerOff,
  faBox,
  faTruckLoading,
  facalender
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function ManuHomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="app2">
      <div className="page">
        <div className="content">
          <h1>Welcome Manufacturer HomePage</h1>
          <h2>Edisdnfo</h2>
        </div>

        <div className={`sidebar${isOpen ? " sidebar--open" : ""}`}>
          <div className="trigger" onClick={handleTrigger}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>

          <div id="0" className="sidebar-position">
            <FontAwesomeIcon icon={faUser} />
            <span>Home</span>
          </div>

          <div id="1" className="sidebar-position">
            <NavLink to="/manufacturerhome/m/home">
              <FontAwesomeIcon icon={faCogs} />
              <span>HVMC-Requisition</span>
            </NavLink>
          </div>

          <div id="2" className="sidebar-position">
            <FontAwesomeIcon icon={faCogs} />
            <span>Generate HVMC ID</span>
          </div>

          <div id="3" className="sidebar-position">
            <FontAwesomeIcon icon={faBox} />
            <span>Associate IOTBOX</span>
          </div>

          <div id="4" className="sidebar-position">
            <FontAwesomeIcon icon={faList} />
            <span>Schedule Handler</span>{" "}
          </div>

          <div id="5" className="sidebar-position">
            <FontAwesomeIcon icon={faTruckLoading} />
            <span>IHVMC to Handler</span>{" "}
          </div>

          <div id="6" className="sidebar-position">
            <FontAwesomeIcon icon={faList} />
            <span>Webconnect</span>
          </div>

          <div className="sidebar-position">
            <FontAwesomeIcon icon={faPowerOff} />
            <span>Log-Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManuHomePage;
