import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import FromOceanToPlate from "../assets/projects/FromOceanToPlate.png";
import FishaiModel from "../assets/projects/fishaimodel.jpg"
import FlappyBolBol from "../assets/projects/FlappyBolBol.png"
import Unit_conv from '../assets/projects/unit-converter.jpg'
import fweight from '../assets/projects/FishWeight.png'

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
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Unit_conv}
              isBlog={false}
              title="Unit Converter"
              description="Introducing the Unit Conversion Program, a versatile Python tool developed for seamless and accurate conversion across various unit categories. Built with a clean and modular code structure, this program leverages the power of the Pandas library for efficient handling of conversion factors. Covering a wide range of units, including area, data transfer rate, energy, frequency, fuel economy, length, mass, plane angle, pressure, speed, temperature, time, and volume, the program provides an intuitive user interface for selecting specific units and entering values. Special attention has been given to temperature conversion, offering dynamic calculations for Celsius, Fahrenheit, and Kelvin units. The program's use of Pandas ensures precise and reliable results, making it a valuable tool for students and professionals alike."
              ghLink="https://github.com/boatman-27/Unit_Converter"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fweight}
              isBlog={false}
              title="Fish Recognition and Weight Estimation"
              description="The Fish Species Detection and Weight Estimation project is a comprehensive Python-based solution that leverages the power of YOLOv8 for accurate fish species identification and subsequently estimates the weight of the detected fish. This project seamlessly integrates with a Django web application, providing users with an intuitive and user-friendly interface to interact with the system."
              ghLink="https://github.com/boatman-27/Fish_Recognition_and_weight"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects