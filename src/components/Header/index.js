import React from "react";
import whiteLogo from "../../assets/images/vk.png";
import blackLogo from "../../assets/images/vk-black.png";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import cx from "classnames";
import styles from "./Header.module.scss";

const data = [
  {
    title: "About",
    to: "/about",
  },
  {
    title: "My skills",
    to: "/mySkills",
  },
  {
    title: "Work",
    to: "/work",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

const Header = ({ theme, switchTheme }) => {
  const switcher = cx(styles.slider, styles.round);
  const menuTheme = cx(styles.menu, {
    [styles.menu_light]: theme === "light",
    [styles.menu_black]: theme === "black",
  });
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={menuTheme}>
            <Link to="/">
              <img
                src={theme === "dark" ? blackLogo : whiteLogo}
                className={styles.logo}
                alt="theme"
              />
            </Link>

            <ul className={styles.list}>
              {data.map(({ to, title }, index) => (
                <li key={index} className={styles.list_item}>
                  <Link to={to}>{title}</Link>
                </li>
              ))}
            </ul>
            <div className={styles.social}>
              {theme === "light" ? (
                <a href="https://www.instagram.com/korochanskiiy22/">
                  <AiFillInstagram size="30px" />
                </a>
              ) : (
                <a href="https://www.instagram.com/korochanskiiy22/">
                  <AiOutlineInstagram size="30px" />
                </a>
              )}
              <a href="https://github.com/mginster22">
                <BsGithub size="26px" />
              </a>
            </div>
          </div>
          <div className={styles.switcher}>
            <label className={styles.switch}>
              <input type="checkbox" onClick={switchTheme} />
              <span className={switcher}></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
