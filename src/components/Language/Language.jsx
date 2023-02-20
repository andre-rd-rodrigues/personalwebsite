import AppIcon from "components/AppIcon/AppIcon";
import { useTranslation } from "react-i18next";
import styles from "./language.module.scss";

const Language = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className={styles.container}>
      <AppIcon icon="globe" />
      <select onChange={handleChangeLanguage}>
        <option value="pt">Português</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default Language;
