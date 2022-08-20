import React, { FC } from "react";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/image/hero.svg";
import Button from "../button";

const NavBar: FC = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <NavLink to="/" id="top">
          <Logo className={"w-40"} />
        </NavLink>

        <div className={styles.mobile_nav}>
          <NavButtons />
        </div>

        <div className={styles.nav_container}>
          <NavButtons />
        </div>
      </div>
    </section>
  );
};

export default NavBar;

const NavButtons: FC = () => {
  return (
    <>
      <Button
        buttonAs="a"
        href="#"
        className={`${styles.button}`}
        target="_blank"
      >
        Buy Ichigo
      </Button>
    </>
  );
};
