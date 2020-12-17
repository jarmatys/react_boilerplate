import React from "react";
import Home from "../layouts/Home";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FileSaver from 'file-saver';

const Second = () => {

  const DownloadFile = () => {
    const URL_DOWNLOAD =
    "https://test.armatys.me/wp-content/uploads/2020/11/hoodies.jpg";
    FileSaver.saveAs(URL_DOWNLOAD);
  };

  return (
    <Home>
      <h2>Miejsce na pobieranie pliku z serwera</h2>
      <Row className="mt-3">
        <Col>
          <Button onClick={() => DownloadFile()} size="lg">
            Pobierz plik
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button as={Link} to="/" variant="success">
            Strona główna
          </Button>
          <Button as={Link} to="/first" variant="warning" className="ml-3">
            Powrót
          </Button>
        </Col>
      </Row>
    </Home>
  );
};

export default Second;
