import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import imageSliderStyles from "../styles/components/ImageSlider.module.scss";
import { useTheme } from "../context/themeContext";
import Image from "next/image";

interface Iprops {
  className?: string;
  title: string;
  images: string[];
}

const ImageSlider: FC<Iprops> = ({ title, images, className }) => {
  const numberOfImages = images.length;
  const [prevImage, setPrevImage] = useState("");
  const [image, setImage] = useState("");
  const [nextImage, setNextImage] = useState("");
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [opacity, setOpacity] = useState<string>(imageSliderStyles.opaque);

  const { theme } = useTheme();

  const timeout = 250;

  const handleFade = () => {
    setOpacity(imageSliderStyles.clear);
  };

  const handleClick = (event: MouseEvent) => {
    const { id } = event.currentTarget;
    let newIndex = 0;

    if (id === "right-arrow") {
      index === numberOfImages - 1 ? (newIndex = 0) : (newIndex = index + 1);
    } else if (id === "left-arrow") {
      index === 0 ? (newIndex = numberOfImages - 1) : (newIndex = index - 1);
    }
    setNextIndex(newIndex);
    handleFade();
  };

  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;
    setNextIndex(parseInt(id));
    handleFade();
  };

  const handleAnimationEnd = () => {
    setIndex(nextIndex);
    setOpacity(imageSliderStyles.opaque);
  };

  useEffect(() => {
    let prev = index - 1;
    if (prev < 0) prev = numberOfImages - 1;
    let next = index + 1;
    if (next === numberOfImages) next = 0;
    setPrevImage(images[prev]);
    setImage(images[index]);
    setNextImage(images[next]);
  }, [index, images, numberOfImages]);

  return (
    <div
      className={
        className
          ? `${imageSliderStyles["slider-container"]} ${className}`
          : imageSliderStyles["slider-container"]
      }
      data-theme={theme}
    >
      <button
        onClick={handleClick}
        id="left-arrow"
        disabled={opacity === "clear"}
        aria-label="previous image"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <Image src={prevImage} alt={title} height="0" width="0" />
      <Image
        src={image}
        alt={title}
        height={400}
        className={opacity}
        onAnimationEnd={handleAnimationEnd}
      />
      <Image src={nextImage} alt={title} height="0" width="0" />
      <form id={title} className={imageSliderStyles.dots}>
        {images.map((_, i) => (
          <div className={imageSliderStyles["radio-container"]} key={uuid()}>
            <input
              type="radio"
              name={title}
              id={i.toString()}
              onChange={radioHandler}
              checked={i === index}
            />
            <span className={imageSliderStyles.radio}></span>
          </div>
        ))}
      </form>
      <button
        onClick={handleClick}
        id="right-arrow"
        disabled={opacity === "clear"}
        aria-label="next image"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default ImageSlider;
