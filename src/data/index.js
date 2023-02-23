import uuid from "react-uuid";
import { add_homepage_images } from "utils/global-utils";

const social_media = [
  { label: "facebook", ref: "https://www.facebook.com/andrerodrigoweb" },
  {
    label: "instagram",
    ref: "https://www.instagram.com/andre.creativedesign/"
  },
  {
    label: "linkedin",
    ref: "https://www.linkedin.com/in/andr%C3%A9-rodrigues-4b4a9b188/"
  }
];

const works_categories = [
  {
    name: "Websites",
    order: "01",
    src: process.env.PUBLIC_URL + "/images/worksHomepage/websites.jpg"
  },
  {
    name: "Apps",
    order: "02",
    src: process.env.PUBLIC_URL + "/images/worksHomepage/apps.jpg"
  } /* ,
   {
    name: "Editorial",
    order: "03",
    src: process.env.PUBLIC_URL + "images/worksHomepage/editorial.png"
  } */
];

const projects = {
  apps: [
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/apps/giggle.png",
      label: "Giggle!",
      ref: "https://play.google.com/store/apps/details?id=com.itstudios.giggle&hl=pt_PT&gl=US"
    },
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/apps/randombox.png",
      label: "Random Box - Coming soon",
      ref: null
    },
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/apps/coolmind.png",
      label: "Coolmind - Coming soon",
      ref: null
    }
  ],

  websites: [
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/websites/itstudios.jpg",
      label: "IT Studios",
      ref: "https://itstudios.eu/"
    },
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/websites/portfolio.jpg",
      label: "Portfolio",
      ref: "https://andre-rd-rodrigues.github.io/portfolio"
    },
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/websites/rima.jpg",
      label: "RIMA",
      ref: "https://www.rimarrabida.pt"
    },
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/websites/woode.jpg",
      label: "Woode",
      ref: "https://andre-rd-rodrigues.github.io/woodework"
    },
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/websites/arquitech.jpg",
      label: "Mannagia",
      ref: "https://andre-rd-rodrigues.github.io/architech"
    },

    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/websites/chocolate.jpg",
      label: "Chocolate riviere",
      ref: "https://andre-rd-rodrigues.github.io/chocolatriviere/"
    },
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/websites/novawalks.jpg",
      label: "Novawalks",
      ref: "https://novawalks.vercel.app/"
    },
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/websites/lotto.jpg",
      label: "Lotto Jade",
      ref: "https://lottojade.com"
    },
    {
      id: uuid(),
      src: process.env.PUBLIC_URL + "/images/websites/memory.jpg",
      label: "Memory Game",
      ref: "https://andre-rd-rodrigues.github.io/memory-game/#/"
    }
  ]
};

const categories = {
  apps: {
    id: uuid(),
    title: "Apps",
    description: `apps_category_page.description`,
    projects: projects["apps"]
  },
  websites: {
    id: uuid(),
    title: "Websites",
    description: "websites_category_page.description",
    projects: projects["websites"]
  }
};

const testimonials = [
  {
    id: uuid(),
    picture_path: process.env.PUBLIC_URL + "/images/testimonials/ferreira.jpg",
    client_name: "Pedro Ferreira",
    review: "testimonials.pedro.review",
    client_details: "testimonials.pedro.details",
    project_link: "https://www.instagram.com/p/CS7ZtNVDXr8/"
  },
  {
    id: uuid(),
    review: "testimonials.sofia.review",
    picture_path: "https://www.rimarrabida.pt/images/sofia.jpeg",
    client_name: "Sofia Pimenta",
    client_details: "testimonials.sofia.details",
    project_link: "https://www.rimarrabida.pt/"
  },
  {
    id: uuid(),
    review: "testimonials.rafa.review",
    client_details: "testimonials.rafa.details",
    picture_path: process.env.PUBLIC_URL + "/images/testimonials/rafa.jpg",
    client_name: "Rafael Pereira",

    project_link: "https://www.itstudios.eu"
  },
  {
    id: uuid(),
    review: "testimonials.doart.review",
    client_details: "testimonials.doart.details",
    client_name: "Doart",

    picture_path: process.env.PUBLIC_URL + "/images/testimonials/doart.jpg",
    project_link: "https://www.instagram.com/p/CDE5gqVAii8/"
  },
  {
    id: uuid(),
    review: "testimonials.patricia.review",
    client_details: "testimonials.patricia.details",
    client_name: "Patrícia",

    picture_path: process.env.PUBLIC_URL + "/images/testimonials/patricia.jpg",
    project_link: "https://www.instagram.com/p/CDE5gqVAii8/"
  }
];

const homepage_gallery = [];
add_homepage_images(homepage_gallery);

const services = {
  main: [
    {
      id: uuid(),
      title: "about_page.services.main.design.title",
      description: "about_page.services.main.design.description",
      icon: "ph:pencil-thin"
    },
    {
      id: uuid(),
      title: "about_page.services.main.programming.title",
      description: "about_page.services.main.programming.description",
      icon: "bytesize:code"
    },
    {
      id: uuid(),
      title: "about_page.services.main.seo.title",
      description: "about_page.services.main.seo.description",
      icon: "clarity:world-line"
    },
    {
      id: uuid(),
      title: "about_page.services.main.metrics.title",
      description: "about_page.services.main.metrics.description",
      icon: "fluent:megaphone-loud-16-regular"
    }
  ],
  extra: [
    {
      id: uuid(),
      title: "about_page.services.extra.branding.title",
      description: "about_page.services.extra.branding.description",
      icon: "ph:paint-brush-light"
    },
    {
      id: uuid(),
      title: "",
      description: "",
      icon: ""
    }
  ]
};

export {
  social_media,
  works_categories,
  categories,
  projects,
  testimonials,
  homepage_gallery,
  services
};
