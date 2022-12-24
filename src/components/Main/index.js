import React from "react";
import styles from "./Main.module.scss";
import { useScroll, motion } from "framer-motion";

const Main = ({ children }) => {
  const { scrollYProgress } = useScroll();
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div>{children}</div>
    </div>
  );
};

export default Main;
