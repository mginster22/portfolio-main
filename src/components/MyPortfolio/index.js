import React from "react";
import cx from "classnames";
import Card from "../Card/Index";
import greensit from "../../assets/images/greensite.png";
import bike from "../../assets/images/bike.png";
import squad from "../../assets/images/squad.png";
import anim from "../../assets/images/bgimage.png";
import todo from "../../assets/images/todo.png";
import { FaArrowUp } from "react-icons/fa";
import styles from "./MyPortfolio.module.scss";
import { motion } from "framer-motion";
const MyPortfolio = ({ theme }) => {
  const data = [
    "https://github.com/mginster22/GreenSite",
    "https://github.com/mginster22/LandingBike",
    "https://github.com/mginster22/pagesqdlhepl",
    "https://github.com/mginster22/fd-todolist-project",
    "https://animationproject-fbd98.web.app/",
  ];
  const portfolioTheme = cx(styles.portfolio, {
    [styles.portfolio_dark]: theme === "dark",
  });

  const myPortfolioView = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      x: -1000,
      opacity: 0,
    },
  };
  return (
    <motion.section
      className={portfolioTheme}
      whileInView="visible"
      initial="hidden"
    >
      <div whileInView="visible" initial="hidden">
        <motion.h2
          className={styles.title}
          variants={myPortfolioView}
          custom={1}
        >
          My Portfolio
        </motion.h2>
        <motion.p variants={myPortfolioView} custom={2}>
          A small gallery of my projects that I made up. I made them in the
          learning phase
        </motion.p>
      </div>
      <motion.div
        className={styles.list}
        whileInView="visible"
        initial="hidden"
      >
        <Card src={anim} href={data[4]} myPortfolioView={myPortfolioView} />
        <Card src={greensit} href={data[0]} myPortfolioView={myPortfolioView} />
        <Card src={bike} href={data[1]} myPortfolioView={myPortfolioView} />
        <Card src={squad} href={data[2]} myPortfolioView={myPortfolioView} />
        <Card src={todo} href={data[3]} myPortfolioView={myPortfolioView} />
      </motion.div>

      <a className={styles.scroll_arrow_up} href="#home">
        <FaArrowUp size="20px" />
      </a>
    </motion.section>
  );
};

export default MyPortfolio;
