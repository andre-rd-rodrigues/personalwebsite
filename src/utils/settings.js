const testimonials_sider = {
  className: "center",
  infinite: true,
  speed: 1000,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  dots: true,
  draggable: true,
  easing: "ease-out",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

export { testimonials_sider };
