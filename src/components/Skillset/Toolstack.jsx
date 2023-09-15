import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiUnity,
  SiUnrealengine,
  SiMicrosoftoffice,
  SiArduino,
  SiBlender,
  SiXampp
} from "react-icons/si";

const Toolstack = () => {

  

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Unity">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Unreal Engine">
        <SiUnrealengine />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MS Office Suite">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Arduino IDE">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Blender">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="XAMPP">
        <SiXampp />
      </Col>
    </Row>
  );
}

export default Toolstack;
