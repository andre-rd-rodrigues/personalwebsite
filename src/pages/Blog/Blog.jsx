import PageContainer from "components/PageContainer/PageContainer";
import ReactGA from "react-ga4";
import styles from "./blog.module.scss";

const Blog = () => {
  return (
    <PageContainer bgColor="light-grey" className={styles.container}>
      <div className={styles.title}>
        <div className={styles.blogImage} />
        <h1>Curiosity Gem</h1>
        <p>Get the real experience and visit my official blog website</p>
        <button
          onClick={() =>
            ReactGA.event({
              category: "Navigation",
              action: "click_navigation_to_blog"
            })
          }
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://curiositygem-90guvx8v2-andre-rd-rodrigues.vercel.app/"
          >
            go to blog
          </a>
        </button>
      </div>
    </PageContainer>
  );
};

export default Blog;
