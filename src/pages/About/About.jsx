import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>André Rodrigues is a creative web developer based in Portugal.</h1>
      <div className={`${styles.about} ${styles.section}`}>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-end">
            <h2>ABOUT ME</h2>
            <p>
              Since turning my passion into a career, I've been continuously
              creating and delivering projects for almost 4 years. My eye for
              detail, creative view of the world, and meticulous nature help me
              make a difference and deliver unique and personalized solutions.
              I've created and delivered solutions for various types of
              projects, from small businesses to independent workers, I'm here
              to help you bring your website vision to life so you can free up
              your time to do what you do best - running your awesome business,
              of course!
              <br />
              <span></span>
              When I'm not busy making website dreams come true, you can find me
              relaxing at home in Lisbon, with my partner or unique friends,
              laughing with silly jokes, taking a walk, making something fun, or
              eating an amazing croissant accompained by jazz oldies.
            </p>
            <div className={styles.educationContainer}>
              <h2 style={{ marginTop: "30px" }}>Education</h2>
              <ul>
                <li>
                  <a href="img/docs/c_frontend.png" download="">
                    Front-End Libraries Certification
                  </a>
                </li>
                <li>
                  <a href="img/docs/c_backend.png" download="">
                    Back-End Development and APIs Certification
                  </a>
                </li>
                <li>
                  <a href="img/docs/c_algorithms.png" download="">
                    Algorithms and Data Structures Certification
                  </a>
                </li>
                <li>
                  <a href="img/docs/c_responsive.png" download="">
                    Responsive Web Design Certification
                  </a>
                </li>
                <li>Design Thinking Certification</li>
                <li>UX/UI Fundamentals Certification</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className={styles.profileImage} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
