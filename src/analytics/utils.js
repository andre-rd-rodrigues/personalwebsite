import ReactGa from "react-ga4";

const analyticsClickEvent = (category, action) => {
  ReactGa.event({
    category,
    action
  });
};

const GA_ID = "G-K901N5P0GC";

export { analyticsClickEvent, GA_ID };
