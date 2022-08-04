const testimonials_sider = {
  className: "center",
  infinite: true,
  slidesToShow: 2,
  speed: 1000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  draggable: true,
  easing: "ease-out",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export { testimonials_sider };
