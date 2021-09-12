import React from "react";


export default function WeatherInfo(props) {
  return (
    <div className="weatherData">
    <div className="row city-name">
          <h2>{props.data.city}</h2>
        </div>
        <div className="row city-highlights">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div className="temp">
                  <h1>
                    <span>{Math.round(props.data.temperature)}</span>
                    <sup>
                      <small>
                        °<a href="/">F</a> / <a href="/">C</a>
                      </small>
                    </sup>
                  </h1>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Feels like <span>{Math.round(props.data.feelsLike)}°</span>
                  </li>
                  <li>
                    Hi/Lo:{" "}
                    <span>
                      {Math.round(props.data.max)}°/{Math.round(props.data.min)}°
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-6 conditions">
            <div className="row">
              <div className="col-6">
                <img
                  src={props.data.weatherImg}
                  alt={props.data.description}
                  id="icon"
                />
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <span className="text-capitalize">{props.data.description}</span>
                  </li>
                  <li>
                    Humidity: <span>{props.data.humidity}%</span>
                  </li>
                  <li>
                    Wind: <span>{Math.round(props.data.wind)} km/h</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  </div>);
}