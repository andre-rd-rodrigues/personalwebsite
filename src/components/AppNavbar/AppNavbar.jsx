import AppIcon from "components/AppIcon/AppIcon";
import React from "react";
import { useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile from "assets/images/profile.png";
import styles from "./appnavbar.module.scss";
import FeatherIcon from "feather-icons-react";

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" className={styles.nav}>
      <Navbar.Brand as={Link} to="/">
        <div className={styles.logo}>
          <div
            id="personal_picture"
            style={{
              background: `url("${profile}") center center`,
            }}
          />
          <h1>AR</h1>
          <p>Web Developer</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="offcanvas-container"
        onClick={() => setShow(true)}
      >
        <AppIcon />
        <FeatherIcon icon="menu" color="white" />
      </Navbar.Toggle>
      <Navbar.Offcanvas
        show={show}
        responsive="lg"
        onHide={() => setShow(false)}
        aria-labelledby="offcanvas-container"
        placement="end"
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Nav className={styles.offcanvasLinks}>
            <Nav.Link href="/works">Works</Nav.Link>
            <br />
            <Nav.Link href="/blog">Blog</Nav.Link> <br />
            <Nav.Link href="/about">About</Nav.Link> <br />
            <Nav.Link href="/contact">Contact</Nav.Link> <br />
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;
