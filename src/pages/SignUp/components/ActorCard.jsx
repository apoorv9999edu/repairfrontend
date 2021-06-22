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

function ActorCard(props) {
  async function HandleClick() {
    return <Redirect to={props.to} />;
  }
  console.log(props.to);
  return (
    <div
      style={{
        float: "left",
        border: "thin solid #000000",
        display: "table-cell",
        verticalAlign: "center"
      }}
    >
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <CardDeck>
          <Card style={{}}>
            <CardImg
              style={{
                height: "150px",
                width: "150px",
                display: "block",
                margin: "0 auto"
              }}
              src={props.src}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">{props.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>Some quick example text to buille</CardText>
              <Link to={props.to}>
                <Button onClick={() => HandleClick()}>Sign-Up </Button>
              </Link>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}
export default ActorCard;
