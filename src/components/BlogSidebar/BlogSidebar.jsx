import AppIcon from "components/AppIcon/AppIcon";
import AppSearchBar from "components/AppSearchBar/AppSearchBar";
import { blog } from "mocks/data";
import React from "react";
import { push as Menu } from "react-burger-menu";
import "./blogsidebar.scss";

function BlogSidebar() {
  return (
    <Menu
      customBurgerIcon={<AppIcon icon="sidebar" color="dark" size={25} />}
      customCrossIcon={<AppIcon icon="x" color="dark" size={25} />}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
    >
      <div className="blog-sidebar-section">
        <AppSearchBar />
      </div>
      <div className="blog-sidebar-section">
        <h5>Categories</h5>
        <ul>
          {blog.categories.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </Menu>
  );
}

export default BlogSidebar;
