import React, { FC } from "react";
import styles from "./socials.module.css";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../../assets/icons/telegram.svg";
import { ReactComponent as Medium } from "../../../assets/icons/medium.svg";

const Socials: FC = () => {
  return (
    <div className={styles.social_links}>
      <a
        href="https://twitter.com/shonen_token"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Twitter />
      </a>
      <a
        href="https://t.me/shonenverify"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Telegram />
      </a>
      <a
        href="https://medium.com/shonen-io"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Medium />
      </a>
    </div>
  );
};

export default Socials;
