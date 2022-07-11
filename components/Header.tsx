import React, { useEffect } from "react";
import Modal from "react-modal";
import { v4 as uuid } from "uuid";
import { useTheme } from "../context/themeContext";
import Menu from "./Menu";
import Themes from "../Types/enums/themes";
import Button from "./Button";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import headerStyles from "../styles/components/Header.module.scss";
import modalStyles from "../styles/components/Modal.module.scss";

const Header = () => {
  const { theme, setTheme, themesOpen, setThemesOpen } = useTheme();

  const router = useRouter();

  Modal.setAppElement("#__next");

  const themes = Object.keys(Themes);

  const themeChooser = (newTheme: string) => {
    setTheme(newTheme);
    setThemesOpen(false);
  };

  useEffect(() => {
    // ensures that theme is applied correctly after refresh
    const savedTheme = localStorage.getItem("theme");
    savedTheme && setTheme(savedTheme);
  }, []);

  return (
    <header
      data-theme={theme}
      data-location={router.pathname}
      className={headerStyles.header}
    >
      <h1>Jonathan Potter</h1>
      <Menu />

      <nav>
        <NavLink
          to="/"
          className={headerStyles.link}
          activeClassName={headerStyles.active}
        >
          <div className={headerStyles.textContainer}>Home</div>
        </NavLink>
        <NavLink
          to="/projects"
          className={headerStyles.link}
          activeClassName={headerStyles.active}
        >
          <div className={headerStyles.textContainer}>Projects</div>
        </NavLink>
        <NavLink
          to="/aboutme"
          className={headerStyles.link}
          activeClassName={headerStyles.active}
        >
          <div className={headerStyles.textContainer}>About Me</div>
        </NavLink>
        <NavLink
          to="/resume"
          className={headerStyles.link}
          activeClassName={headerStyles.active}
        >
          <div className={headerStyles.textContainer}>Resume</div>
        </NavLink>
        <NavLink
          to="/contact"
          className={headerStyles.link}
          activeClassName={headerStyles.active}
        >
          <div className={headerStyles.textContainer}>Contact</div>
        </NavLink>
        <NavLink
          to="/about"
          className={headerStyles.link}
          activeClassName={headerStyles.active}
        >
          <div className={headerStyles.textContainer}>About</div>
        </NavLink>
      </nav>

      <Modal
        isOpen={themesOpen}
        className={`${modalStyles.modal} ${modalStyles.header}`}
        onRequestClose={() => setThemesOpen(false)}
        overlayClassName={modalStyles.overlay}
        data-theme={theme}
      >
        <div className={modalStyles.buttons}>
          {themes.map((themeName) => (
            <Button
              text={themeName}
              size={2}
              onClick={() => themeChooser(themeName)}
              key={uuid()}
            />
          ))}
          <Button text="cancel" size={2} onClick={() => setThemesOpen(false)} />
        </div>
      </Modal>
    </header>
  );
};

export default Header;
