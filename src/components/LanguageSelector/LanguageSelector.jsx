import AppIcon from "components/AppIcon/AppIcon";
import { useTranslation } from "react-i18next";
import styles from "./language.module.scss";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className={styles.container}>
      <AppIcon icon="globe" />
      <select onChange={handleChangeLanguage} value={i18n.language}>
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
