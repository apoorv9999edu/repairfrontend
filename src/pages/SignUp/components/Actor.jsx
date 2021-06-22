import React from "react";
import manufacturer from "./images/manufacturer.png";
import handler from "./images/handler.jpg";
import physician from "./images/physician.jpg";
import beneficiary from "./images/beneficiary.jpg";
import ActorCard from "./ActorCard";

import "bootstrap/dist/css/bootstrap.css";
function Actor() {
  return (
    <div
      class="col d-flex justify-content-center"
      style={{
        display: "table",
        position: "absolute",
        top: "150px",
        left: "0",
        width: "100%"
      }}
    >
      <ActorCard
        name="Manufacturer"
        src={manufacturer}
        to="/register/manufacturer"
      />
      <ActorCard name="Handlers" src={handler} to="/register/handler" />
      <ActorCard
        name="Beneficiaries"
        src={beneficiary}
        to="/register/beneficiary"
      />
      <ActorCard name="Physician" src={physician} to="/register/physician" />
    </div>
  );
}
export default Actor;
