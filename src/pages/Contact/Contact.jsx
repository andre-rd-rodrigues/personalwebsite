import React from "react";
import { Icon } from "@iconify/react";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import PageContainer from "components/PageContainer/PageContainer";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./contact.module.scss";

const Contact = () => {
  const { t } = useTranslation();

  const spacing = {
    title: 6,
    others: 3,
    small: 12
  };

  return (
    <PageContainer className={styles.pageContainer}>
      <div className={styles.container}>
        <Row>
          <Col
            className={styles.col}
            sm={spacing.small}
            md={spacing.title}
            lg={spacing.title}
          >
            <div>
              <AnimatedHeading centerOnSmallScreens>
                <h1>{t("contacts_page.title")}</h1>
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
              <h3>{t("contacts_page.email")}</h3>
              <a
                id="contact_email"
                href="mailto:andrerodrigo.web@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                andreptrodrigo@gmail.com
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
              <h3>{t("contacts_page.social")}</h3>
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
                    <a
                      href="https://www.facebook.com/profile.php?id=100009559637125"
                      target="_blank"
                      rel="noreferrer"
                    >
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
