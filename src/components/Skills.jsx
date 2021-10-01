import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import skills from "../assets/images/avatar.svg";
import ImageContainer from "./ImageContainer";

function Skills() {
  return (
    <Container fluid className="skills" id="skills">
      <h1 className="section-header"> My Skills </h1>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <img src={skills} alt="avatar" className="avatar-img" />
        </Col>
        <Col className="Skill-text">
          <ImageContainer className="skillCont" />
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
