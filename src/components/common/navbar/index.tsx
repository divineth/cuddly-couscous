import React, { FC } from "react";
import styles from "./nav.module.css";
import { Menu, Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/image/logo2.svg";
import { ReactComponent as Humburger } from "../../../assets/icons/mobile-nav.svg";
import Button from "../nbutton";
import { DartWhite } from "../uitils";

const NavBar: FC = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <NavLink to="/" id="top">
          <Logo />
        </NavLink>

        <div className={styles.mobile_nav}>
          <Popover className="">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                text-white group px-3 p  y-2 rounded-md inline-flex items-center   outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <Humburger className={styles.mobile_nav_icon} />
                </Popover.Button>

                <Popover.Panel className="absolute z-10 w-screen px-4 mt-3 left-0 right-0 ">
                  <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-4 bg-primary-black p-4">
                      <div className="flex flex-col">
                        <h1 className="text-xl font-vermin-reg flex gap-2">
                           Dapps
                        </h1>
                        <a
                          href={require("../../../assets/doc/ichigo_wp_rev1.pdf")}
                          rel="noopener noreferrer"
                          className={styles.mobile__nav_a}
                        >
                          <div className="">
                            <p className={styles.mobile__nav_text}>Staking</p>
                          </div>
                        </a>
                        <a
                          href="/#"
                          rel="noopener noreferrer"
                          aria-disabled
                          className={styles.mobile__nav_a}
                        >
                          <div className="">
                            <p className={styles.mobile__nav_text}>
                              Mobile App (WIP)
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className={styles.mobile__bottom}>
                        <NavButtons />
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>

        <div className={styles.nav_container}>
          <Menu as="div" className={`relative text-left`}>
            <Menu.Button className={styles.nav_item_docs}>
              <Button
                buttonAs="button"
                className={`${styles.button}`}
                target="_blank"
                buttonFormat="alt"
              >
                Dapps
              </Button>
            </Menu.Button>

            <Menu.Items className={` ${styles.menu__items}`}>
              <div className="py-4 px-2">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={require("../../../assets/doc/ichigo_wp_rev1.pdf")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        active ? "text-white" : "tertiary-white-t31"
                      } ${styles.menu__item}`}
                    >
                      {active ? (
                        <DartWhite
                          className={styles.menu__item_icon}
                          aria-hidden="true"
                        />
                      ) : (
                        <span className={styles.menu__item_icon}></span>
                      )}
                      Staking
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled
                      className={`${
                        active ? "text-white" : "text-tertiary-white-t31"
                      } ${styles.menu__item}`}
                    >
                      {active ? (
                        <DartWhite
                          className={styles.menu__item_icon}
                          aria-hidden="true"
                        />
                      ) : (
                        <span className={styles.menu__item_icon}></span>
                      )}
                      Mobile App (WIP)
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
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
