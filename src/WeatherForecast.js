import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.dats);
  }
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKey = `54cae2bb0d0b7168b158d795db1580ea`
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <img src={props.icon} alt="forecastIcon" className="forecastIcon"></img>
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-max">80°</span> | <span className="WeatherForecast-min">68°</span>
          </div>
        </div>
      </div>
    </div>);
}