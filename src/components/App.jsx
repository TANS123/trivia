import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  const [answerDisplayed, setAnswerDisplayed] = useState(false);

  function fun() {
    setAnswerDisplayed(true);
  }
  const [questionNumber, setQuestionNumber] = useState(0);

  function questionTracker() {
    setQuestionNumber(questionNumber + 1);
    setAnswerDisplayed(false); // 0
    // setQuestionNumber(0)
  }

  return (
    <div className="app">
      Trivia!
      <div>
        <Question
          text={data[questionNumber]["question"]["text"]}
          answerChoices={data[questionNumber]["question"]["choices"]}
        />
      </div>
      <div>
        <button onClick={fun}>Click for the correct answer</button>
        <CorrectAnswer
          shouldDisplay={answerDisplayed}
          answer={
            data[questionNumber]["question"]["choices"][
              data[questionNumber]["question"]["correct_choice_index"]
            ]
          }
        />
      </div>
      <div>
        <button onClick={questionTracker}>Next Question</button>
      </div>
    </div>
  );
}

function Question(props) {
  return (
    <div>
      {props.text}
      <Answer answerChoices={props.answerChoices} />
    </div>
  );
}

function CorrectAnswer(props) {
  let answerText;
  if (props.shouldDisplay) {
    answerText = props.answer;
  } else {
    answerText = "unanswered";
  }
  return <div>The correct answer is {answerText}</div>;
}

function Answer(props) {
  return (
    <div>
      <button>{props.answerChoices[0]}</button>
      <div>{props.answerChoices[1]}</div>
      <div>{props.answerChoices[2]}</div>
      <div>{props.answerChoices[3]}</div>
    </div>
  );
}

export default App;
