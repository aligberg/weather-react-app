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
    <div className="col-6">
      <div className="row">
          <div className="col-6">
            <div className="temp">
              <h1>
                <span>{Math.round(props.fahrenheitTemp)}</span>
                <sup>
                  <small>
                   °F | <a href="/" onClick={showCelsius}>°C</a>
                  </small>
                </sup>
              </h1>
            </div>
          </div>
              <div className="col-6">
                <ul>
                  <li>
                    Feels like <span>{Math.round(props.fahrenheitFeelsLike)}°</span>
                  </li>
                  <li>
                    Hi/Lo:{" "}
                    <span>
                      {Math.round(props.fahrenheitMax)}°/{Math.round(props.fahrenheitMin)}°
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>);
  } else {
    let celsiusTemp = (props.fahrenheitTemp - 32) * 5 / 9;
    let celsiusFeels = (props.fahrenheitFeelsLike - 32) * 5 / 9;
    let celsiusMax = (props.fahrenheitMax - 32) * 5 / 9;
    let celsiusMin = (props.fahrenheitMin - 32) * 5 / 9;
    return (
    <div className="col-6">
      <div className="row">
        <div className="col-6">
        <div className="temp">
          <h1>
            <span>{Math.round(celsiusTemp)}</span>
            <sup>
              <small>
              <a href="/" onClick={showFahrenheit}>°F</a> | °C
              </small>
            </sup>
          </h1>
            </div>
            </div>
              <div className="col-6">
                <ul>
                  <li>
                    Feels like <span>{Math.round(celsiusFeels)}°</span>
                  </li>
                  <li>
                    Hi/Lo:{" "}
                    <span>
                      {Math.round(celsiusMax)}°/{Math.round(celsiusMin)}°
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>);
  }
}