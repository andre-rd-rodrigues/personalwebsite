import ReactGa from "react-ga4";

const analyticsClickEvent = (category, action) => {
  ReactGa.event({
    category,
    action
  });
};

export { analyticsClickEvent };
