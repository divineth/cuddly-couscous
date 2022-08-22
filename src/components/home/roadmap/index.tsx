import React from "react";
import styles from "./roadmap.module.css";
import RoadMaps from "./roadmaps";

function RoadMap() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} w-full`}>
        <div className="flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24 lg:w-full lg:px-16">
          <span>Implementation Roadmap</span>
        </div>
        <div className={styles.in__roadmap__container}>
          <RoadMaps />
        </div>
      </div>
      <div className={styles.out__roadmap__container}>
        <RoadMaps />
      </div>
    </section>
  );
}

export default RoadMap;
