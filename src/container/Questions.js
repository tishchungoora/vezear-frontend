import React, { Component } from "react";
import Question from "../component/Question";

export default class Questions extends Component {
  state = {
    questions: [
      { question: "lorem 1", options: [], answer: "" },
      { question: "lorem 2", options: [], answer: "" },
      { question: "lorem 3", options: [], answer: "" },
      { question: "lorem 4", options: [], answer: "" }
    ]
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Questions</h2>
        <div>
          {this.state.questions.map(res => (
            <Question question={res.question} />
          ))}
        </div>
      </div>
    );
  }
}
