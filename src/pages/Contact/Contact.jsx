import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import styles from "./contact.module.scss";

const Contact = () => {
  const spacing = {
    title: 6,
    others: 3,
    small: 12
  };

  return (
    <div className={styles.container}>
      <Row>
        <Col
          className={styles.col}
          sm={spacing.small}
          md={spacing.title}
          lg={spacing.title}
        >
          <div>
            <h1>
              Got a project?
              <br />
              Let's talk!
            </h1>
          </div>
        </Col>
        <Col
          className={styles.col}
          sm={spacing.small}
          md={spacing.others}
          lg={spacing.others}
        >
          <div>
            <h3>Start a conversation</h3>
            <a
              id="contact_email"
              href="mailto:andre.rodrigo@itstudios.eu"
              target="_blank"
              rel="noreferrer"
            >
              andre.rodrigo@itstudios.eu
            </a>
          </div>
        </Col>
        <Col
          className={styles.col}
          sm={spacing.small}
          md={spacing.others}
          lg={spacing.others}
        >
          <div className={styles.social}>
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
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
