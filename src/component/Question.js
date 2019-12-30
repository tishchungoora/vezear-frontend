import React from "react";

export default function Question({ question, options, currentQuestion }) {
  return (
    <div className="mb-5">
      <div className="d-flex">
        <h3 className="mr-3">{currentQuestion}.</h3>
        <div>
          <h3>{question}</h3>
          {options.map(option => (
            <div class="form-check">
              <input
                type="radio"
                class="form-check-input"
                id={option}
                value={option}
                name="radio"
              />
              <label class="form-radio-label" for={option}>
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
