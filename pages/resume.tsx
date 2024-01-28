import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";
import resumeStyles from "../styles/pages/resume.module.scss";

const Resume = () => {
  const { theme } = useTheme();
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div
      className={
        fade
          ? `${resumeStyles.resume} page fade`
          : `${resumeStyles.resume} page`
      }
      data-theme={theme}
    >
      <iframe
        src="https://drive.google.com/file/d/1ae7N_IHP9czbPx37CnjBg9ah8PLkL_wn/preview"
        allow="autoplay"
      ></iframe>
      <nav>
        <a href="https://drive.google.com/uc?export=download&id=1dMklZSl7ma0wq9PvIl1W4Uqu32m_TGDx">
          Download
        </a>
        <a href="mailto:jonathan.d.potter@outlook.com">Email</a>
        <a
          href="https://github.com/JonathanDPotter"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-potter-a806b8239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  );
};

export default Resume;
