import React from "react";
import { analyticsClickEvent } from "analytics/utils";
import {
  fadeInVariant,
  homepageDelayVariant
} from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import AppLink from "components/AppLink/AppLink";
import GalleryBackgroundSlider from "components/Gallery/GalleryBackgroundSlider";
import { motion } from "framer-motion";
import { homepage_gallery } from "mocks/data";
import { useTranslation } from "react-i18next";
import styles from "./homepage.module.scss";

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.homepage}>
      <GalleryBackgroundSlider images={homepage_gallery}>
        <div className={styles.title}>
          <AnimatedHeading centerOnSmallScreens>
            <h1>André Rodrigo</h1>
          </AnimatedHeading>
          <motion.div
            variants={homepageDelayVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeInVariant}>
              {t("homepage.subtitle")}
            </motion.p>
            <motion.div
              variants={fadeInVariant}
              onClick={() =>
                analyticsClickEvent(
                  "Portfolio Link",
                  "Portfolio - clicked link"
                )
              }
            >
              <AppLink to="/portfolio" label={t("homepage.cta")} scrollTop />
            </motion.div>
          </motion.div>
        </div>
      </GalleryBackgroundSlider>
    </div>
  );
};

export default Homepage;
