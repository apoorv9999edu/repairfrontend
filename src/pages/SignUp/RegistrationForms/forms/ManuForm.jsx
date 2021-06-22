import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ManuForm = (props) => {
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

    axios.post(`http://localhost:8080/m/auth/msignup`, formvalue).then(
      function (value) {
        console.log("M ====", value);
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
      <Form onSubmit={submitdata} name="benform" enc="application/json">
        <br />
        <FormGroup>
          <Input
            type="name"
            name="mname"
            id="Email"
            placeholder="Manufacturer Name"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Input
            type="text"
            name="muid"
            id="muid"
            placeholder="Manufacturer Registration Number"
          />
        </FormGroup>
        <br />
        <br />
        <FormGroup>
          <Input
            type="email"
            name="memail"
            id="memail"
            placeholder="Manufacturer Email"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Input
            type="mpassword"
            name="mpassword"
            id="mexamplePassword"
            placeholder="Enter Password"
          />

          <Label for="confirmPassword"></Label>
          <Input
            type="password"
            name="mpasswordConfirm"
            id="mexamplePassword"
            placeholder="mConfirm Password"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleSelect">H-V-M-C</Label>
          <Input type="select" name="mmed" id="exampleSelect">
            <option value="r">Remedsvir</option>
            <option value="t">Toculizamb</option>
            <option value="sv"> Sputnik V </option>
            <option value="cd">Covishield</option>
            <option value="cn">Covaxin</option>
            <option value="ia">Influenza</option>
          </Input>
        </FormGroup>
        <br />
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

const mapstatetoprops = (state) => {
  return {
    allb: state.trackuserb
  };
};
export default connect(mapstatetoprops)(ManuForm);
