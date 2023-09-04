import { useEffect, useState } from "react";
import styles from "./hero.module.css";

import { imagesFirst } from "./img/imageSlider";
import { imagesSecond } from "./img/imageSlider";

export const HeroSection = () => {
  const [startFirstAnimation, setStartFirstAnimation] = useState(0);
  const [starSecondAnimation, setStartSecondAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartFirstAnimation((startFirstAnimation + 1) % imagesFirst.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [startFirstAnimation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartSecondAnimation((starSecondAnimation + 1) % imagesFirst.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [starSecondAnimation]);

  return (
      <section className={styles.blockHero}>
        <div className={styles.lineTop}></div>

        <div className={styles.textConteiner}>
          <p>
            Prepare to be transported beyond the boundaries of traditional
            gaming with the StarRunner Ecosystem – the beating heart that drives
            the adrenaline-charged galactic P2E odyssey of 'StarRunner.'
          </p>
        </div>
        <div className={styles.imageSlider}>
          <div className={styles.firstImageSlider}>
            {imagesFirst.map((image, index) => (
              <img
                key={index}
                className={`${styles.fade} ${
                  startFirstAnimation === index ? styles.visible : ""
                }`}
                src={image}
                alt="Image"
              />
            ))}
          </div>
          <div className={styles.secondImageSlider}>
            {imagesSecond.map((image, index) => (
              <img
                key={index}
                className={`${styles.fade} ${
                  starSecondAnimation === index ? styles.visible : ""
                }`}
                src={image}
                alt="Image"
              />
            ))}
          </div>
        </div>
        <div className={styles.lineBottom}></div>
        <div className={styles.runningText}></div>
      </section>
  );
};
