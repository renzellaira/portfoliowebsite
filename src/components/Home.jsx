import React from "react";
import Background from "../assets/images/hero-image.jpeg";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Typing from "react-typing-animation";
import { FaAngleDoubleDown } from "react-icons/fa";

function Home() {
  return (
    <Container
      fluid
      className="hero-image"
      style={{ backgroundImage: `url(${Background})` }}
      id="home"
    >
      <Header />
      <div className="center">
        <h1 className="intro-text">Hey! I'm Renzell</h1>

        <h3>
          <Typing speed={50}>
            {" "}
            a <em className="title-text">Full Stack Web Developer.</em>{" "}
          </Typing>
          <i class="fas fa-angle-double-down"></i>
        </h3>
      </div>
      <div className="down-icon">
        <a href="#skills">
          <FaAngleDoubleDown className="bounce" style={{ color: "white" }} />
        </a>
      </div>
    </Container>
  );
}

export default Home;
