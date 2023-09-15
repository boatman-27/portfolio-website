import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import FromOceanToPlate from "../assets/projects/FromOceanToPlate.png";
import FishaiModel from "../assets/projects/fishaimodel.jpg"
import FlappyBolBol from "../assets/projects/FlappyBolBol.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FromOceanToPlate}
              isBlog={false}
              title="From Ocean to Plate through Blockchain and Smart Contracts"
              description="My Bachelor's thesis project involved the creation of a dynamic website using React.js for the frontend and the development of essential smart contracts using Solidity. This platform was designed for all participants in the seafood supply chain, like customers, fishermen, processing and distribution companies, and the system owner. Notably, the project encompassed the implementation of three critical smart contracts for managing transactions, licensing, and adding seafood items to the blockchain to be available for purchase by customers after being processed and distributed. Ganache was used to support the Blockchain functionality."
              ghLink="https://github.com/boatman-27/seafood-solidity-react"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FishaiModel}
              isBlog={false}
              title="FishSpecAI: Species Identification with Deep Learning"
              description="FishSpecAI is a deep learning project aimed at automating fish species identification. Using a dataset found on Kaggle, this Python-based endeavor comprises three key components. The first file is dedicated to training and generating the 'model.h5' file. The second file allows users to deploy the trained model, providing immediate species predictions when provided with an image. The third file offers valuable insights by presenting the percentage likelihood of the identified species."
              ghLink="https://github.com/boatman-27/SpeciesGuesser"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlappyBolBol}
              isBlog={false}
              title="Flappy Bolbol"
              description="Flappy BolBol is my personal adaptation of the classic Flappy Bird game, developed using the versatile Unity game engine. This whimsical and engaging game introduces players to a charming bird named BolBol, who takes on the challenging world of endless obstacles. The game mechanics are simple yet addictive: tap to make BolBol flap its wings and navigate through a maze of pipes."
              ghLink="https://github.com/boatman-27/SpeciesGuesser"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects