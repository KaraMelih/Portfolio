import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiLinux,
  SiNumpy,
  SiHeroku,
  SiPycharm,
  SiPandas,
  SiLatex,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title={"Python"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <DiGit title={"GitHub"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm title={"Pycharm"} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex title={"LaTeX"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy title={"Numpy"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas title={"Pandas"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title={"Linux"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title={"React"}/>
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <SiHeroku title={"Heroku"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title={"Mongodb"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel title={"Microsoft Excel"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint title={"Microsoft PowerPoint"}/>
      </Col>
    </Row>
  );
}

export default Techstack;
