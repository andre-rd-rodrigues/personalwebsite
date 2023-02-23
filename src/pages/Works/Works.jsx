import React from "react";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import PageContainer from "components/PageContainer/PageContainer";
import WorkCategory from "components/WorkCategory/WorkCategory";
import { works_categories } from "data";
import { Col, Row } from "react-bootstrap";
import Testimonials from "./Testimonials/Testimonials";
import styles from "./works.module.scss";

const Works = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <div className={styles.works}>
          <AnimatedHeading>
            <h1>Trabalhos</h1>
          </AnimatedHeading>
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
      </div>
    </PageContainer>
  );
};

export default Works;
