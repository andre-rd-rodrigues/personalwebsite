const containerVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const titleEntrance = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3
    }
  }
};

export { containerVariant, titleEntrance };
