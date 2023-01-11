import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';


export const Projects = () => {

  const projects = [
    {
      title: "Smart Attendance System using Face Recognition",
      description: "Developed a website where students can log in/log out and check their day/month‑wise attendance.",
      imgUrl: projImg1,
    },
    {
      title: "Ekart Management System",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Akrivia Hcm",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Student Management System",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Online Food Delivery System",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Gym Management System",
      description: "Design & Development",
      imgUrl: projImg6,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>While books and lectures throughout graduation served as gateways into the realm of computers, electronics, and communications, however, the experiences that turned a mere fascination with technology into structured actions and plans for the future were the practical exposure I gained through numerous projects in college.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Loading...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>New Projects are coming soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
