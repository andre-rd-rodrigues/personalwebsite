import AppIcon from "components/AppIcon/AppIcon";
import React from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./appnavbar.module.scss";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className={styles.nav}>
      <Navbar.Brand as={Link} to="/">
        <div className={styles.logo}>
          <div id="personal_picture" />
          <h1>AR</h1>
          <p>Web Developer</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvas-container">
        <AppIcon icon="menu" color="white" />
      </Navbar.Toggle>
      <Navbar.Offcanvas
        id={styles.offcanvas}
        aria-labelledby="offcanvas-container"
        placement="end"
      >
        <Offcanvas.Header closeButton />

        <Offcanvas.Body>
          <Nav className={styles.offcanvasLinks}>
            <Nav.Link href="/works">Works</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;
