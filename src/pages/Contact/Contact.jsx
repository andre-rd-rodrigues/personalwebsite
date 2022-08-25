import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import styles from "./contact.module.scss";
import PageContainer from "components/PageContainer/PageContainer";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import { motion } from "framer-motion";

const Contact = () => {
  const spacing = {
    title: 6,
    others: 3,
    small: 12
  };

  return (
    <PageContainer>
      <div className={styles.container}>
        <Row>
          <Col
            className={styles.col}
            sm={spacing.small}
            md={spacing.title}
            lg={spacing.title}
          >
            <div>
              <AnimatedHeading>
                <h1>Got a project?</h1>
              </AnimatedHeading>
              <AnimatedHeading>
                <h1>Let's talk!</h1>
              </AnimatedHeading>
            </div>
          </Col>
          <Col
            className={styles.col}
            sm={spacing.small}
            md={spacing.others}
            lg={spacing.others}
          >
            <motion.div
              animate="visible"
              initial="hidden"
              variants={{
                hidden: {
                  opacity: 0
                },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                    delay: 1.3
                  }
                }
              }}
            >
              <h3>Start a conversation</h3>
              <a
                id="contact_email"
                href="mailto:andre.rodrigo@itstudios.eu"
                target="_blank"
                rel="noreferrer"
              >
                andre.rodrigo@itstudios.eu
              </a>
            </motion.div>
          </Col>
          <Col
            className={styles.col}
            sm={spacing.small}
            md={spacing.others}
            lg={spacing.others}
          >
            <motion.div
              animate="visible"
              initial="hidden"
              variants={{
                hidden: {
                  opacity: 0
                },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                    delay: 1.7
                  }
                }
              }}
              className={styles.social}
            >
              <h3>Lets' get social</h3>
              <div>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/andr%C3%A9-rodrigues-4b4a9b188/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon
                        icon="akar-icons:linkedin-box-fill"
                        className={styles.social_icon}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/andre.creativedesign/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon
                        icon="akar-icons:instagram-fill"
                        className={styles.social_icon}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" rel="noreferrer">
                      <Icon
                        icon="akar-icons:facebook-fill"
                        className={styles.social_icon}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default Contact;
