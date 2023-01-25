import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiAtom,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

import { AiOutlineStock } from "react-icons/ai"

function Interests() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineStock />
      </Col>
      {/*<p><small>This is some smaller text.</small></p>*/}
      <Col xs={4} md={2} className="tech-icons">
        <SiAtom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Interests;
