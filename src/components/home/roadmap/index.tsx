import React from "react";
import GreenText from "../../common/greenText/greenText";
import { Heading } from "../../common/uitils/index";
import styles from "./roadmap.module.css";
import cloudLong from "../../../assets/image/long-cloud.png";
import RoadMaps from "./roadmaps";

function RoadMap() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} w-full`}>
        <Heading>
          <span>
            <GreenText>Ichigo</GreenText> Roadmap
          </span>
        </Heading>
        <div className={styles.in__roadmap__container}>
          {/* <img src={cloudLong} alt="cloud" className={styles.roadmap__cloud} /> */}
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

