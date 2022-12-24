import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "../WhoMe/WhoMe.module.scss";
const ScrollDown = ({className}) => {
  return (
    <div className={styles.scroll_item}>
      <div className={className}>
        scroll down
        <span>
          <AiOutlineArrowDown />
        </span>
      </div>
    </div>
  );
};

export default ScrollDown;
