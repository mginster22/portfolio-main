import React, { useState } from "react";
import blogData from "../../assets/dataJson/blog.json";
import cx from "classnames";
import BlogCard from "./BlogCard";
import styles from "./Blog.module.scss";
import { motion } from "framer-motion";

const Blog = ({ theme }) => {
  const data = blogData.map((data) => data);
  const [reply, setReply] = useState(data[0].question);
  const blog = cx(styles.blog, {
    [styles.blog_dark]: theme === "dark",
  });

  const blogview = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: {
      x: -1000,
      opacity: 0,
    },
  };

  return (
    <section className={blog}>
      <motion.div
        className={styles.wrapper_acardion}
        whileHover="visible"
        initial="hidden"
      >
        {blogData.map(({ answer, question }, index) => (
          <BlogCard
            question={question}
            answer={answer}
            reply={reply}
            setReply={setReply}
            key={index}
            theme={theme}
            blogviev={blogview}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Blog;
