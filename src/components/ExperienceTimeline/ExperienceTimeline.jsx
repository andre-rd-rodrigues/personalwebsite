import React from "react";
import styles from "./experiencetimeline.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { motion, fadeInVariant } from "assets/motion/motionVariants";
import { useTranslation } from "react-i18next";
import colors from "assets/styles/_mixins.scss";
import "react-vertical-timeline-component/style.min.css";
import { experienceTimeline } from "data";
import FeatherIcon from "feather-icons-react";
import TimelineIcon from "./TimelineIcon";
const ExperienceTimeline = () => {
  const { t } = useTranslation();

  const primaryColor = colors.yellow;

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
              contentStyle={{ background: "none" }}
              contentArrowStyle={{ borderRight: `7px solid white` }}
              iconStyle={{ overflow: "hidden" }}
              icon={<TimelineIcon src={img_url} />}
            >
              <h4>{company}</h4>
              <h5>{role}</h5>
              <p>{experience}</p>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </motion.div>
  );
};

export default ExperienceTimeline;
