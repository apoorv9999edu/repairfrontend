import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const PhyForm = (props) => {
  props.allb.all = 0;

  const history = useHistory();
  const redirect = () => history.push("/LogIn");
  var res;
  async function submitdata(event) {
    event.preventDefault();
    console.log("//insidephyforms");
    const data = new FormData(event.target);
    const formvalue = Object.fromEntries(data.entries());
    console.log(formvalue);

    axios.post(`http://localhost:8080/p/auth/psignup`, formvalue).then(
      function (value) {
        console.log("Pvalue ====", value);
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
        backgroundColor: "#9b1d20",
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
        backgroundOrigin: "padding-box",
        backgroundSize: "auto",
        borderBottomColor: "black",
        boxSizing: "border-box",
        color: "rgb(255, 255, 255)"
      }}
    >
      <ToastContainer />
      <Form onSubmit={submitdata} name="phyform" enc="application/json">
        <br />
        <FormGroup>
          <Input
            type="text"
            name="pname"
            id="name"
            placeholder="Physcian Name"
          />
        </FormGroup>
        <br />

        <FormGroup>
          <Input
            type="text"
            name="puid"
            id="lic"
            placeholder="Physician Licensce Number"
          />
        </FormGroup>

        <br />
        <FormGroup>
          <Input
            type="email"
            name="pemail"
            id="Email"
            placeholder="Physician Email"
          />
        </FormGroup>

        <br />
        <FormGroup>
          <Input
            type="password"
            name="ppassword"
            id="ePassword"
            placeholder="Enter Password"
          />

          <br />
          <Input
            type="password"
            name="ppasswordConfirm"
            id="pcPassword"
            placeholder="Confirm Password"
          />
        </FormGroup>
        <br />
        <br />
        <FormGroup>
          <Label for="exampleSelect">Medic-type</Label>
          <Input type="select" name="prole" id="leSelect">
            <option value="d">Doctor</option>
            <option value="n">Nurse</option>
          </Input>
        </FormGroup>
        <br />
        <Button type="submit" value="Submit">
          Sign Up
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
export default connect(mapstatetoprops)(PhyForm);
