import { connect } from "react-redux";
import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const BenForm = (props) => {
  props.allb.all = 0;
  const history = useHistory();
  const redirect = () => history.push("/LogIn");
  var res;

  async function submitdata(event) {
    event.preventDefault();
    console.log("//insideinbenforms");
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    axios.post(`http://localhost:8080/b/auth/bsignup`, value).then(
      function (value) {
        console.log("value ====", value);
        toast.warning(value.data.message, toast.POSITION.BOTTOM_LEFT, {
          autoClose: 1000
        });
        toast("HeadToSignIN", { autoClose: false });
        setTimeout(redirect, 2000);
      },
      function (error) {
        toast.error("Error" + error, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 15000
        });
      }
    );
  }

  return (
    <div
      style={{
        padding: "30px",
        paddingTop: "20px",
        width: "50%",
        boxShadow:
          "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        webkitAppearance: "none",
        alignItems: "flex-start",
        backgroundAttachment: "scroll",
        backgroundClip: "border-box",
        backgroundColor: "#8ED081",
        backgroundOrigin: "padding-box",
        backgroundSize: "auto",
        borderBottomColor: "black",
        boxSizing: "border-box",
        color: "rgb(255, 255, 255)"
      }}
    >
      <Form onSubmit={submitdata} name="benform" enc="application/json">
        <br />
        <FormGroup>
          <Input
            type="number"
            name="buid"
            id="adhar"
            placeholder="Beneficiary Adhar Number"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Input type="text" name="bname" id="name" placeholder="Full Name" />
        </FormGroup>
        <br />
        <FormGroup>
          <Input type="email" name="bemail" id="Email" placeholder="Email" />
        </FormGroup>
        <br /> <br />
        <FormGroup>
          <Input
            type="password"
            name="bpassword"
            id="bexamplePassword"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <input
            type="password"
            name="bpasswordConfirm"
            id="examplePassword"
            placeholder="Confirm Password"
          />
        </FormGroup>{" "}
        <br /> <br />
        <FormGroup>
          <Input type="number" name="bage" id="age" placeholder="Enter Age" />
        </FormGroup>
        <br />
        <Button type="submit" value="Submit">
          {" "}
          Submit{" "}
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
export default connect(mapstatetoprops)(BenForm);
