import React from "react";
import cx from 'classnames'
import styles from "../Quiz.module.scss";
const Game = ({ step, setStep, question, questions, onClickVarianst ,theme}) => {
const wrapperQuiz = cx(styles.wrapper_quiz,{
  [styles.wrapper_quiz_dark]:theme==='dark'
})
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <div className={wrapperQuiz}>
      <div className={styles.progress}>
        <div className={styles.progress_border} style={{width:`${percentage}%`}}></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((data, index) => (
          <li key={index} onClick={() => onClickVarianst(index)}>
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
