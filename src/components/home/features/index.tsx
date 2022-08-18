import React from "react";
import GreenText from "../../common/greenText/greenText";
import styles from "./features.module.css";
import { Heading } from "../../common/uitils/index";

import FeaturesSelector from "../selector-component";

function Features() {
  return (
    <>
      <section className={`${styles.container}`}>
        <div className={`${styles.content} max-width`}>
          <Heading>
            <span>
              Ichigo <GreenText>Features</GreenText>
            </span>
          </Heading>
          <div className={styles.features__selector}>
            <FeaturesSelector className={styles.features__selector_comp} />
          </div>
        </div>
      </section>
      <section className={styles.containerBottom}></section>
    </>
  );
}

export default Features;
