import React from "react";
import styles from "./features.module.css";

function Features() {
  const features: { image: any; title: string; description: string }[] = [
    {
      image: require("../../../assets/image/feature-01.png"),
      title: "Liquidity Locking",
      description:
        "Ichigo presents an innovative liquidity locker that aims to protect both developers and investors.",
    },
    {
      image: require("../../../assets/image/feature-04.png"),
      title: "Seamless Upgrades",
      description:
        "Ichigo allows unlimited seamless upgrades to a project's contract while transferring liquidity along with the upgrades.",
    },
    // {
    //   image: require("../../../assets/image/feature-02.png"),
    //   title: "Lorem Ipsum",
    //   description:
    //     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ",
    // },
    // {
    //   image: require("../../../assets/image/feature-05.png"),
    //   title: "Lorem Ipsum",
    //   description:
    //     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ",
    // },
    // {
    //   image: require("../../../assets/image/feature-03.png"),
    //   title: "Lorem Ipsum",
    //   description:
    //     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ",
    // },
    // {
    //   image: require("../../../assets/image/feature-06.png"),
    //   title: "Lorem Ipsum",
    //   description:
    //     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ",
    // },
  ];
  return (
    <>
      <section className={`${styles.container}`}>
        <div className={`${styles.content} max-width`}>
          <div className="flex pt-16 items-center md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24">
            <span>Product Features</span>
          </div>
          <div className={`${styles.features}`}>
            {features.map(({ image, title, description }, i) => (
              <div key={i} className={`${styles.feature}`}>
                <div className={`${styles.content__left}`}>
                  <img src={image} className="h-20 w-20 object-cover" alt="" />
                </div>
                <div className={`${styles.content__right}`}>
                  <div className={`${styles.heading}`}>{title}</div>
                  <div className={`${styles.description}`}>{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.containerBottom}></section>
    </>
  );
}

export default Features;
