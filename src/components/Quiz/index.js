import React, { useState } from "react";
import cx from "classnames";
import Game from "./Game";
import questions from "../../assets/dataJson/quiz.json";
import Result from "./Result";
import styles from "./Quiz.module.scss";

const Quiz = ({ theme ,toogleTheme}) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVarianst = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const quiz = cx(styles.quiz, {
    [styles.quiz_dark]: theme === "dark",
  });
  return (
    <section className={quiz} >
      {step !== questions.length  ? (
        <Game
          step={step}
          setStep={setStep}
          question={question}
          questions={questions}
          onClickVarianst={onClickVarianst}
          theme={theme}
        />
      ) : (
        <Result
          questions={questions}
          correct={correct}
          theme={theme}
        />
      )}
    </section>
  );
};

export default Quiz;
