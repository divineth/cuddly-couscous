import React from "react";
import styles from "./hero.module.css";
import Ninja from "../../../assets/image/hollow-ichigo.png";
import Ichigo from "../../../assets/image/hero.svg";
import Socials from "../../common/socials";
import GreenText from "../../common/greenText/greenText";

function Hero() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <div className={styles.content__left}>
          <img
            src={Ichigo}
            alt="Shonen"
            className={styles.content__left_image}
          />
          <div className={styles.content__left_text}>
            <GreenText>COMING SOON</GreenText>
          </div>
          <Socials />
        </div>
        <div className={styles.content__right}>
          <img
            src={Ninja}
            alt="Ninja"
            className={styles.content__right_image}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
