import { PopupButton } from "@typeform/embed-react";
import { containerVariant, motion } from "assets/motion/motionVariants";
import { useTranslation } from "react-i18next";
import styles from "./contactbanner.module.scss";

const ContactBanner = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={styles.container}
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h4>{t("contacts.banner.title")}</h4>
      <PopupButton id="wTr5ba0e" size={60} className={styles.button}>
        {t("contacts.banner.cta")}
      </PopupButton>
    </motion.div>
  );
};

export default ContactBanner;
