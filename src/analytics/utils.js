import ReactGa from "react-ga";

const analyticsClickEvent = (category, action) => {
  ReactGa.event({
    category,
    action,
  });
};

export { analyticsClickEvent };
