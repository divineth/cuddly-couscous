import React, { FC } from "react";
import styles from "./footer.module.css";
import handBall from "../../../assets/image/footer.png";
import footerBg from "../../../assets/image/footer-bg.svg";
import { ReactComponent as TrippleDart } from "../../../assets/icons/daggers.svg";
import { ReactComponent as FooterSeparator } from "../../../assets/image/footer-separator.svg";
import Button from "../button";
import Socials from "../socials";
const Footer: FC = () => {
  return (
    <section
      className={`${styles.container}`}
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className={`${styles.content} max-width`}>
        <div className={`${styles.footer_left}`}>
          <a href="#top">
            <img src={handBall} alt="handBall" />
          </a>
        </div>
        <div className={styles.main_content}>
          <div className={styles.footer_center}>
            <h2 className={styles.title}>
              <TrippleDart className={styles.trippleDart} />
              Quick Links
            </h2>
            <div className={styles.quick_links}>
              <ul>
                <li>
                  <a
                    href={require("../../../assets/doc/shonen_lp_final.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    target="_blank"
                    aria-disabled
                    rel="noopener noreferrer"
                  >
                    Audit (Coming Soon)
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/shonen-io/bce00864dabe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Staking
                  </a>
                </li>
              </ul>
            </div>
            <Socials />
          </div>
          <div className="flex items-center justify-center">
            <FooterSeparator />
          </div>
          <div className={styles.footer_right}>
            <h2 className={styles.title}>
              <TrippleDart className={styles.trippleDart} />
              Get Started
            </h2>
            <div className={styles.action_buttons}>
              <Button
                href="https://app.uniswap.org/#/swap?outputCurrency=0x31538c865E4e4Ed6Aa847988dE7AC1c4eeC656D6&chain=mainnet"
                buttonType="primary"
                buttonAs="a"
                className={styles.button}
                target="_blank"
              >
                Buy Ichigo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
