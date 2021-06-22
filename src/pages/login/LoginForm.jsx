import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

import { connect } from "react-redux";
toast.configure();

function LoginForm(props) {
  const history = useHistory();

  const redirect = (actor_api_redirect) => {
    history.replace("/");
    actor_api_redirect = "m";
    props.allb.all = 1;
    if (actor_api_redirect === "b") {
      props.set_who_logged(1);
      props.allb.all = 1;

      history.push(`/beneficiaryhome/b/home`);
    } else if (actor_api_redirect === "p") {
      props.set_who_logged(2);
      props.allb.all = 2;
      history.push(`/physicianhome/p/home`);
    } else if (actor_api_redirect === "h") {
      props.set_who_logged(3);
      props.allb.all = 3;
      history.push(`/handlerhome/h/home`);
    } else if (actor_api_redirect === "m") {
      props.set_who_logged(4);
      props.allb.all = 4;
      console.log(props.allb.all, "inside m");
      history.push(`/manufacturerhome/m/home`);
    }
  };

  async function Login(event) {
    event.preventDefault();
    console.log("//login");
    const data = new FormData(event.target);
    const formvalue = Object.fromEntries(data.entries());

    console.log("before axios", formvalue);
    var form_value_object = { ...formvalue };
    var api_role = form_value_object.actorselect;
    console.log("Value of a==", api_role);

    // axios.post(`http://localhost:8080/${api_role}/auth/${api_role}signin`, formvalue).then(
    //   function (value) {
    console.log("invalue");
    // console.log("value ==== response axios", value.data);
    // props.loggedin(value.data)
    console.log("after axios fetched");
    redirect(form_value_object.actorselect);
    // },
    // function (error) {
    // console.log("inerror");
    // toast.error('Error'+error,{
    //   // Set to 15sec
    //   position: toast.POSITION.BOTTOM_LEFT, autoClose:15000});
    //   //toast.error(error ,toast.POSITION.BOTTOM_RIGHT,10000 );
    // }
    // );
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
        backgroundColor: "#9b1d20",
        backgroundOrigin: "padding-box",
        backgroundSize: "auto"
      }}
    >
      <ToastContainer />
      <Form onSubmit={Login} enctype="application/json">
        <br />
        <br />
        <FormGroup>
          <Input
            type="loginemail"
            name="email"
            id="loginEmail"
            placeholder="Email"
          />
        </FormGroup>

        <br />
        <br />

        <FormGroup>
          <Input
            type="password"
            name="password"
            id="loginpassword"
            placeholder="Enter Password"
          />
        </FormGroup>
        <br />
        <br />

        <FormGroup>
          <Input type="select" name="actorselect" id="actorselect">
            <option value="m">Manufacturer</option>
            <option value="h">Handler</option>
            <option value="b">Beneficiary</option>
            <option value="p">Physician</option>
          </Input>
        </FormGroup>

        <br />

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

const mapstatetoprops = (state) => {
  return {
    allb: state.TrackUserB
  };
};
const mapdispatchtoprops = (dispatch) => {
  return {
    set_who_logged: (data) => {
      dispatch({ type: "GETWHOISLOGGEDIN", payload: data });
    },
    loggedin: (data) => {
      dispatch({ type: "BLOGIN", payload: data });
    }
  };
};
export default connect(mapstatetoprops, mapdispatchtoprops)(LoginForm);
