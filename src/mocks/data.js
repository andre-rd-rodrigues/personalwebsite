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
export { social_media, works_categories, categories, projects, testimonials };
