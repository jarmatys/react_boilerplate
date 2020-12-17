import React from "react";
import { Container } from "react-bootstrap";
import Header from "../shared/Header";

const Home = ({ title, children }) => {
  return (
    <>
      <Header />
      <Container className="mt-3 mb-3">{children}</Container>
    </>
  );
};

export default Home;
