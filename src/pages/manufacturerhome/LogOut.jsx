import React from "react";

function LogOut(props) {
  return (
    <h1 on onLoad={() => props.logout}>
      loggingout
    </h1>
  );
}
export default LogOut;
