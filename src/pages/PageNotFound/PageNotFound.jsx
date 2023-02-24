import React from "react";
import { Icon } from "@iconify/react";
import PageContainer from "components/PageContainer/PageContainer";
import { useTranslation } from "react-i18next";
import styles from "./pagenotfound.module.scss";

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <div className={styles.container}>
        <h1>404</h1>
        <h2>{t("404.title")}</h2>
        <p>{t("404.description")}</p>
        <button
          className={styles.backButton}
          onClick={() => window.history.back()}
        >
          <Icon
            icon="heroicons:arrow-long-left-solid"
            style={{ fontSize: "40px" }}
          />
          {t("404.cta")}
        </button>
      </div>
    </PageContainer>
  );
};

export default PageNotFound;
