import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCogs,
  faTable,
  faList,
  faUser,
  faPowerOff
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function BeneHomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="page">
      <div className="content">
        <h1>Welcome BeneficaryHomePage</h1>
      </div>

      <div className={`sidebar${isOpen ? " sidebar--open" : ""}`}>
        <div className="trigger" onClick={handleTrigger}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>

        <div className="sidebar-position">
          <FontAwesomeIcon icon={faUser} />
          <span>Home</span>
        </div>

        <div className="sidebar-position">
          <FontAwesomeIcon icon={faCogs} />
          <span>Menu item 2</span>
        </div>

        <div className="sidebar-position">
          <FontAwesomeIcon icon={faTable} />
          <span>Menu item 3</span>
        </div>

        <div className="sidebar-position">
          <FontAwesomeIcon icon={faPowerOff} />
          <span>Log-Out</span>
        </div>
      </div>
    </div>
  );
}

export default BeneHomePage;
