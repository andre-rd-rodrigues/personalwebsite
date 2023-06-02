import { motion, fadeInVariant } from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import PageContainer from "components/PageContainer/PageContainer";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./about.module.scss";
import profile from "assets/images/profile.png";
import ExperienceTimeline from "components/ExperienceTimeline/ExperienceTimeline";

const About = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <div className={styles.container}>
        <AnimatedHeading>
          <h1>{t("about_page.title")}</h1>
        </AnimatedHeading>
        <ExperienceTimeline />
        {/*   About me */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          className={`${styles.about} ${styles.section}`}
        >
          <Row>
            <Col lg={6} md={6} sm={12} className={styles.aboutTextContainer}>
              <h2 variants={fadeInVariant}>{t("about_page.about_me.title")}</h2>
              <p variants={fadeInVariant}>
                {t("about_page.about_me.description")} 🎯
              </p>

              {/* Experience */}
              <div className={styles.section}>
                <motion.h2
                  variants={fadeInVariant}
                  style={{ marginTop: "30px" }}
                >
                  {t("about_page.experience.title")}
                </motion.h2>
                <motion.ul variants={fadeInVariant}>
                  <li>{t("about_page.experience.web_basics")}</li>
                  <li>{t("about_page.experience.web_advanced")}</li>
                  <li>{t("about_page.experience.business")}</li>
                  <li>{t("about_page.experience.arquitecture")}</li>
                  <li>{t("about_page.experience.seo")}</li>
                  <li>{t("about_page.experience.analytics")}</li>
                  <li>{t("about_page.experience.responsive")}</li>
                  <li>{t("about_page.experience.testing")}</li>
                </motion.ul>
              </div>

              {/* Education */}
              <div className={styles.educationContainer}>
                <motion.h2
                  variants={fadeInVariant}
                  style={{ marginTop: "30px" }}
                >
                  {t("about_page.education")}
                </motion.h2>
                <motion.ul variants={fadeInVariant}>
                  <li>
                    <a href="img/docs/c_frontend.png" download="">
                      JavaScript Algorithms and Data Structures
                    </a>
                  </li>
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
                  <li>The Complete Node.js Course | Code with Mosh</li>
                  <li>The Ultimate Redux Course | Code with Mosh</li>
                  <li>The Ultimate Docker Course | Code with Mosh</li>
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
              <img
                alt="profile_picture"
                src={profile}
                className={styles.profileImage}
                loading="lazy"
              />
            </Col>
          </Row>
        </motion.div>
      </div>
    </PageContainer>
  );
};

export default About;
