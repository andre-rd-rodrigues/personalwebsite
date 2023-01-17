const testimonials_sider = {
  speed: 1500,
  autoplaySpeed: 7000,
  autoplay: true,
  className: "center",
  infinite: true,
  draggable: true,
  dots: false,
  slidesToShow: 2,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplaySpeed: 9000
      }
    }
  ]
};

const READ_MORE_LABEL = "read more";

const GOOGLE_ANALYTICS_ID = "G-K901N5P0GC";

export { testimonials_sider, GOOGLE_ANALYTICS_ID, READ_MORE_LABEL };
