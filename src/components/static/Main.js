import React from "react";
import Home from "../layouts/Home";
import { Jumbotron } from "react-bootstrap";

const NotFound = () => {
  return (
    <Home>
      <Jumbotron>
        <h1>Witaj, na stronie głównej!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
    </Home>
  );
};

export default NotFound;
