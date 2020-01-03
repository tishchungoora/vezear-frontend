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
  handleSliderChange,
  handleCheck
}) {
  return (
    <div className="mb-5">
      <div className="d-flex">
        <h3 className="mr-3">{currentQuestion}.</h3>
        <div>
          <h3>{question}</h3>
          {type === "range" ? (
            <div className="slider ml-3">
              <Slider
                min={0}
                max={100}
                value={value}
                onChangeStart={() => {}}
                onChange={value => handleSliderChange(value, id)}
                onChangeComplete={() => {}}
              />
              <div className="value">
                {options[0].name} {value}%, {options[1].name} {100 - value}%
              </div>
            </div>
          ) : (
            options.map(option => (
              <>
                <div className="form-check ml-3" key={option.name}>
                  <input
                    type={type}
                    className="form-check-input ml-3"
                    id={option.name}
                    value={option.name}
                    checked={
                      option.name === value || value.includes(option.name)
                    }
                    name="radio"
                    onChange={() => handleCheck(option.name, id, type)}
                  />
                  <label className="form-radio-label ml-5" htmlFor={option}>
                    {option.name}
                  </label>
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
