import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      weatherImg: "http://openweathermap.org/img/wn/04d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min
    });
  }
  

  if (weatherData.ready) {
    return (
      <div className="Weather">
            <FormattedDate date={weatherData.date} />
        <form className="Search mt-2">
          <div className="form-row search-bar" autofocus="off">
            <div className="col-10 bar">
              <input
                className="form-control search"
                type="search"
                placeholder="Search cities..."
                aria-label="Search"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="icons col-auto">
              <button type="submit" value="search" className="btn fabutton">
                <i className="fas fa-search searchIcon p-1"></i>
              </button>
              <button type="submit" className="btn fabutton" id="geolocation">
                <i className="fas fa-map-marker-alt locationIcon p-1"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="row city-name">
          <h2>{weatherData.city}</h2>
        </div>
        <div className="row city-highlights">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div className="temp">
                  <h1>
                    <span>{Math.round(weatherData.temperature)}</span>
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
                    Feels like <span>{Math.round(weatherData.feelsLike)}°</span>
                  </li>
                  <li>
                    Hi/Lo:{" "}
                    <span>
                      {Math.round(weatherData.max)}°/{Math.round(weatherData.min)}°
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
                  src={weatherData.weatherImg}
                  alt={weatherData.description}
                  id="icon"
                />
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <span className="text-capitalize">{weatherData.description}</span>
                  </li>
                  <li>
                    Humidity: <span>{weatherData.humidity}%</span>
                  </li>
                  <li>
                    Wind: <span>{Math.round(weatherData.wind)} km/h</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "54cae2bb0d0b7168b158d795db1580ea";
    let unit = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
