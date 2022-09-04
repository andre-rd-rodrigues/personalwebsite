import React from "react";
import {
  fadeInVariant,
  aboutTextDelayVariant
} from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import PageContainer from "components/PageContainer/PageContainer";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./about.module.scss";
import { services } from "mocks/data";
import ServiceDisplay from "components/ServiceDisplay/ServiceDisplay";

const About = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <AnimatedHeading>
          <h1>Aumenta a visibilidade do teu negócio.</h1>
        </AnimatedHeading>

        {/*   Services */}
        <motion.div
          variants={aboutTextDelayVariant}
          initial="hidden"
          animate="visible"
          className={`${styles.services} ${styles.section}`}
        >
          <motion.h2 variants={aboutTextDelayVariant}>SERVIÇOS</motion.h2>
          <Row>
            {services?.main.map((item) => (
              <Col
                sm={12}
                md={6}
                lg={6}
                className="d-flex justify-content-center"
                key={item.id}
              >
                <ServiceDisplay service={item} />
              </Col>
            ))}
          </Row>
          <motion.h2 variants={aboutTextDelayVariant}>SERVIÇOS EXTRA</motion.h2>
          <Row>
            {services?.extra.map((item) => (
              <Col
                sm={12}
                md={6}
                lg={6}
                key={item.id}
                className={`${styles.serviceCol}`}
              >
                <ServiceDisplay service={item} />
              </Col>
            ))}
          </Row>
        </motion.div>

        {/*   About me */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          className={`${styles.about} ${styles.section}`}
        >
          <Row>
            <Col lg={6} md={6} sm={12} className={styles.aboutTextContainer}>
              <h2 variants={fadeInVariant}>SOBRE MIM</h2>
              <p variants={fadeInVariant}>
                Desde o dia em que decidi tornar a minha paixão pela tecnologia
                numa carreira profissional, dedico-me inteiramente ao
                desenvolvimento de projetos digitais e à aquisição de novos
                conhecimentos, de forma a acrescentar valor competitivo na
                criação de soluções digitais. A minha atenção aos detalhes,
                visão criativa do mundo e natureza meticulosa são os principais
                contributos da minha identidade para o desenvolvimento e
                implementação de soluções personalizadas. Ao longo da minha
                carreira desenvolvi projetos para diversos sectores e dedico-me
                essencialmente à criação de <b>websites, apps e branding</b>.
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
                e ler alguns testemunhos daqueles que vieram antes de ti! 🎯
              </p>

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
              <div className={styles.profileImage} />
            </Col>
          </Row>
        </motion.div>
      </div>
    </PageContainer>
  );
};

export default About;
