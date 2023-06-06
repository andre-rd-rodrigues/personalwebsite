import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { motion, workPageHeaderContent } from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import PageContainer from "components/PageContainer/PageContainer";
import ProjectDisplay from "components/ProjectDisplay/ProjectDisplay";
import { categories as categories_data } from "data";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./portfoliocategorypage.module.scss";

const PortfolioCategoryPage = () => {
  const [data, setData] = useState(undefined);
  const [nextCategory, setNextCategory] = useState(undefined);
  const [searchParams] = useSearchParams();

  const { t } = useTranslation();

  //Category
  const categoryType = searchParams.get("type");
  const categoryList = ["websites", "apps"];

  const getNextCategory = () => {
    const currentCategoryIndex = categoryList.indexOf(categoryType);

    if (currentCategoryIndex === 1) {
      return setNextCategory(categoryList[0]);
    }
    setNextCategory(categoryList[currentCategoryIndex + 1]);
  };

  //Lifecycle
  useEffect(() => {
    if (categoryType) {
      setData(categories_data[categoryType]);
    }
  }, [categoryType, searchParams]);

  useEffect(() => {
    if (categoryList) {
      getNextCategory();
    }
  }, [categoryList]);

  if (!data) return <p>Loading...</p>;

  return (
    <PageContainer className={styles.container}>
      <header className={styles.header}>
        <AnimatedHeading>
          <h1>{data?.title}</h1>
        </AnimatedHeading>
        <motion.p
          variants={workPageHeaderContent}
          initial="hidden"
          animate="visible"
        >
          {t(data?.description)}
        </motion.p>
      </header>

      <motion.div
        variants={workPageHeaderContent}
        initial="hidden"
        animate="visible"
        className={styles.showCaseContainer}
      >
        {data.projects.map(({ src, label, id, ref }) => (
          <ProjectDisplay href={ref} src={src} label={label} key={id} />
        ))}
      </motion.div>

      {/* Next section button */}
      <NextPageArrowButton nextCategory={nextCategory} />
    </PageContainer>
  );
};

export default PortfolioCategoryPage;

const NextPageArrowButton = ({ nextCategory }) => (
  <Link
    to={`/portfolio/category?type=${nextCategory}`}
    className={styles.nextCategoryContainer}
  >
    <p>NEXT</p>
    <p>{nextCategory}</p>
    <Icon icon="bi:arrow-right-short" className={styles.arrow} />
  </Link>
);
