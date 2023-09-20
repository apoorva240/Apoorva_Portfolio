import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Apoorva Vasishtha </span>
            from <span className="purple"> Jaipur, India.</span>
            <br /> I am a final year student pursuing MCA
            at Christ University.
            <br />
            Additionally, I was one core Editors for our Bi-annual Magzine 'INFOBAHN'.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing poems and Stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Giving Openmics
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is a labyrinth of different streets, each street having same point of disembarktion but different journey altogether. "{" "}
          </p>
          <footer className="blockquote-footer">Apoorva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
