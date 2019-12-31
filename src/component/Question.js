import React from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

export default function Question({
  question,
  options,
  currentQuestion,
  type = "radio",
  value,
  id,
  handleSliderChange
}) {
  return (
    <div className="mb-5">
      <div className="d-flex">
        <h3 className="mr-3">{currentQuestion}.</h3>
        <div>
          <h3>{question}</h3>
          {type === "range" ? (
            <div className="slider">
              <Slider
                min={0}
                max={100}
                value={value}
                onChangeStart={() => {}}
                onChange={value => handleSliderChange(value, id)}
                onChangeComplete={() => {}}
              />
              <div className="value">{value}%</div>
            </div>
          ) : (
            options.map(option => (
              <div classNamme="form-check" key={option}>
                <input
                  type={type}
                  className="form-check-input"
                  id={option}
                  value={option}
                  name="radio"
                />
                <label className="form-radio-label" for={option}>
                  {option}
                </label>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
