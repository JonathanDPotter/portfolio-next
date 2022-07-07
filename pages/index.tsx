import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useTheme } from "../context/themeContext";
import homeStyles from "../styles/pages/home.module.scss";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [fade, setFade] = useState(true);

  const changePage = (navigator: () => void) => {
    setFade(true);
    setTimeout(() => {
      navigator();
    }, 250);
  };

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div
      className={`${homeStyles.home} page`}
      data-theme={theme}
      data-location={router.pathname}
    >
      <div className={homeStyles.container}>
        <img
          src="https://res.cloudinary.com/skarsnik/image/upload/v1655749376/portfolioAssets/homePage_hpzuur.jpg"
          alt="man in glasses smiling"
        />
        <nav>
          <Button
            text="Projects"
            size={4}
            onClick={() => changePage(() => router.push("/projects"))}
          />
          <Button
            text="About Me"
            size={4}
            onClick={() => changePage(() => router.push("/aboutme"))}
          />
          <Button
            text="Resume"
            size={4}
            onClick={() => changePage(() => router.push("/resume"))}
          />
          <Button
            text="Contact"
            size={4}
            onClick={() => changePage(() => router.push("/contact"))}
          />
          <Button
            text="About"
            size={4}
            onClick={() => changePage(() => router.push("/about"))}
          />
        </nav>
      </div>
    </div>
  );
};

export default Home;
