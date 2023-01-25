import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have been doing science for many years now. For the most part,
              I sit in front of a computer and analyze or simulate stuff.️
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              {/*My field of Interest's are building new &nbsp;*/}
              {/*<i>*/}
              {/*  <b className="purple">Web Technologies and Products </b> and*/}
              {/*  also in areas related to{" "}*/}
              {/*  <b className="purple">*/}
              {/*    Deep Learning and Natural Language Processing.*/}
              {/*  </b>*/}
              {/*</i>*/}
              <i>
                Statistics, Supernovae, Dark Matter, Machine Learning, Visualisation,
                Entrepreneurship, Financial Technologies.
              </i>
              <br />
              I also like to simplify and automate things! I believe that explaining things in a level that anyone can
              understand is a crucial aspect.
              <br />
              Whenever possible, I also try to develop interactive tools using dash, heroku, and node!
              {/*with <b className="purple">Node.js</b> and*/}
              {/*<i>*/}
              {/*  <b className="purple">*/}
              {/*    {" "}*/}
              {/*    Modern Javascript Library and Frameworks*/}
              {/*  </b>*/}
              {/*</i>*/}
              {/*&nbsp; like*/}
              {/*<i>*/}
              {/*  <b className="purple"> React.js and Next.js</b>*/}
              {/*</i>*/}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KaraMelih"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://twitter.com/Soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour  home-social-icons"*/}
              {/*  >*/}
              {/*    <AiOutlineTwitter />*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/karamelih/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mlh-kara"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>

          This page was created by modifying the beautiful app on https://soumyajit.vercel.app/
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
