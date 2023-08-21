import { useEffect, useState } from "react";
import imageSliderAnimation from "./imageSliderAnimation.module.css";
import styles from "./nft.module.css";

import { imagesFirst } from "./img/imageSleder";
import { imagesSecond } from "./img/imageSleder";

export const NftSection = () => {
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
    <>
      <section className={styles.blockInfo}>
        {/* <div className={styles.nftContent}> */}
          <div className={styles.textConteiner}>
            <p>
              Prepare to be transported beyond the boundaries of traditional
              gaming with the StarRunner Ecosystem – the beating heart that
              drives the adrenaline-charged galactic P2E odyssey of
              'StarRunner.'
            </p>
          </div>
          <div className={styles.imageSlider}>
          <div className={imageSliderAnimation.firstImageSlider}>
            {imagesFirst.map((image, index) => (
              <img
                key={index}
                className={`${imageSliderAnimation.fade} ${
                  startFirstAnimation === index
                    ? imageSliderAnimation.visible
                    : ""
                }`}
                src={image}
                alt="Image"
              />
            ))}
          </div>
          <div className={imageSliderAnimation.secondImageSlider}>
            {imagesSecond.map((image, index) => (
              <img
                key={index}
                className={`${imageSliderAnimation.fade} ${
                  starSecondAnimation === index
                    ? imageSliderAnimation.visible
                    : ""
                }`}
                src={image}
                alt="Image"
              />
            ))}
          </div>
          </div>
        {/* </div> */}
      </section>
      <div className={styles.runningText}></div>
    </>
  );
};
