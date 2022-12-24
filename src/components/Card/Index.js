import React from "react";
import styles from "./../MyPortfolio/MyPortfolio.module.scss";
import { motion } from "framer-motion";
const Card = ({ src, href, myPortfolioView }) => {
  return (
    <motion.article
      className={styles.card}
      variants={myPortfolioView}
      custom={3}
    >
      <motion.img src={src} className={styles.card} alt={src} />
      <motion.div className={styles.avatar}></motion.div>
      <motion.a className={styles.button_view} href={href}>
        View porject
      </motion.a>
    </motion.article>
  );
};

export default Card;
