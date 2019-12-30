import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Question from "../component/Question";

class Questions extends Component {
  state = {
    questions: [
      { question: "lorem 1", options: ["a", "b", "c", "d"] },
      { question: "lorem 2", options: ["a", "b", "c", "d"] },
      { question: "lorem 3", options: ["a", "b", "c", "d"] },
      { question: "lorem 4", options: ["a", "b", "c", "d"] }
    ],
    currentQuestion: 1
  };

  handleNextQuestionChange = () => {
    const { questions, currentQuestion } = this.state;
    if (currentQuestion < questions.length) {
      this.setState({
        currentQuestion: currentQuestion + 1
      });
    }
  };

  handlePreviousQuestionChange = () => {
    const { currentQuestion } = this.state;
    if (currentQuestion !== 1) {
      this.setState({
        currentQuestion: currentQuestion - 1
      });
    }
  };

  handleSubmit = () => {
    this.props.history.push("/recommendation");
  };

  render() {
    const { questions, currentQuestion } = this.state;

    return (
      <div className="container mt-5">
        <h2 className="mb-4">Questions</h2>
        <div className="mb-4">
          <button
            className="btn btn-warning mr-5"
            onClick={this.handlePreviousQuestionChange}
          >
            Previous Question
          </button>
          <button
            className={`btn ${
              currentQuestion === questions.length
                ? "btn-success"
                : "btn-primary"
            }`}
            onClick={
              currentQuestion === questions.length
                ? this.handleSubmit
                : this.handleNextQuestionChange
            }
          >
            {currentQuestion === questions.length ? "Submit" : "Next Question"}
          </button>
        </div>
        <div className="">
          <Question
            question={questions[currentQuestion - 1].question}
            options={questions[currentQuestion - 1].options}
            currentQuestion={currentQuestion}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Questions);
