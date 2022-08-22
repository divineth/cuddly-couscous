import React from "react";
import styles from "./more.module.css";
import Extra from "../../../assets/image/extra-details.png";
import { ReactComponent as Checkmark } from "../../../assets/icons/checkmark.svg";

function MoreDetails() {
  const details: { text: string }[] = [
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper. iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto ",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper. iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto ",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper. iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto ",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper. iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto ",
    },
  ];
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <div className="flex md:hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24">
          <span>Lorem Ipsum</span>
        </div>
        <div className={styles.content__left}>
          <img
            src={Extra}
            alt="Power UP"
            className={styles.content__left_image}
          />
        </div>

        <div className={styles.content__right}>
          <div className="md:flex hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24">
            <span>Lorem Ipsum</span>
          </div>
          {details.map(({ text }, i) => (
            <div key={i} className={styles.content__right_body}>
              <Checkmark className="w-16" />
              <p className={styles.content__right_text}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoreDetails;
