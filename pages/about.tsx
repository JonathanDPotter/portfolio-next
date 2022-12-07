import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";
import aboutStyles from "../styles/pages/about.module.scss";

const About = () => {
  const { theme } = useTheme();
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div
      className={
        fade ? `${aboutStyles.about} page fade` : `${aboutStyles.about} page`
      }
      data-theme={theme}
    >
      <h2>About</h2>
      <section className={aboutStyles.info}>
        <p>
          This site is intended as a showcase of my skills as a web developer
          with an emphasis on full-stack projects that use a MERN stack. The
          majority of the projects here are written using TypeScript.
        </p>
        <br />
        <p>
          This site was written in TypeScript with React and does not utilize a
          back-end. It was originally a single-page React app, but I converted
          it into a Next.js app in order to get an easy introduction to Next.js.
          I used SCSS for styling, the context api for global state management,
          react-intersection-observer for scroll events, react-markdown to
          display markdown, react-pdf to display my resume, react-modal to show
          modals, uuid for element keys, and fontawesome for icons. The app is
          hosted on Vercel.
        </p>
        <br />
        <button
          onClick={() =>
            window.open(
              "https://github.com/JonathanDPotter/portfolio-next",
              "_blank"
            )
          }
        >
          see code on github <FontAwesomeIcon icon={faGithub} />
        </button>
      </section>
    </div>
  );
};

export default About;
