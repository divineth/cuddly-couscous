import React from "react";
import styles from "./hero.module.css";
import Ninja from "../../../assets/image/hollow-ichigo.png";
import Ichigo from "../../../assets/image/hero.svg";
import Button from "../../common/nbutton";

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
            UNLEASH TRUE POWER
          </div>
          <div className={styles.content_left_buttons}>
            <Button
              href={require("../../../assets/doc/ichigo_wp_rev1.pdf")}
              buttonAs="a"
              target="_blank"
              buttonType="secondary"
              className={styles.button}
            >
              WHITEPAPER
            </Button>
            <Button
              href="#"
              buttonAs="a"
              target="_blank"
              className={styles.button}
            >
              Buy Ichigo
            </Button>
          </div>
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
