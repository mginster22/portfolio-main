import React from "react";
import cx from "classnames";
import styles from "../Blog.module.scss";
import { motion } from "framer-motion";
const BlogCard = ({
  reply,
  setReply,
  answer,
  question,
  theme,
  blogviev,
  key,
}) => {
  const textAnswer = cx(styles.text_answer, {
    [styles.text_answer_active]: reply === question,
  });
  const blogCard = cx(styles.blog_card, {
    [styles.blog_card_dark]: theme === "dark",
  });

  return (
    <motion.article className={blogCard} onClick={() => setReply(question)}>
      <motion.h2>{question}</motion.h2>
      {reply && (
        <motion.p className={textAnswer} custom={key}>
          {answer}
        </motion.p>
      )}
    </motion.article>
  );
};

export default BlogCard;
