const testimonials_sider = {
  speed: 11000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  className: "center",
  infinite: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

export { testimonials_sider };
