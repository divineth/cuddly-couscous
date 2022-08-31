import React from "react";
import styles from "./what.module.css";
import About from "../../../assets/image/ichigo-about.png";

function WhatIsShonen() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <div className="flex md:hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24">
          <span>About Us</span>
        </div>

        <div className={styles.content__right}>
          <div className="md:flex hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24">
            <span>About Us</span>
          </div>
          <p className={styles.content__right_text}>
            Ichigo has declared war against hollows. Valued holders will become
            members of the soul society and the inner circle. This will grant
            them access to the full force of Defi at their fingertips. We are
            providing a unique liquidity locker which will ensure that we can
            significantly lower the barrier to entry for new startups and
            hardworking teams in the defi space in order to help them achieve
            their targets.
          </p>
        </div>
        <div className={styles.content__left}>
          <img
            src={About}
            alt="Power UP"
            className={styles.content__left_image}
          />
        </div>
      </div>
    </section>
  );
}

export default WhatIsShonen;
