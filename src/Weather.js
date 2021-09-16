import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast"



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      weatherImg: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min
    });
    document.body.classList = "";

    if (response.data.weather[0].icon === "01d") {
      document.body.classList.add("clearDay");
    } else if (response.data.weather[0].icon === "01n") {
      document.body.classList.add("clearNight");
    } else if (response.data.weather[0].icon === "02d" || "03d") {
      document.body.classList.add("cloudyDay");
    } else if (response.data.weather[0].icon === "10d") {
      document.body.classList.add("rainyDay");
    } 
  }
  function search() {
    const apiKey = "9922e3d7012703109c706f2f291e8fb4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
          <FormattedDate date={weatherData.date} />
        <form className="Search mt-2" onSubmit={handleSubmit}>
          <div className="form-row search-bar" autofocus="off">
            <div className="col-10 bar">
              <input
                className="form-control search"
                type="search"
                placeholder="Search cities..."
                aria-label="Search"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast icon={weatherData.weatherImg} coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    search();
    return null;
  }
}
