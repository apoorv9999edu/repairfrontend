import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardDeck,
  Button
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";

function GenerateHVMCID() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "center",
        Margin: "400px",
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
        backgroundColor: "#ffc95c",
        backgroundOrigin: "padding-box",
        backgroundSize: "auto",
        borderBottomColor: "black",
        boxSizing: "border-box",
        color: "rgb(255, 255, 255)",
        marginTop: "100px"
      }}
    >
      {" "}
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.
      {/* <CardDeck>
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "888px",
            height: "250px"
          }}
        >
          <CardBody>
            <CardTitle tag="h5">srfhssrtysrt</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              rty
            </CardSubtitle>
            <CardText>Some quick rtyrty text to buille</CardText>

            <Button>Sign-Up </Button>
          </CardBody>
        </Card>
      </CardDeck> */}
    </div>
  );
}
export default GenerateHVMCID;
