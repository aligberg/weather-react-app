import React from "react";

export default function WeatherForecastDay(props) {
  let forecastIcon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
        <img src={forecastIcon} alt={props.data.weather[0].description}></img>
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-max">{maxTemp()}</span> | <span className="WeatherForecast-min">{minTemp()}</span>
          </div>
    </div>
  );
}