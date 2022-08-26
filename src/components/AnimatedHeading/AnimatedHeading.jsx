import React from "react";
import {
  motion,
  animatedHeadingChildren,
  animatedHeadingContainer
} from "assets/motion/motionVariants";
import { convertTextIntoWords } from "utils/global-utils";

// Prevent wrapping of words
const Wrapper = (props) => {
  return <span style={{ whiteSpace: "nowrap" }}>{props.children}</span>;
};

const AnimatedHeading = ({ children }) => {
  const childrenWords = [];
  const childrenTag = children.type;

  if (!children.props.children) return null;

  convertTextIntoWords(children.props.children, childrenWords);

  const CustomTag = ({ children, style, variants }) => {
    switch (childrenTag) {
      case "h1":
        return (
          <motion.h1 style={style} variants={variants}>
            {children}
          </motion.h1>
        );
      case "h2":
        return (
          <motion.h2 style={style} variants={variants}>
            {children}
          </motion.h2>
        );
      case "h3":
        return (
          <motion.h3 style={style} variants={variants}>
            {children}
          </motion.h3>
        );
      default:
        return (
          <motion.p style={style} variants={variants}>
            {children}
          </motion.p>
        );
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animatedHeadingContainer}
    >
      {childrenWords.map((word, index) => {
        return (
          <Wrapper key={index}>
            {childrenWords[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <CustomTag
                    style={{ display: "inline-block" }}
                    variants={animatedHeadingChildren}
                  >
                    {element}
                  </CustomTag>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </motion.div>
  );
};

export default AnimatedHeading;
