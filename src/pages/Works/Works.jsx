import WorkCategory from "components/WorkCategory/WorkCategory";
import { works_categories } from "mocks/data";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Testimonials from "./Testimonials/Testimonials";
import styles from "./works.module.scss";

const Works = () => {
  return (
    <div className={styles.container}>
      <div className={styles.works}>
        <h1>Works</h1>
        <div className={styles.worksCategories}>
          <Row>
            {works_categories.map(({ name, order, src }, index) => (
              <Col lg={4} md={4} sm={12} key={index}>
                <WorkCategory name={name} order={order} src={src} />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <Testimonials />

      {/*      <Footer /> */}
    </div>
  );
};

export default Works;
