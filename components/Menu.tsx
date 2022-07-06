import React, { useState } from "react";
import { useTheme } from "../context/themeContext";
import menuStyles from "../styles/components/Menu.module.scss";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setThemesOpen } = useTheme();

  return (
    <button
      className={menuStyles.menu}
      onClick={() => setMenuOpen(!menuOpen)}
      data-theme={theme}
      tab-index={0}
      aria-label="menu"
    >
      <div
        className={
          menuOpen ? `${menuStyles.icon1} ${menuStyles.open}` : menuStyles.icon1
        }
      ></div>
      <div
        className={
          menuOpen ? `${menuStyles.icon2} ${menuStyles.open}` : menuStyles.icon2
        }
      ></div>
      <div
        className={
          menuOpen ? `${menuStyles.icon3} ${menuStyles.open}` : menuStyles.icon3
        }
      ></div>
      <div
        className={
          menuOpen
            ? `${menuStyles.optionsOpen} ${menuStyles.options}`
            : `${menuStyles.optionsClosed} ${menuStyles.options}`
        }
      >
        <ul>
          <li onClick={() => setThemesOpen(true)} tabIndex={menuOpen ? 0 : -1}>
            theme
          </li>
          <li>
            <a
              href="https://github.com/JonathanDPotter"
              target="_blank"
              rel="noreferrer"
              tabIndex={menuOpen ? 0 : -1}
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/jonathan-potter-a806b8239"
              target="_blank"
              rel="noreferrer"
              tabIndex={menuOpen ? 0 : -1}
            >
              linkedIn
            </a>
          </li>
        </ul>
      </div>
    </button>
  );
};

export default Menu;
