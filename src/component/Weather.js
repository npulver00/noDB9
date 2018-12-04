import React, { Component } from "react";
import axios from "axios";

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      weatherInput: ""
    };
  }
  weatherZip = zipcode => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=266df8f857ddc333b877141a890232fd`
      )
      .then(response => {
        this.setState({
          weather: [{ name: response.data.name, temp: response.data.main.temp }]
        });
      });
  };

  getWeather = value => {
    this.setState({
      weatherInput: value
    });
  };

  render() {
    let newWeather = this.state.weather.map(weather => {
      return (
        <div className="weather">
          <h4>{weather.name}</h4>
          <p>
            {Math.floor(weather.temp)}
            <span>&#8457;</span>
          </p>
        </div>
      );
    });
    return (
      <div>
        
        <input
          className="weatherButton"
          placeholder="zip code"
          onChange={event => this.getWeather(event.target.value)}
        />
        <button onClick={() => this.weatherZip(this.state.weatherInput)}>
          {" "}
          Get Weather{" "}
        </button>
        {newWeather}
      </div>
    );
  }
}
