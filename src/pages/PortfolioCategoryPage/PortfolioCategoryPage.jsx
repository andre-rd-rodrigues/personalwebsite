import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { motion, workPageHeaderContent } from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import ProjectDisplay from "components/ProjectDisplay/ProjectDisplay";
import Scroll from "components/Scroll/Scroll";
import { categories as categories_data } from "data";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./portfoliocategorypage.module.scss";

const PortfolioCategoryPage = () => {
  const [data, setData] = useState(undefined);
  const [nextCategory, setNextCategory] = useState(undefined);
  const [searchParams] = useSearchParams();
  const containerRef = useRef();

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

      //Scroll left
      containerRef.current.scrollLeft = -200;
    }
  }, [categoryType, searchParams]);

  useEffect(() => {
    if (categoryList) {
      getNextCategory();
    }
  }, [categoryList]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.wrapper}>
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
          <motion.div
            variants={workPageHeaderContent}
            initial="hidden"
            animate="visible"
            className={styles.scrollContainer}
          >
            <Scroll />
          </motion.div>
        </header>
        <div className={styles.showCaseContainer}>
          <div className={styles.showCaseWrapper}>
            {data?.projects.map(({ src, label, id, ref }) => (
              <ProjectDisplay href={ref} src={src} label={label} key={id} />
            ))}
          </div>
        </div>
        <div className={styles.nextCategoryContainer}>
          <Link to={`/portfolio/category?type=${nextCategory}`}>
            <div className="nextCategoryWrapper">
              <p>NEXT</p>
              <p>{nextCategory}</p>
              <Icon icon="bi:arrow-right-short" className={styles.arrow} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCategoryPage;
