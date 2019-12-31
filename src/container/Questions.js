import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Question from "../component/Question";

class Questions extends Component {
  state = {
    questions: [
      {
        id: 1,
        question:
          "Which one of the following categories of the Food & Drink industry most closely reflects the type of business you currently operate in or intend to operate in?",
        options: [
          "Bakery",
          "Bagel shop",
          "Bar",
          "Bottled water company",
          "Brewery",
          "Bubble tea shop",
          "Butcher's shop",
          "Cafeteria",
          "Café",
          "Caterer",
          "Cheese shop",
          "Convenience store",
          "Deli",
          "Dessert shop",
          "Distillery",
          "Doughnut shop",
          "Farmers' market",
          "Food consultant",
          "Food delivery service",
          "Food service distributor",
          "Food stall",
          "Food wholesaler",
          "Personal chef",
          "Restaurant",
          "Sandwich shop",
          "Smoothie and juice bar",
          "Snack van",
          "Supermarket/Convenience store",
          "Wine, beer and spirits shop",
          "Winery/Vineyard"
        ],
        value: "",
        type: "radio"
      },
      {
        id: 2,
        question:
          "Which of the following sales channels would you consider using for reservations? Please select all that apply.",
        options: [
          "Telephone Booking",
          "Online Booking via Website",
          "Third Party Platforms (OpenTable, Yelp, Quandoo, etc.)",
          " Delivery Services (Deliveroo, Uber Eats, Just Eat, etc.)",
          "Catering"
        ],
        value: "",
        type: "checkbox"
      },
      {
        id: 3,
        question:
          "Which of the following marketing channels do you consider using for marketing to your customers? Please select all that apply.",
        options: [
          "Website",
          "Instagram Ads",
          "Facebook Ads",
          "Google +",
          "Google Ads",
          "Yelp",
          "Email newsletters",
          "Coupon Services",
          "Blogs"
        ],
        type: "checkbox",
        value: ""
      },
      {
        id: 4,
        question:
          "Approximately what percentage of revenue from sales do you expect to come from customers booking online against in-store customers?",
        options: ["Online", "In-store"],
        type: "range",
        value: 50
      },
      {
        id: 5,
        question:
          "Approximately what percentage of your in-store customers eat on premise against those who choose to take out?",
        options: ["In store", "Take-out"],
        type: "range",
        value: 50
      }
    ],
    currentQuestion: 1
  };

  handleSliderChange = (value, i) => {
    const copyQuestions = [...this.state.questions];
    copyQuestions[i].value = value;
    this.setState({
      questions: copyQuestions
    });
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
            key={questions[currentQuestion - 1].question}
            type={questions[currentQuestion - 1].type}
            value={questions[currentQuestion - 1].value}
            id={questions[currentQuestion - 1].id - 1}
            handleSliderChange={this.handleSliderChange}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Questions);
