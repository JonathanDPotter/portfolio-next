import React, { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
// components
import Button from "../components/Button";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faGithub,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
// context
import { useTheme } from "../context/themeContext";
// styles
import projectStyles from "../styles/components/Project.module.scss";
import projectsStyles from "../styles/pages/projects.module.scss";
import modalStyles from "../styles/components/Modal.module.scss";

interface Iprops {
  markdownText: string;
  image: string;
  link: string;
  github: string;
}

const Project: FC<Iprops> = ({ markdownText, image, link, github }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalClose, setModalClose] = useState(false);
  const { theme } = useTheme();

  Modal.setAppElement("#__next");

  const closeModal = (closeFunction: () => void) => {
    setModalClose(true);
    setTimeout(() => {
      closeFunction();
      setModalClose(false);
    }, 500);
  };

  return (
    <>
      <div className={projectStyles.curtain} data-theme={theme}></div>
      <ReactMarkdown components={{ h1: "h2", h2: "h3" }}>
        {markdownText.substring(0, markdownText.indexOf("---"))}
      </ReactMarkdown>
      <p className={projectsStyles.link} onClick={() => setModalOpen(true)}>
        more...
      </p>
      <img src={image} alt="app screenshot" />
      <button onClick={() => window.open(link, "_blank")}>
        go to hosted app{" "}
        <FontAwesomeIcon
          icon={
            link === "http://weather-imp-vue.vercel.app/" ? faVuejs : faReact
          }
        />
      </button>
      <button onClick={() => window.open(github, "_blank")}>
        see code on github <FontAwesomeIcon icon={faGithub} />
      </button>
      {link === "https://upc-tracker-efxn5f8q7-jonathandpotter.vercel.app/" ? (
        <button
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.jonathandpotter.upctracker"
            )
          }
        >
          get app from Play Store <FontAwesomeIcon icon={faAndroid} />
        </button>
      ) : null}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => closeModal(() => setModalOpen(false))}
        className={
          modalClose
            ? `${modalStyles.modal} ${modalStyles.close} ${modalStyles[theme]}`
            : `${modalStyles.modal} ${modalStyles[theme]}`
        }
        overlayClassName={
          modalClose
            ? `${modalStyles.overlay} ${modalStyles.close} ${modalStyles[theme]}`
            : `${modalStyles.overlay} ${modalStyles[theme]}`
        }
      >
        <ReactMarkdown components={{ h1: "h2", h2: "h3" }}>
          {markdownText}
        </ReactMarkdown>
        <Button
          text="Close"
          size={2}
          onClick={() => closeModal(() => setModalOpen(false))}
        />
      </Modal>
    </>
  );
};

export default Project;
