import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
// components
import ImageSlider from "../components/ImageSlider";
import TriggerOnScroll from "../components/TriggerOnScroll";
import PulseDown from "../components/PulseDown";
// json
import Cats from "../json/cats.json";
import Minis from "../json/minis.json";
import Portland from "..//json/portland.json";
// types
import IjsonImages from "../Types/interfaces/jsonImagesInterface";
// context
import { useTheme } from "../context/themeContext";
// styles
import aboutMeStyles from "../styles/pages/aboutMe.module.scss";

interface IsubjectInput {
  title: string;
  imageJson: IjsonImages;
  background: string;
}

const AboutMe = () => {
  const { theme } = useTheme();

  const [fade, setFade] = useState(true);

  const jsonImages: IsubjectInput[] = [
    {
      title: "I live in Portland, Maine.",
      imageJson: Portland,
      background:
        "https://assets.vogue.com/photos/6125681736841c7a9ecfa2ae/master/w_2560%2Cc_limit/454278947",
    },
    {
      title: "I have kind of a lot of pets.",
      imageJson: Cats,
      background:
        "https://res.cloudinary.com/skarsnik/image/upload/v1658008320/portfolioAssets/meSittingClose_letbrq.jpg",
    },
    {
      title: "Recently finished miniatures.",
      imageJson: Minis,
      background:
        "https://res.cloudinary.com/skarsnik/image/upload/v1658010001/portfolioAssets/miniatures/kan_uvswij.jpg",
    },
  ];

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div
      className={
        fade
          ? `${aboutMeStyles["about-me"]} page fade`
          : `${aboutMeStyles["about-me"]} page`
      }
      data-theme={theme}
    >
      <div className={aboutMeStyles.opening}>
        <h2>About Me</h2>
        <br />
        <p>
          Hello, my name is Jonathan Potter. I have been working in retail
          grocery for about 25 years, but I decided that it was time to take my
          career down a different path. I have been learning front-end
          development for the past year and a half. In that time I have really
          connected with React, and I have included on this site many example
          projects using React. I plan to move on to using Next.js for
          server-side rendered apps and to React Native for mobile development.
        </p>
        <br />
        <p>
          I live in Portland, Maine with my family, three cats and a dog. My
          three children are all young adults now, and the oldest lives in Chicago
          while the two youngest are still at home.
        </p>
        <br />
        <p>
          I have many hobbies, from hiking, biking and running to carpentry,
          music production, and tabletop wargaming. Most of my free time is now
          spent writing web apps, but I still sneak in some miniature painting.
        </p>
        <PulseDown />
      </div>
      <section className={aboutMeStyles.images}>
        {jsonImages.map(({ title, imageJson, background }) => {
          return (
            <div key={uuid()}>
              <div className={aboutMeStyles.divider}>
                <TriggerOnScroll>
                  <p className={aboutMeStyles.slide}>{title}</p>
                  <ImageSlider
                    title={imageJson.title}
                    images={imageJson.images}
                    className={aboutMeStyles.slide}
                  />
                </TriggerOnScroll>
              </div>
              <div
                className={aboutMeStyles["back-image"]}
                style={{ backgroundImage: `url(${background})` }}
              ></div>
            </div>
          );
        })}
      </section>
      <div className={aboutMeStyles.divider}></div>
    </div>
  );
};

export default AboutMe;
