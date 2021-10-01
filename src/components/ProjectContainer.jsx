import React from "react";
import { worklist } from "./WorkList";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const Project = () => {
  return (
    <React.Fragment>
      <Row className="work-row">
        {worklist.map((project, index) => (
          <Col lg={2} md={6} xs={12} className="mt-4">
            <Card
              className="work-card"
              bg="dark"
              border="light"
              text="white"
              key={index + 1}
            >
              <Card.Img
                variant="top"
                src={project.img}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  <div>
                    {project.tech.map((tech, index) => (
                      <button
                        index={index + 1}
                        key={index}
                        className="tech-btn"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a className="link " href={project.codelink}>
                  Source code{" "}
                </a>
                <a className="link live" href={project.live}>
                  Live
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Project;
