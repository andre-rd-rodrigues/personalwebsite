import profile from "assets/images/profile.png";
import { motion, fadeInVariant } from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import ExperienceTimeline from "components/ExperienceTimeline/ExperienceTimeline";
import PageContainer from "components/PageContainer/PageContainer";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./about.module.scss";
import TechStack from "components/TechStack/TechStack";
import ContactBanner from "components/ContactBanner/ContactBanner";

const About = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <div className={styles.container}>
        <AnimatedHeading>
          <h1>{t("about_page.title")}</h1>
        </AnimatedHeading>
        {/*   About me */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          className={`${styles.about} ${styles.section}`}
        >
          <Row>
            <Col lg={6} md={6} sm={12} className={styles.aboutTextContainer}>
              <div>
                <h2 variants={fadeInVariant}>
                  {t("about_page.about_me.title")}
                </h2>
                <p variants={fadeInVariant}>
                  {t("about_page.about_me.description")} 🎯
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className={styles.profileImageContainer}>
              <img alt="profile_picture" src={profile} loading="lazy" />
            </Col>
          </Row>

          {/* Experience */}
          <div className={styles.section}>
            <ExperienceTimeline />
          </div>

          {/* Tech stack */}
          <div className={styles.section}>
            <TechStack />
          </div>
        </motion.div>
        <ContactBanner />
      </div>
    </PageContainer>
  );
};

export default About;
