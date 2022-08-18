import React from "react";
import styles from "./hero.module.css";
import Typewriter from "typewriter-effect";
import Ninja from "../../../assets/image/hollow-ichigo.png";
import Ichigo from "../../../assets/image/hero.svg";
import Button from "../../common/button";
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
            <GreenText>Unleash</GreenText>
            <span className={styles.spacer}></span>
            <Typewriter
              options={{
                strings: [
                  "true power",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={styles.content_left_buttons}>
            <Button
              href={require("../../../assets/doc/shonen_lp_final.pdf")}
              buttonAs="a"
              target="_blank"
              buttonType="secondary"
              className={styles.button}
            >
              Whitepaper
            </Button>
            <Button
              href="https://app.uniswap.org/#/swap?outputCurrency=0x31538c865E4e4Ed6Aa847988dE7AC1c4eeC656D6&chain=mainnet"
              buttonAs="a"
              target="_blank"
              className={styles.button}
            >
              Buy ICHIGO
            </Button>
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
