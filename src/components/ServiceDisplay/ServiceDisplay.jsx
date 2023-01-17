import React from "react";
import { Icon } from "@iconify/react";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import variables from "assets/styles/_mixins.scss";
import styles from "./servicedisplay.module.scss";
import { useTranslation } from "react-i18next";

const ServiceDisplay = ({ service }) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeInVariant} className={styles.container}>
      <Icon
        icon={service.icon}
        style={{ fontSize: "30px", color: variables["yellow"] }}
      />
      <h3>{t(service.title)}</h3>
      <p>{t(service.description)}</p>
    </motion.div>
  );
};

export default ServiceDisplay;
