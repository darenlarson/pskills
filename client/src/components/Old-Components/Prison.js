import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Prison = props => {
  return (
    <Card className="PrisonCard">
      {props.viewingprison ? (
        <div>{props.id}</div>
      ) : (
        <CardBody className="FlexCard">
          <CardTitle className="CardName">{props.name}</CardTitle>
          <CardSubtitle>Available Workers:{props.totalPrisoners}</CardSubtitle>
          <CardText>Location: {props.location}</CardText>
          <Button onClick={() => props.toggleViewing(props.id)} className="Purple">
            View Workers
          </Button>
        </CardBody>
      )}
    </Card>
  );
};

export default Prison;
