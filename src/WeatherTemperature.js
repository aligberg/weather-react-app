import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
 
  if (unit === "fahrenheit") {
    return (
      <div className="temp">
        <h1>
          <span>{Math.round(props.fahrenheitTemp)}</span>
          <sup>
            <small>
              °F | <a href="/" onClick={showCelsius}>°C</a>
            </small>
          </sup>
        </h1>
      </div>);
  } else {
    let celsiusTemp = (props.fahrenheitTemp - 32) * 5 / 9;
    return (
      <div className="temp">
        <h1>
          <span>{Math.round(celsiusTemp)}</span>
          <sup>
            <small>
            <a href="/" onClick={showFahrenheit}>°F</a> | °C
            </small>
          </sup>
        </h1>
      </div>);
  }
}