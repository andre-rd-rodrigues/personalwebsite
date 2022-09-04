import { Icon } from "@iconify/react";
import React from "react";
import variables from "assets/styles/_mixins.scss";
import styles from "./servicedisplay.module.scss";
import { fadeInVariant, motion } from "assets/motion/motionVariants";

const ServiceDisplay = ({ service }) => {
  return (
    <motion.div variants={fadeInVariant} className={styles.container}>
      <Icon
        icon={service.icon}
        style={{ fontSize: "30px", color: variables["yellow"] }}
      />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.div>
  );
};

export default ServiceDisplay;
