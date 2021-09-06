import React from "react";
import Search from "./Search";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The temperature in ${response.data.name} is ${Math.round(response.data.main.temp)}°F.`)
  }
  let apiKey = "54cae2bb0d0b7168b158d795db1580ea";
  let unit = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);
  
  let weatherData = {
    city: "New York City",
    temperature: 70,
    feelsLike: 71,
    date: "Sunday, August 29 2021",
    time: "11:40",
    description: "Overcast",
    weatherImg: "http://openweathermap.org/img/wn/04d@2x.png",
    humidity: 81,
    wind: 1,
    max: 76,
    min: 70
  };
  return (
    <div className="Weather">
      <div className="row date-time">
        <div className="col-6">
          <div className="date" id="date">
            {weatherData.date}
          </div>
        </div>
        <div className="col-6">
          <div className="time" id="time">
            {weatherData.time}
          </div>
        </div>
      </div>
      <Search />
      <div className="row city-name">
        <h2>{weatherData.city}</h2>
      </div>
      <div className="row city-highlights">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <div className="temp">
                <h1>
                  <span>{weatherData.temperature}</span>
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
                  Feels like <span>{weatherData.feelsLike}°</span>
                </li>
                <li>
                  Hi/Lo:{" "}
                  <span>
                    {weatherData.max}°/{weatherData.min}°
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-6 conditions">
          <div className="row">
            <div class="col-6">
              <img
                src={weatherData.weatherImg}
                alt={weatherData.description}
                id="icon"
              />
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <span>{weatherData.description}</span>
                </li>
                <li>
                  Humidity: <span>{weatherData.humidity}%</span>
                </li>
                <li>
                  Wind: <span>{weatherData.wind} km/h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
