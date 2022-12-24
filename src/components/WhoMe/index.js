import React from "react";
import cx from "classnames";
import ScrollDown from "../ScrollDown";
import { Link } from "react-router-dom";
import styles from "./WhoMe.module.scss";
import { motion } from "framer-motion";
const WhoMe = ({ theme }) => {
  const whoMeEl = cx(styles.who_me, {
    [styles.who_me_light]: theme === "dark",
  });
  const scrollLeft = cx(styles.scrol_text_left, styles.text_pop_up_top);
  const scrollRight = cx(styles.scrol_text_right, styles.text_pop_up_top);

  const whoMeView = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      x: -1000,
      opacity: 1,
    },
  };
  return (
    <motion.section
      className={whoMeEl}
      id="who"
      whileInView="visible"
      initial="hidden"
    >
      <motion.h1 variants={whoMeView} custom={1}>
        Hi,
        <br />
        I&#8217;m Vlad,<span>frontend-developer</span>
      </motion.h1>
      <Link to="/contact" className={styles.link}>
        Contact
      </Link>
      <motion.div
        animate={{ y: 40 }}
        transition={{
          ease: "easeOut",
          duration: 2,
          delay: 0.1,
          repeat: Infinity,
        }}
        className={scrollLeft}
      >
        <ScrollDown />
      </motion.div>
      <motion.div
        className={scrollRight}
        animate={{ y: 40 }}
        transition={{
          ease: "easeOut",
          duration: 2,
          delay: 0.1,
          repeat: Infinity,
        }}
      >
        <ScrollDown />
      </motion.div>
    </motion.section>
  );
};

export default WhoMe;
