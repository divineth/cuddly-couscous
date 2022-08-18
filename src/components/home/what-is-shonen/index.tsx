import React from "react";
import styles from "./what.module.css";
import About from "../../../assets/image/ichigo-about.png";
import GreenText from "../../common/greenText/greenText";
import { Heading } from "../../common/uitils";

function WhatIsShonen() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <Heading className="flex md:hidden">
          <span>
            <GreenText>What</GreenText> is Ichigo?
          </span>
        </Heading>
        <div className={styles.content__left}>
          <img
            src={About}
            alt="Power UP"
            className={styles.content__left_image}
          />
        </div>
        <div className={styles.content__right}>
          <Heading className="md:flex hidden">
            <span>
              <GreenText>What</GreenText> is Ichigo?
            </span>
          </Heading>
          <p className={styles.content__right_text}>
            Shonen is the premier Deployment-as-a-Service dApp facilitating the
            management of cryptocurrency projects by streamlining and automating
            the most common steps a successful project goes through. The Shonen
            dApp offers an administrative view of a token deployment, wherein
            the user has access to various tools that aid in and facilitate
            smooth project launches.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIsShonen;
