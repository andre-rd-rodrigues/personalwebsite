import AppIcon from "components/AppIcon/AppIcon";
import { social_media } from "mocks/data";
import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div id="footer-social-media">
        {social_media.map(({ label, ref }, index) => (
          <AppIcon key={index} href={ref} onClick icon={label} />
        ))}
      </div>
      <div id="footer-copyright">&#169; 2022 by André Rodrigues</div>
    </footer>
  );
};

export default Footer;
