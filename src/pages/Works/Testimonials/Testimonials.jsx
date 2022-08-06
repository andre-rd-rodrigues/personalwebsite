import Avatar from "components/Avatar/Avatar";
import { testimonials } from "mocks/data";
import React from "react";
import Slider from "react-slick";
import { testimonials_sider } from "utils/settings";
import { Icon } from "@iconify/react";
import styles from "./testimonials.module.scss";

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
    <div className={styles.container}>
      <h1>Sweet testimonials from warming people</h1>
      <Slider {...settings}>
        {testimonials.map((item) => (
          <Testimonial {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
