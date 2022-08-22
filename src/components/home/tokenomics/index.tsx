import React from "react";
import styles from "./tokenomics.module.css";
import Button from "../../common/nbutton";
import TokenomicsBox from "../../common/tokenomics-box";

function Tokenomics() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <div className="flex md:hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24">
          <span>Ichigo Tokenomics</span>
        </div>
        <div className={styles.content__left}>
          <div className={styles.content__left_row}>
            <TokenomicsBox text={"$ICHIGO"} className="w-[267px]"/>
            <TokenomicsBox text={"1 Billion Supply"} />
          </div>
          <div className={styles.content__left_row}>
            <TokenomicsBox text={"6% Tax"} />
            <TokenomicsBox text={"20% Burn"} className="w-[267px]"/>
          </div>

        </div>

        <div className={styles.content__right}>
          <div className="md:flex hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24">
            <span>Ichigo Tokenomics</span>
          </div>
          <div className={styles.content__right_body}>
            <p className={styles.content__right_text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </p>
            <Button
              href="https://app.uniswap.org/#/swap?outputCurrency=0x31538c865E4e4Ed6Aa847988dE7AC1c4eeC656D6&chain=mainnet"
              buttonAs="a"
              target="_blank"
              className={styles.button}
            >
              Buy Ichigo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;