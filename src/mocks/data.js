import uuid from "react-uuid";

const social_media = [
  { label: "Fb", ref: "" },
  { label: "Ins", ref: "https://www.instagram.com/andre.creativedesign/" },
  {
    label: "In",
    ref: "https://www.linkedin.com/in/andr%C3%A9-rodrigues-4b4a9b188/"
  }
];

const works_categories = [
  {
    name: "Websites",
    order: "01",
    src: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
  },
  {
    name: "Mobile",
    order: "02",
    src: "https://images.unsplash.com/photo-1631115539462-61c21920cbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
  },
  {
    name: "Editorial",
    order: "03",
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80"
  }
];

const projects = {
  mobile: [
    {
      id: uuid(),
      src: "https://play-lh.googleusercontent.com/OWQjHDhk2-2p5x13JavznuZkfl7kYdhyIys3cdSY7x_FclawrwNUTqt0oSIutCdXIm8=w2560-h1440-rw",
      label: "Giggle!",
      ref: "https://play.google.com/store/apps/details?id=com.itstudios.giggle&hl=pt_PT&gl=US"
    }
  ],

  websites: [
    {
      id: uuid(),
      src: "https://images.unsplash.com/photo-1498770981697-fe793a20cd3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80",
      label: "Lotto Jade",
      ref: "https://lottojade.com/"
    },
    {
      id: uuid(),
      src: "https://images.unsplash.com/photo-1498770981697-fe793a20cd3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80",
      label: "Lotto Jade",
      ref: "https://lottojade.com/"
    },
    {
      id: uuid(),
      src: "https://images.unsplash.com/photo-1498770981697-fe793a20cd3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80",
      label: "Lotto Jade",
      ref: "https://lottojade.com/"
    },
    {
      id: uuid(),
      src: "https://images.unsplash.com/photo-1498770981697-fe793a20cd3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80",
      label: "Lotto Jade",
      ref: "https://lottojade.com/"
    },
    {
      id: uuid(),
      src: "https://images.unsplash.com/photo-1498770981697-fe793a20cd3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80",
      label: "Lotto Jade",
      ref: "https://lottojade.com/"
    },
    {
      id: uuid(),
      src: "https://images.unsplash.com/photo-1498770981697-fe793a20cd3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80",
      label: "Lotto Jade",
      ref: "https://lottojade.com/"
    },
    {
      id: uuid(),
      src: "https://images.unsplash.com/photo-1498770981697-fe793a20cd3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80",
      label: "Lotto Jade",
      ref: "https://lottojade.com/"
    }
  ]
};

const categories = {
  mobile: {
    id: uuid(),
    title: "Mobile",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eum omnis quibusdam aut laboriosam. Reprehenderit nihil, omnis perferendis nam repudiandae architecto dolore mollitia at voluptatum, nesciunt assumenda ab praesentium labore vero cum laudantium a. Voluptas hic pariatur aliquam! Laborum, odit!",
    projects: projects["mobile"]
  },
  websites: {
    id: uuid(),
    title: "Websites",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eum omnis quibusdam aut laboriosam. Reprehenderit nihil, omnis perferendis nam repudiandae architecto dolore mollitia at voluptatum, nesciunt assumenda ab praesentium labore vero cum laudantium a. Voluptas hic pariatur aliquam! Laborum, odit!",
    projects: projects["websites"]
  }
};

const testimonials = [
  {
    id: uuid(),
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque deserunt maiores repellendus incidunt suscipit alias facilis adipisci libero velit? Sed eius exercitationem repudiandae fugiat assumenda quo consequatur, obcaecati laudantium!",
    picture_path:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    client_name: "Matthew Hamilton",
    client_details: "CEO of Storm Troops",
    project_link: "https://www.lottojade.com"
  },
  {
    id: uuid(),
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque deserunt maiores repellendus incidunt suscipit alias facilis adipisci libero velit? Sed eius exercitationem repudiandae fugiat assumenda quo consequatur, obcaecati laudantium!",
    picture_path:
      "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80",
    client_name: "RIMA",
    client_details: "Reunião de Internos da Arrábida",
    project_link: ""
  },
  {
    id: uuid(),
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque deserunt maiores repellendus incidunt suscipit alias facilis adipisci libero velit? Sed eius exercitationem repudiandae fugiat assumenda quo consequatur, obcaecati laudantium!",
    picture_path:
      "https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=800",
    client_name: "John Doe",
    client_details: "Freelance artist",
    project_link: ""
  }
];

const homepage_gallery = [
  "https://images.unsplash.com/photo-1637076717574-0b8661fe8f94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
  "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1627008767693-20498ff18ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1571095490542-844ba2b703f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80",
  "https://images.unsplash.com/photo-1600075979337-7f0f5ea8f8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  "https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1491595065476-b7e475407e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
  "https://images.unsplash.com/photo-1637076717574-0b8661fe8f94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
  "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1627008767693-20498ff18ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1571095490542-844ba2b703f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80",
  "https://images.unsplash.com/photo-1600075979337-7f0f5ea8f8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  "https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1491595065476-b7e475407e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
  "https://images.unsplash.com/photo-1637076717574-0b8661fe8f94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
  "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1627008767693-20498ff18ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1571095490542-844ba2b703f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80",
  "https://images.unsplash.com/photo-1600075979337-7f0f5ea8f8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  "https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1491595065476-b7e475407e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"
];

const blog = {
  categories: [
    "Recent posts",
    "Economics & Investments",
    "Lifestyle",
    "Mental health",
    "Marketing",
    "All"
  ],
  articles: [
    {
      id: uuid(),
      title: "10 tips to better sleeping",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...",
      category: "Lifestyle",
      date: "12, June 2022",
      image_src:
        "https://images.unsplash.com/photo-1582699669911-89db9ff0d67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      writer: "Andre Rodrigues"
    },
    {
      id: uuid(),
      title: "Non-standard Flutter custom bottom navigation bar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...",
      category: "Lifestyle",
      date: "12, June 2022",
      image_src:
        "https://images.unsplash.com/photo-1618221227897-57302c9460b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      writer: "Andre Rodrigues"
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
  blog
};
