import React from "react";
import { motion } from "framer-motion";
import {
  animatedHeadingChildren,
  animatedHeadingContainer
} from "assets/motion/motionVariants";

// Prevent wrapping of words
const Wrapper = (props) => {
  return <span style={{ whiteSpace: "nowrap" }}>{props.children}</span>;
};

const AnimatedHeading = ({ children }) => {
  console.log(children);
  const childrenWords = [];
  const childrenTag = children.type;

  const wordsConverter = () => {
    const getWordsFromChildren = children.props.children.split(" ");

    for (const [, item] of getWordsFromChildren.entries()) {
      childrenWords.push(item.split(""));
    }

    childrenWords.map((word) => {
      return word.push("\u00A0");
    });
  };
  wordsConverter();

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
