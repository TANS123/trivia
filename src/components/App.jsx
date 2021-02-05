import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var questionNumber = 0;
  return (
    <div className="app">
      Trivia!
      <Question text={data[questionNumber]["question"]["text"]} />
      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return <div>{props.text}</div>;
}

function NextQuestion() {
  return <button>Next Question</button>;
}

export default App;
