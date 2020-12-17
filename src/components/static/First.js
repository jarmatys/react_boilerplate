import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../layouts/Home";

const First = () => {
  return (
    <Home>
      <h2>Ekran nr 1 pobierany z serwera</h2>
      <Row className="mt-3">
        <Col>
          <Button as={Link} to="/" variant="success">
            Strona główna
          </Button>  
        </Col>
      </Row>
    </Home>
  );
};

export default First;
