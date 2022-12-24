import React from "react";
import Blog from "../components/Blog";
import ContactMe from "../components/ContactMe";
import MyPortfolio from "../components/MyPortfolio";
import Quiz from "../components/Quiz";
import WhoMe from "../components/WhoMe";
import styles from "../components/ContactMe/ContactMe.module.scss";
const Home = ({ theme }) => {
  return (
    <div id="home">
      <WhoMe theme={theme} />
      <MyPortfolio theme={theme} />
      <Blog theme={theme} />
      <Quiz theme={theme} />
      <ContactMe
        theme={theme}
        className={[styles.contact_me_420, styles.title_420, styles.form_420]}
      />
    </div>
  );
};

export default Home;
