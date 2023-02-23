import React from "react";
import { useState } from "react";
import AppIcon from "components/AppIcon/AppIcon";
import LanguageSelector from "components/LanguageSelector/LanguageSelector";
import FeatherIcon from "feather-icons-react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./appnavbar.module.scss";

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  const { t } = useTranslation();

  return (
    <Navbar expand="lg" fixed="top" className={styles.nav}>
      <Navbar.Brand as={Link} to="/">
        <div className={styles.logo}>
          <div id="personal_picture" />
          <h1>AR</h1>
          <p> {t("navbar.brand_label")}</p>
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
          <Nav
            onSelect={() => setShow(false)}
            className={styles.offcanvasLinks}
          >
            <Nav.Link as={Link} to="/portfolio" href="/portfolio">
              {t("navbar.works")}
            </Nav.Link>

            <Nav.Link as={Link} to="/about" href="/about">
              {t("navbar.about")}
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" href="/skills">
              Skills
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" href="/contact">
              {t("navbar.contacts")}
            </Nav.Link>

            <Nav.Link as={Link} to="/blog" href="/blog">
              {t("navbar.blog")}
            </Nav.Link>

            <LanguageSelector />
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;
