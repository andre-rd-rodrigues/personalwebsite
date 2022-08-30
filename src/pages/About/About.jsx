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
import { HashLink } from "react-router-hash-link";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <AnimatedHeading>
          <h1>Aumenta a visibilidade do teu negócio.</h1>
        </AnimatedHeading>
        <motion.div
          variants={aboutTextDelayVariant}
          initial="hidden"
          animate="visible"
          className={`${styles.about} ${styles.section}`}
        >
          <Row>
            <Col lg={6} md={6} sm={12} className={styles.aboutTextContainer}>
              <motion.h2 variants={fadeInVariant}>SOBRE MIM</motion.h2>
              <motion.p variants={fadeInVariant}>
                Desde o dia em que decidi tornar a minha paixão pela tecnologia
                numa carreira profissional, dedico-me inteiramente ao
                desenvolvimento de projetos digitais e à aquisição de novos
                conhecimentos, de forma a acrescentar valor competitivo na
                criação de soluções digitais. A minha atenção aos detalhes,
                visão criativa do mundo e natureza meticulosa são os principais
                contributos da minha identidade para o desenvolvimento e
                implementação de soluções personalizadas. Ao longo da minha
                carreira desenvolvi projetos para diversos sectores e dedico-me
                essencialmente à criação de websites, apps e branding
                <br />
                <span></span>
                O meu objectivo primordial é de salientar a identidade e
                aumentar a visibilidade da tua marca no mercado digital.
                <br />
                <Link to="/works/category?type=websites">Clica aqui</Link> para
                explorar alguns dos projetos que desenvolvi ao longo da minha
                carreira. Podes sempre visitar a secção dos{" "}
                <HashLink to="/works#testimonials">
                  <i>Comentários</i>
                </HashLink>{" "}
                e ler alguns testemunhos dos que vieram antes de ti 🎯
              </motion.p>

              <div className={styles.educationContainer}>
                <motion.h2
                  variants={fadeInVariant}
                  style={{ marginTop: "30px" }}
                >
                  Formação
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
