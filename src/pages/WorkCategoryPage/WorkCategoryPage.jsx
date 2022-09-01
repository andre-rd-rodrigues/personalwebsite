import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import swipe from "assets/animation/swipe.gif";
import { motion } from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import ProjectDisplay from "components/ProjectDisplay/ProjectDisplay";
import { categories as categories_data } from "mocks/data";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./workcategorypage.module.scss";

const WorkCategoryPage = () => {
  const [data, setData] = useState(undefined);
  const [nextCategory, setNextCategory] = useState(undefined);
  const [forceUpdate, setForceUpdate] = useState(0);
  const [searchParams] = useSearchParams();
  const containerRef = useRef();

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
  }, [categoryType]);
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
            variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  duration: 1.2,
                  delay: 1.3
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {data?.description}
          </motion.p>
          <img className={styles.swipe} src={swipe} alt="Swipe left" />
        </header>
        <div
          className={styles.gridContainer}
          style={{
            gridTemplateColumns:
              data?.projects.length > 7
                ? "repeat(7, 300px)"
                : "repeat(3, 250px)"
          }}
        >
          {data?.projects.map(({ src, label, id, ref }) => (
            <ProjectDisplay href={ref} src={src} label={label} key={id} />
          ))}
        </div>
        <div className={styles.nextCategoryContainer}>
          <Link
            to={`/works/category?type=${nextCategory}`}
            onClick={() => setForceUpdate((prev) => prev + 1)}
          >
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

export default WorkCategoryPage;
