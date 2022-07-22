import AppLink from "components/AppLink/AppLink";
import GalleryBackgroundSlider from "components/Gallery/GalleryBackgroundSlider";
import React from "react";
import styles from "./homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <GalleryBackgroundSlider>
        <div className={styles.title}>
          <h1>André Rodrigues</h1>
          <p>Web developer passionate about minimal design and innovation</p>
          <AppLink to="/works" label="See Works" />
        </div>
      </GalleryBackgroundSlider>
    </div>
  );
};

export default Homepage;
