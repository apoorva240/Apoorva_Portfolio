import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/osm.jpeg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/vp.jpg";
import chatify from "../../Assets/Projects/PDP.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/pollution detection.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Plant Disease Prediction"
              description="Plant disease prediction using AI and ML uses artificial intelligence and machine learning techniques to predict plant diseases accurately. "
              ghLink="https://github.com/apoorva240/plant_disease"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ONEpurity"
              description="Pollution Detection using real time imaging using model of TensorFlow(MobilenetV2)"
              ghLink="https://github.com/apoorva240/one-Purity"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="University Visitor Pass"
              description="A visitor management system (VMS) is an essential tool for any college that is concerned with the safety and security of its students, faculty, and staff. ChristVistor App is a web application developed using HTML, CSS, Javascript with nodeJs, Data exchanage between the client and server is carried out using hbs web template."
              ghLink="https://github.com/apoorva240/UniversityVisitorPass"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Online Shopping Mart"
              description="The OnlineShopping Mart is a web based platform that facilitates online buying and selling of various products. Technology used are - JSP, servlets, HTML, CSS, Javascript, Bootstrap, Mysql."
              ghLink="https://github.com/apoorva240/OnlineShoppingMart"
              demoLink=""
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
