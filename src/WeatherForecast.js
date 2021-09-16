import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]) 
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 7) {
            return (
              <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
            </div>
            );
          } else {
            return null;
          }
        })}
        </div>
      </div>);
  } else {
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKey = "9922e3d7012703109c706f2f291e8fb4"
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}