import PageContainer from "components/PageContainer/PageContainer";
import React from "react";
import { Col, Row } from "react-bootstrap";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import { motion } from "framer-motion";
import styles from "./about.module.scss";
import {
  fadeInVariant,
  aboutTextDelayVariant
} from "assets/motion/motionVariants";

const About = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <AnimatedHeading>
          <h1>
            André Rodrigues is a creative web developer based in Portugal.
          </h1>
        </AnimatedHeading>
        <motion.div
          variants={aboutTextDelayVariant}
          initial="hidden"
          animate="visible"
          className={`${styles.about} ${styles.section}`}
        >
          <Row>
            <Col lg={6} md={6} sm={12} className={styles.aboutTextContainer}>
              <motion.h2 variants={fadeInVariant}>ABOUT ME</motion.h2>
              <motion.p variants={fadeInVariant}>
                Since turning my passion into a career, I've been continuously
                creating and delivering projects for almost 4 years. My eye for
                detail, creative view of the world, and meticulous nature help
                me make a difference and deliver unique and personalized
                solutions. I've created and delivered solutions for various
                types of projects, from small businesses to independent workers,
                I'm here to help you bring your website vision to life so you
                can free up your time to do what you do best - running your
                awesome business, of course!
                <br />
                <span></span>
                When I'm not busy making website dreams come true, you can find
                me relaxing at home in Lisbon, with my partner or unique
                friends, laughing with silly jokes, taking a walk, making
                something fun, or eating an amazing croissant accompained by
                jazz oldies.
              </motion.p>
              <div className={styles.educationContainer}>
                <motion.h2
                  variants={fadeInVariant}
                  style={{ marginTop: "30px" }}
                >
                  Education
                </motion.h2>
                <motion.ul variants={fadeInVariant}>
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
                </motion.ul>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className={styles.profileImageContainer}>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1.2,
                      delay: 3.7
                    }
                  }
                }}
                className={styles.profileImage}
              />
            </Col>
          </Row>
        </motion.div>
      </div>
    </PageContainer>
  );
};

export default About;
