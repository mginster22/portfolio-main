import React from "react";
import cx from "classnames";
import styles from "./About.module.scss";
const About = ({ theme }) => {
  const aboutMe = cx(styles.about_me, {
    [styles.about_me_dark]: theme === "dark",
  });
  return (
    <div className={aboutMe}>
      <div className={styles.wrapper}>
        <h2>About me</h2>
        <p>
          I’m a Front-End Developer located in Dnepr. I have a serious passion
          for UI effects, animations and creating intuitive, dynamic user
          experiences.
          <br />
          Well-organised person, problem solver, independent employee with high
          attention to detail. Fan of MMA, outdoor activities, TV series.
          <br />
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </p>
      </div>
    </div>
  );
};

export default About;
