import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Help = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Prison Skills Inc.</h1>
        <p className="lead">
          Prison Skills is here to help. Please contact us at: (888) 000-1231
        </p>
        <hr className="my-2" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu
          nunc, pellentesque sit amet nisl vel, sollicitudin consectetur libero.
          Morbi posuere sem vitae vestibulum consectetur. In scelerisque nisi eu
          elementum finibus. Vivamus volutpat tincidunt tempor. Phasellus
          convallis tellus diam, id tincidunt velit laoreet ut. Etiam eu
          accumsan diam. Morbi vestibulum sodales sollicitudin. Phasellus lacus
          metus, mollis non dapibus vel, sagittis vitae dolor. Praesent tellus
          enim, pharetra vel nibh eget, suscipit placerat purus. Donec vel erat
          enim. Vivamus nec viverra tortor. Integer porta varius eleifend. Ut
          nec purus dolor.{" "}
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Help;
