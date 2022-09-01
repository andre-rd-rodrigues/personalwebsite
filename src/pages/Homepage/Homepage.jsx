import React from "react";
import { useEffect } from "react";
import {
  fadeInVariant,
  homepageDelayVariant
} from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import AppLink from "components/AppLink/AppLink";
import GalleryBackgroundSlider from "components/Gallery/GalleryBackgroundSlider";
import { motion } from "framer-motion";
import { homepage_gallery } from "mocks/data";
import styles from "./homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <GalleryBackgroundSlider images={homepage_gallery}>
        <div className={styles.title}>
          <AnimatedHeading centerOnSmallScreens>
            <h1>André Rodrigues</h1>
          </AnimatedHeading>
          <motion.div
            variants={homepageDelayVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeInVariant}>
              Produção de websites, apps e conteúdo digital
            </motion.p>
            <motion.div variants={fadeInVariant}>
              <AppLink to="/works" label="portfolio" scrollTop />
            </motion.div>
          </motion.div>
        </div>
      </GalleryBackgroundSlider>
    </div>
  );
};

export default Homepage;
