import ProjectDisplay from "components/ProjectDisplay/ProjectDisplay";
import { categories } from "mocks/data";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./category.module.scss";

const Category = () => {
  const [data, setData] = useState(undefined);
  const [searchParams] = useSearchParams();
  const categoryType = searchParams.get("type");

  useEffect(() => {
    if (categoryType) {
      setData(categories[categoryType]);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
        </header>
        <div className={styles.projects}>
          {data?.projects.map(({ src, label, id, ref }) => (
            <ProjectDisplay href={ref} src={src} label={label} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
