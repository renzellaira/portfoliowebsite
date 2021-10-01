import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { iconscol1, iconscol2 } from "./SkillsList";

const Skills = () => {
  return (
    <React.Fragment>
      <Container className="skillCont">
        <Row>
          <Col>
            <ul className="icons-list">
              {iconscol1.map((icon, index) => (
                <li key={index + 1}>
                  <i className={icon.icon} />
                  {icon.name}
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <ul className="icons-list">
              {iconscol2.map((icon, index) => (
                <li key={index + 1}>
                  <i className={icon.icon} />
                  {icon.name}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Skills;
