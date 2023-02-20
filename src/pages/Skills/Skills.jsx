import soft from "assets/images/soft.jpeg";
import work from "assets/images/work.jpeg";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
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
          <img src={work} alt="Development experience" className={styles.img} />
        </Col>
        <Col sm={12} md={12} lg={6} className={styles.developerSkillsCol}>
          <div>
            <h2>Development</h2>
            <ul>
              <li>
                Master the Basics - <b>HTML5, CSS3, ES6, LESS, SASS, jQuery</b>
              </li>
              <li>
                Deep knowledge in Responsive Layouts -
                <b>Bootstrap, React-Bootstrap, Tailwind-CSS, Media queries</b>
              </li>
              <li>
                Front-End Libraries - <b>React.js, React Native</b>
              </li>
              <li>
                Back-end -
                <b>Node.js, RESTful APIs, GraphQL, MongoDB, Mongoose</b>
              </li>
              <li>
                Infrastructure - <b>Pipelines, yml, Github actions, Docker</b>
              </li>
              <li>
                Testing - <b>Jest, Enzyme, React Testing Library</b>
              </li>
              <li>
                Others -
                <b>
                  Next, Version control (Git/Github), Python, Webpack and others
                </b>
              </li>
            </ul>
          </div>
          <div className={styles.webDesignContainer}>
            <h2>Web design</h2>
            <ul>
              <li>Sketch</li>
              <li>Figma</li>
              <li>Affinity Designer</li>
              <li>Affinity Publisher</li>
              <li>Adobe Illustrator</li>
              <li>UX, UI, Web, Mobile, Apps, Logos</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12} lg={6} className={styles.softSkillsCol}>
          <div>
            <h2>Soft skills</h2>
            <p>{t("skills_page.soft_skills")}</p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6} className={styles.softSkillsImgCol}>
          <img src={soft} alt="Development experience" className={styles.img} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Skills;
