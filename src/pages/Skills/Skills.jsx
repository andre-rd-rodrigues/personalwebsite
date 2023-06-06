import { fadeInVariant, motion } from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import DownloadCVButton from "components/DownloadCVButton/DownloadCVButton";
import PageContainer from "components/PageContainer/PageContainer";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./skills.module.scss";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <PageContainer className={styles.container}>
      <AnimatedHeading>
        <h1>Skills</h1>
      </AnimatedHeading>
      <Row className={styles.section}>
        <Col sm={12} md={12} lg={6} className={styles.imgCol}>
          <motion.img
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            src={`${process.env.PUBLIC_URL}/images/skills/development.jpg`}
            alt="Development experience"
            className={styles.img}
          />
        </Col>
        <Col sm={12} md={12} lg={6} className={styles.developerSkillsCol}>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
          >
            <h2>Development</h2>
            <ul>
              <li>
                <b>Master the Basics:</b> HTML5, CSS3, Javascript, SASS, jQuery
              </li>
              <li>
                <b>Deep knowledge in Responsive Layouts:</b> Bootstrap,
                React-Bootstrap, Tailwind-CSS, Media queries
              </li>
              <li>
                <b>Front-End Frameworks:</b> React.js, React Native, Next.js
              </li>
              <li>
                <b>SEO & Analytics:</b> SEO optimization, Google Analytics,
                Insights
              </li>
              <li>
                <b>Back-end:</b> Node.js, RESTful APIs, GraphQL, MongoDB,
                Mongoose, PostgreSQL
              </li>
              <li>
                <b>DevOps:</b> Github actions, Docker, Pipelines, yml
              </li>
              <li>
                <b>Testing:</b> Jest, Enzyme, Cypress, React Testing Library
              </li>
              <li>
                <b>Others:</b> Version control (Git/Github), Python, Webpack and
                others
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            className={styles.webDesignContainer}
          >
            <h2>Web design</h2>
            <ul>
              <li>Sketch</li>
              <li>Figma</li>
              <li>Affinity Designer</li>
              <li>Affinity Publisher</li>
              <li>Adobe Illustrator</li>
              <li>UX, UI, Web, Mobile, Apps, Logos</li>
            </ul>
          </motion.div>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12} lg={6} className={styles.softSkillsCol}>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
          >
            <h2>Soft skills</h2>
            <p>{t("skills_page.soft_skills")}</p>
          </motion.div>
        </Col>
        <Col sm={12} md={12} lg={6} className={styles.softSkillsImgCol}>
          <motion.img
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            src={`${process.env.PUBLIC_URL}/images/skills/soft.jpeg`}
            alt="Development experience"
            className={styles.img}
          />
        </Col>
      </Row>

      <DownloadCVButton className={styles.downloadCVContainer} />
    </PageContainer>
  );
};

export default Skills;
