import { fadeInVariant, motion } from "assets/motion/motionVariants";
import { experienceTimeline } from "data";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LINKEDIN_URL } from "utils/constants";
import styles from "./experiencetimeline.module.scss";
import TimelineIcon from "./TimelineIcon";

const ExperienceTimeline = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.container}
    >
      <h2>{t("about_page.experience.title")}</h2>
      <VerticalTimeline>
        {experienceTimeline.map(
          ({ company, duration, role, experience, img_url }) => (
            <VerticalTimelineElement
              key={company}
              className="vertical-timeline-element--work"
              date={duration}
              contentStyle={{
                background: "none",
                borderRadius: "0",
                cursor: "pointer"
              }}
              contentArrowStyle={{
                borderRight: "none"
              }}
              dateClassName={styles.date}
              iconStyle={{ overflow: "hidden" }}
              icon={<TimelineIcon src={img_url} />}
              onTimelineElementClick={() => window.open(LINKEDIN_URL, "_blank")}
            >
              <h4>{company}</h4>
              <h5>{role}</h5>
              <p>{t(experience)}</p>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </motion.div>
  );
};

export default ExperienceTimeline;
