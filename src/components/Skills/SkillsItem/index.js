import React from "react";
import cx from 'classnames'
import styles from "../Skills.module.scss";

const SkillsItem = ({ title ,style}) => {
  const border = cx(styles.border)
  return (
    <div className={styles.skills_elem}>
      <h3>{title}</h3>
      <div className={border}>
        <div className={style}></div>
      </div>
    </div>
  );
};

export default SkillsItem;
