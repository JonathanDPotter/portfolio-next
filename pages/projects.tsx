import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { v4 as uuid } from "uuid";
// components
import Project from "../components/Project";
import TriggerOnScroll from "../components/TriggerOnScroll";
import PulseDown from "../components/PulseDown";
// markdown
import howlerMarkdown from "../markdown/howlerMarkdown.md";
import blogMarkdown from "../markdown/blogMarkown.md";
import upcMarkdown from "../markdown/upcMarkdown.md";
import weatherMarkdown from "../markdown/weatherMarkdown.md";
import todosMarkdown from "../markdown/todosMarkdown.md";
import weatherVueMarkdown from "../markdown/weatherVueMarkdown.md";
// context
import { useTheme } from "../context/themeContext";
// styles
import projectsStyles from "../styles/pages/projects.module.scss";
import projectStyles from "../styles/components/Project.module.scss";

const Projects = () => {
  const { theme } = useTheme();

  Modal.setAppElement("#__next");

  const [howlerMarkdownText, setHowlerMarkdownText] = useState("");
  const [blogMarkdownText, setBlogMarkdownText] = useState("");
  const [upcMarkdownText, setUpcMarkdownText] = useState("");
  const [weatherMarkdownText, setWeatherMarkdownText] = useState("");
  const [todosMarkdownText, setTodosMarkdownText] = useState("");
  const [weatherVueMarkdownText, setWeatherVueMarkdownText] = useState("");
  const [fade, setFade] = useState(true);

  const markdowns = [
    {
      markdown: howlerMarkdown,
      setter: setHowlerMarkdownText,
      text: howlerMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/168443012-07a97953-a127-472b-934c-702196719630.png",
      link: "https://howler-1dd33.web.app/",
      github: "https://github.com/JonathanDPotter/howler",
    },
    {
      markdown: blogMarkdown,
      setter: setBlogMarkdownText,
      text: blogMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/212110328-e3049fba-7d14-44b1-b8dd-84ec62cbab2b.png",
      link: "https://blog-front-2.vercel.app/",
      github: "https://github.com/JonathanDPotter/blog-front-2",
    },
    {
      markdown: upcMarkdown,
      setter: setUpcMarkdownText,
      text: upcMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/171711143-1abdfe24-3fff-45e7-910d-995d3ed8fd24.png",
      link: "https://upc-tracker.vercel.app",
      github: "https://github.com/JonathanDPotter/upcTracker",
    },
    {
      markdown: weatherMarkdown,
      setter: setWeatherMarkdownText,
      text: weatherMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/228906938-370ec7ab-adea-43b7-ad03-4fa86c0ca305.png",
      link: "https://weather-imp-gngd.vercel.app/",
      github: "https://github.com/JonathanDPotter/weather-imp",
    },
    {
      markdown: todosMarkdown,
      setter: setTodosMarkdownText,
      text: todosMarkdownText,
      image:
        "https://res.cloudinary.com/skarsnik/image/upload/v1706354811/todos_b8rn0n.png",
      link: "https://todos-app-omega.vercel.app/",
      github: "https://github.com/JonathanDPotter/todos-app",
    },
    {
      markdown: weatherVueMarkdown,
      setter: setWeatherVueMarkdownText,
      text: weatherVueMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/203765570-8629fd33-4c80-4031-9555-3df4049242f1.png",
      link: "http://weather-imp-vue.vercel.app/",
      github: "https://github.com/JonathanDPotter/weather-vue",
    },
  ];

  useEffect(() => {
    setFade(false);

    const getMarkdown = async (
      markdown: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      setter(markdown);
    };

    markdowns.forEach(({ markdown, setter }) => getMarkdown(markdown, setter));
  }, [markdowns]);

  return (
    <div
      className={
        fade
          ? `${projectsStyles.projects} page fade`
          : `${projectsStyles.projects} page`
      }
      data-theme={theme}
    >
      <div className={projectsStyles.opening}>
        <h2>Projects</h2>
        <p>
          Below you will find a selection of full-stack projects that I am very
          proud of. most of the apps are built with React and TypreScript, but
          one is built with Vue. Aside from Howler, which uses a Firebase
          back-end, They all have back-end REST APIs that I built with Node,
          Express and TypeScript. You can view the repositories for each of the
          below projects.
        </p>
        <PulseDown />
      </div>
      {markdowns.map(({ text, image, link, github }, i) => {
        return (
          <div className={projectStyles.project} key={uuid()}>
            <div className={projectsStyles.divider}>
              <div className={projectsStyles.container}>
                <TriggerOnScroll className={projectsStyles.trigger}>
                  <Project
                    markdownText={text}
                    image={image}
                    link={link}
                    github={github}
                  />
                </TriggerOnScroll>
              </div>
            </div>
            <div
              className={projectsStyles["back-image"]}
              style={{ backgroundImage: `url("${image}")` }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
