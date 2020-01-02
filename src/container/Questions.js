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
          { name: "Bakery" },
          { name: "Bagel shop" },
          { name: "Bar" },
          { name: "Bottled water company" },
          { name: "Brewery" },
          { name: "Bubble tea shop" },
          { name: "Butcher's shop" },
          { name: "Cafeteria" },
          { name: "Café" },
          { name: "Caterer" },
          { name: "Cheese shop" },
          { name: "Convenience store" },
          { name: "Deli" },
          { name: "Dessert shop" },
          { name: "Distillery" },
          { name: "Doughnut shop" },
          { name: "Farmers' market" },
          { name: "Food consultant" },
          { name: "Food delivery service" },
          { name: "Food service distributor" },
          { name: "Food stall" },
          { name: "Food wholesaler" },
          { name: "Personal chef" },
          { name: "Restaurant" },
          { name: "Sandwich shop" },
          { name: "Smoothie and juice bar" },
          { name: "Snack van" },
          { name: "Supermarket/Convenience store" },
          { name: "Wine, beer and spirits shop" },
          { name: "Winery/Vineyard" }
        ],
        value: "",
        type: "radio"
      },
      {
        id: 2,
        value: [],
        question:
          "Which of the following sales channels would you consider using for reservations? Please select all that apply.",
        options: [
          { name: "Telephone Booking" },
          { name: "Third Party Platforms (OpenTable, Yelp, Quandoo, etc.)" },
          { name: " Delivery Services (Deliveroo, Uber Eats, Just Eat, etc.)" },
          { name: "Catering" },
          {
            name: "Online Booking via Website"
            // subQuestion: {
            //   id: 2.1,
            //   question: "Do you already have a website ?",
            //   options: [
            //     {
            //       name: "yes",
            //       value: false,
            //       subQuestion: {
            //         id: "2.1.1",
            //         question:
            //           "Are you looking to add a booking functionality to your website",
            //         options: [{ name: "yes" }, { name: "no" }]
            //       }
            //     },
            //     {
            //       name: "no",
            //       value: false,
            //       subQuestion: {
            //         id: "2.1.2",
            //         question:
            //           "Would your like us to help your build a website with booking functionality",
            //         options: [{ name: "yes" }, { name: "no" }]
            //       }
            //     }
            //   ]
            // }
          }
        ],
        type: "checkbox"
      },
      {
        id: 3,
        question:
          "Which of the following marketing channels do you consider using for marketing to your customers? Please select all that apply.",
        options: [
          { name: "Website" },
          { name: "Instagram Ads" },
          { name: "Facebook Ads" },
          { name: "Google +" },
          { name: "Google Ads" },
          { name: "Yelp" },
          { name: "Email newsletters" },
          { name: "Coupon Services" },
          { name: "Blogs" }
        ],
        type: "checkbox",
        value: []
      },
      {
        id: 4,
        question:
          "Approximately what percentage of revenue from sales do you expect to come from customers booking online against in-store customers?",
        options: [{ name: "Online" }, { name: "In-store" }],
        type: "range",
        value: 50
      },
      {
        id: 5,
        question:
          "Approximately what percentage of your in-store customers eat on premise against those who choose to take out?",
        options: [{ name: "In store" }, { name: "Take-out" }],
        type: "range",
        value: 50
      }
    ],
    currentQuestion: 1
  };

  handleCheck = (name, id, type) => {
    const copyQuestions = [...this.state.questions];
    if (type === "radio") {
      copyQuestions[id].value = name;
    } else {
      copyQuestions[id].value.includes(name)
        ? (copyQuestions[id].value = copyQuestions[id].value.filter(
            eachName => eachName !== name
          ))
        : copyQuestions[id].value.push(name);
    }
    this.setState({
      questions: copyQuestions
    });
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
            handleCheck={this.handleCheck}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Questions);
