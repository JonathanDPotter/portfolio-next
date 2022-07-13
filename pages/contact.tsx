import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";
import contactStyles from "../styles/pages/contact.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

const Contact = () => {
  const { theme } = useTheme();
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div
      className={
        fade
          ? `${contactStyles.contact} page fade`
          : `${contactStyles.contact} page`
      }
      data-theme={theme}
    >
      <h2>Contact</h2>
      <div className={contactStyles.buttons}>

      <a href="mailto:jonathan.d.potter@outlook.com">
        <Button size={4} text="Email ">
          <FontAwesomeIcon icon={faEnvelope} />
        </Button>
      </a>
      <a href="https://linkedin.com/in/jonathan-potter-a806b8239">
        <Button size={4} text="LinkedIn ">
          <FontAwesomeIcon icon={faLinkedin} aria-label="LinkedIn" />
        </Button>
      </a>
      <a href="https://github.com/JonathanDPotter">
        <Button size={4} text="Github ">
          <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
        </Button>
      </a>
      </div>
    </div>
  );
};

export default Contact;
