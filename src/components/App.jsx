import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  const [answerDisplayed, setAnswerDisplayed] = useState(true);
  // let answerDisplayed = false;
  var questionNumber = 0;
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
        <CorrectAnswer shouldDisplay={answerDisplayed} />
      </div>
      <div>
        <NextQuestion />
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
    answerText = "the answer";
  } else {
    answerText = "unanswered";
  }

  return (
    <div>
      <button>Click for the correct answer</button>
      <div>The correct answer is {answerText}</div>
    </div>
  );
}

function NextQuestion() {
  return <button>Next Question</button>;
}

function Answer(props) {
  return (
    <div>
      <div>{props.answerChoices[0]}</div>
      <div>{props.answerChoices[1]}</div>
      <div>{props.answerChoices[2]}</div>
      <div>{props.answerChoices[3]}</div>
    </div>
  );
}

export default App;
