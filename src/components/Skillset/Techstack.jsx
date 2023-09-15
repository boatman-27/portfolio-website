import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiWeb3Dotjs,
  SiHtml5,
  SiSolidity,
  SiCplusplus,
  SiPython,
  SiFlutter,
  SiCsswizardry,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Solidity">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="FLutter">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="web3.js">
        <SiWeb3Dotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <SiCsswizardry />
      </Col>
    </Row>
  );
}

export default Techstack;
