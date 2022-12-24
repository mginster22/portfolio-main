import React from "react";
import cx from "classnames";
import SkillsItem from "./SkillsItem";
import styles from "./Skills.module.scss";

const Skills = ({ theme }) => {
  const skills = cx(styles.skills, {
    [styles.skills_black]: theme === "dark",
  });
  const borderRed = cx(styles.border_skills, styles.border_red);
  const borderBlue = cx(styles.border_skills, styles.border_blue);
  const borderGreen = cx(styles.border_skills, styles.border_green);
  const card=cx(styles.card,{
    [styles.card_black]:theme==='dark'
  })
  return (
    <div className={skills}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Skills & Experience</h2>
          <p>
            I create responsive websites that are fast, easy to use, and built
            with best practices. The main area of my expertise is front-end
            development, HTML, CSS, JS,React,Redux building small and medium web
            apps, custom plugins, features, animations, and coding interactive
            layouts.
            <br />I also have development experience with back end and databases
          </p>
        </div>
        <div className={styles.skills_inner}>
          <div className={styles.wrapper_skills}>
            <SkillsItem title="Front-end" style={borderRed} />
            <SkillsItem title="Back-end" style={borderBlue} />
            <SkillsItem title="ReactJS" style={borderGreen} />
          </div>
          <div className={styles.list_card}>
            <article className={card}>
              <h2>Full-stack developer</h2>
              <p>
                Traning Fresh-code <br />
                <span>2022</span>
              </p>
              <p className={styles.text}>was trained in Full-stack developer</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
