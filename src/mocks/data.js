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
  }
  /*  {
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

const blog = {
  //Catgories are displayed by this order
  categories: [
    { display_name: "Recent posts", name: "recent" },
    { display_name: "Lifestyle", name: "lifestyle" },
    { display_name: "Career & Mentoring", name: "career" },
    { display_name: "All", name: "all" }
  ],
  articles: [
    {
      id: "917e4fba-199c-11ed-861d-0242ac120002",
      title: "10 tips to better sleeping",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      category: "lifestyle",
      date: "12, June 2022",
      content: (
        <div>
          <h1>Hello</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          dicta perferendis aperiam velit veniam quibusdam, architecto porro
          exercitationem incidunt? Alias nemo quae adipisci quibusdam odit.
          Eveniet, ipsam tempora! Perferendis similique cum non inventore
          repellendus natus veritatis ratione. Cumque delectus rem ut iste
          exercitationem numquam laboriosam nisi voluptas molestiae deleniti
          nobis nostrum harum aspernatur, facilis id fugiat odio aliquam aliquid
          qui adipisci? Nam voluptates repellendus quia neque dolore
          consequuntur illum adipisci magni qui reiciendis aliquid
          necessitatibus eligendi officiis ipsum dicta, ut obcaecati repellat
          in? Inventore est similique excepturi harum nulla. Atque, id quos iure
          error ullam odit. Iusto deserunt tempora fugiat eum unde quasi ad
          voluptatibus veniam perferendis! Veniam cum cupiditate illum, nam,
          ratione provident assumenda, quos non molestiae quas beatae hic labore
          officia maxime et officiis nobis! Ex qui assumenda aspernatur ut
          beatae, voluptatum repellendus unde vel minima dolorem cupiditate nisi
          officiis tempore recusandae tenetur harum omnis cum minus dolorum in
          porro dolore deleniti dicta ab. Tempore consequatur aspernatur fugit
          maiores sequi atque totam aut adipisci animi, ad nulla voluptate a
          temporibus nisi dignissimos quos voluptatibus. Enim omnis, harum
          voluptate ex quam culpa possimus dicta, molestias placeat odit autem
          soluta architecto illum illo quaerat tempore. Facilis cumque
          similique, quod inventore voluptate nostrum adipisci libero neque
          dignissimos doloribus id. Consectetur accusamus porro blanditiis eaque
          qui architecto animi rem consequatur iure doloremque aliquam magni,
          facilis cupiditate libero dolore tempora maiores, rerum harum ut cum
          maxime. Expedita quod unde fuga, iste sapiente sed natus quaerat!
          Explicabo, vel quibusdam voluptatibus a consequatur consequuntur amet
          eos sint. Cumque pariatur eos, minima voluptatum ipsam, incidunt
          molestias eius dolor cum earum blanditiis, reprehenderit unde
          repudiandae! Excepturi eos ipsam consectetur consequuntur, esse sint
          quos reiciendis quam a aspernatur molestias cum vel vitae soluta
          perferendis dolores! Vero temporibus odit quo saepe ratione! Beatae
          fugit accusamus a dicta sint sunt ullam, aut quis corrupti delectus.
          Consequuntur dignissimos dolore, provident accusamus nobis
          necessitatibus cumque placeat id quis optio sequi! Dolor vero tenetur
          ratione officiis cumque doloremque, consectetur quisquam, velit
          deserunt quae voluptates. Voluptas quidem officia nisi ullam
          blanditiis illum odit non, odio omnis, vitae reprehenderit earum quasi
          dignissimos id voluptatem magni nulla molestiae sapiente libero
          quisquam natus ea asperiores fugit temporibus! Officiis consequuntur
          dignissimos quisquam eius magni repellat a laboriosam commodi nam
          impedit amet molestias eos, fugit voluptatibus atque libero,
          praesentium magnam hic facilis placeat illo, quae tempora quaerat!
          Reprehenderit enim nulla, magni exercitationem itaque eaque alias
          laboriosam cumque, nam, officia dolorum labore sequi. Eaque expedita
          quo, atque modi magnam omnis commodi, ratione distinctio dicta alias,
          possimus incidunt aut architecto. Suscipit quisquam in, ea, cum culpa
          quidem quis consectetur porro hic omnis cumque! Accusamus amet harum
          sequi quis, rem earum officia excepturi repellendus dolorum incidunt
          necessitatibus, eveniet velit ex at, quaerat magni culpa quisquam.
          Nesciunt in illum, ullam delectus magni est distinctio quo. Eum,
          repellendus? Repellendus, necessitatibus, odio aliquid nostrum commodi
          ex modi repellat, iusto rem quas tempora. Magni voluptate, quidem
          labore doloremque dolor ipsa necessitatibus ullam nostrum id a rerum
          officiis commodi, distinctio aspernatur sint suscipit sunt deleniti
          ad! Libero?
        </div>
      ),
      image_src:
        "https://images.unsplash.com/photo-1582699669911-89db9ff0d67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      writer: "Andre Rodrigues"
    },
    {
      id: "c5d2a482-199c-11ed-861d-0242ac120002",
      title: "Non-standard Flutter custom bottom navigation bar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

      category: "lifestyle",
      date: "12, June 2022",
      content: <div>Hello</div>,
      image_src:
        "https://images.unsplash.com/photo-1618221227897-57302c9460b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      writer: "Andre Rodrigues"
    }
  ]
};

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
  blog,
  services
};
