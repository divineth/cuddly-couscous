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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem.
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
