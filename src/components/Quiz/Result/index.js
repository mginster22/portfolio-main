import React from "react";
import { IoIosWine } from "react-icons/io";
import cx from 'classnames'
import styles from "../Quiz.module.scss";
const Result = ({ questions, correct,theme  }) => {
  const wrapperQuiz = cx(styles.wrapper_quiz,{
    [styles.wrapper_quiz_dark]:theme==='dark'
  })
  return (
    <div className={wrapperQuiz}>
      <div className={styles.result}>
        <IoIosWine size="4rem" />
        <h1>
          You guessed <span className={styles.correct}>{correct}</span> answers
          out of{" "}
          <span className={styles.questions_length}>{questions.length}</span>
        </h1>
        <button
          onClick={() => {
            document.location.reload();
          }}
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default Result;
