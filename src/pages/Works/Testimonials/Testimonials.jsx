import Avatar from "components/Avatar/Avatar";
import { testimonials } from "mocks/data";
import React from "react";
import Slider from "react-slick";
import { testimonials_sider } from "utils/settings";
import { Icon } from "@iconify/react";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import styles from "./testimonials.module.scss";
import {
  containerVariant,
  fadeInVariant,
  motion
} from "assets/motion/motionVariants";
import AppLink from "components/AppLink/AppLink";

const Testimonials = () => {
  const settings = {
    ...testimonials_sider,
    dotsClass: `${styles.dots} slick-dots`
  };

  const Testimonial = ({
    client_name,
    client_details,
    picture_path,
    review,
    project_link
  }) => (
    <div className={styles.testimonialContainer}>
      <a href={project_link} rel="noreferrer" target="_blank">
        <Icon icon="ri:double-quotes-l" className={styles.quotation} />
        <p className={styles.testimonialReview}>{review}</p>
        <div className={styles.testimonialClientContainer}>
          <div>
            <h5>{client_name}</h5>
            <p>{client_details}</p>
          </div>
          <Avatar src={picture_path} />
        </div>
      </a>
    </div>
  );

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.container}
    >
      <motion.div variants={fadeInVariant}>
        <AnimatedHeading>
          <h1>Testemunhos calorosos</h1>
        </AnimatedHeading>
      </motion.div>
      <motion.div variants={fadeInVariant}>
        <Slider {...settings}>
          {testimonials.map((item) => (
            <Testimonial {...item} />
          ))}
        </Slider>
      </motion.div>
      <div className={styles.letsTalk}>
        <h5>Gostaria de ver o seu feedback aqui?</h5>
        <AppLink label="Vamos conversar" to="/contact" />
      </div>
    </motion.div>
  );
};

export default Testimonials;
