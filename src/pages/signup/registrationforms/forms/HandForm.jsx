import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const HandForm = (props) => {
  props.allb.all = 0;

  const history = useHistory();
  const redirect = () => history.push("/LogIn");
  var res;

  async function submitdata(event) {
    event.preventDefault();
    console.log("//insideinhandforms");
    const data = new FormData(event.target);
    const formvalue = Object.fromEntries(data.entries());
    console.log(formvalue);

    axios.post(`http://localhost:8080/h/auth/hsignup`, formvalue).then(
      function (value) {
        console.log("Hvalue ====", value);
        toast.warning(value.data.message, toast.POSITION.BOTTOM_LEFT, {
          autoClose: 1000
        });
        toast("HeadToSignIn", { autoClose: false });
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
        backgroundColor: "#285582",
        backgroundOrigin: "padding-box",
        backgroundSize: "auto",
        borderBottomColor: "black",
        boxSizing: "border-box",
        color: "rgb(255, 255, 255)"
      }}
    >
      <ToastContainer />
      <Form onSubmit={submitdata} name="handform" enc="application/json">
        <br />
        <FormGroup>
          <Input
            type="text"
            name="hname"
            id="hname"
            placeholder="Handler Name"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Input
            type="text"
            name="huid"
            id="huid"
            placeholder="Handler Registration Number"
          />
        </FormGroup>
        <br />

        <FormGroup>
          <Input
            type="email"
            name="hemail"
            id="hEmail"
            placeholder="Handler Email"
          />
        </FormGroup>

        <br />
        <FormGroup>
          <Input
            type="password"
            name="hpassword"
            id="hPassword"
            placeholder="Enter Password"
          />

          <br />
          <Input
            type="password"
            name="hpasswordConfirm"
            id="hexamplePassword"
            placeholder="Confirm Password"
          />
        </FormGroup>

        <br />
        <FormGroup>
          <Label for="hexampleSelect">H-V-M-C</Label>
          <Input type="select" name="hrole" id="exampleSelect">
            <option value="d1">Distributor-L1</option>
            <option value="d2">Distributor-L2</option>
            <option value="d3">Distributor-L3</option>
            <option value="r">Retailer</option>
            <option value="t1">Transporter L-1</option>
            <option value="t2">Transporter L-2</option>
          </Input>
        </FormGroup>
        <br />
        <Button type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
export default connect(mapstatetoprops)(HandForm);
