import React, { Component } from "react";
import Constants from "../../../constants/index";
import axios from "axios";
import { Icon } from "antd";

const WEATHER_URL_ASSET = Constants.WEATHER_URL_ASSET;
const DATE_NAME = Constants.DATE_NAME;
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: "",
        lng: ""
      },
      error: undefined,
      weatherData: undefined,
      resultData: {
        title: undefined,
        description: undefined,
        icon: undefined,
        tempC: undefined,
        tempF: undefined,
        day: undefined,
        place: undefined
      },
      isFetching: false,
      isGeoEnabled: true
    };
  }
  componentDidMount() {
    this.getLocation();
  }
  getLocation = () => {
    if (navigator.geolocation) {
      this.setState({
        isGeoEnabled: true
      });
      navigator.geolocation.getCurrentPosition(this.updatePosition);
    } else {
      this.setState({
        isGeoEnabled: false,
        error: "Geolocation is not supported by this browser."
      });
    }
  };
  getCurrentDateTime = () => {
    const { resultData } = this.state;
    const current = new Date();
    const day = current.getDay();
    resultData.day = DATE_NAME[day];
    this.setState({
      resultData
    });
  };

  updatePosition = position => {
    const crd = position.coords;
    this.setState(
      {
        location: {
          lat: crd.latitude,
          lng: crd.longitude
        }
      },
      () => {
        this.getWeather();
      }
    );
  };

  calCelcius = () => {
    const { weatherData, resultData } = this.state;
    let celcius = Math.floor(weatherData.main.temp - 273.15);
    resultData.tempC = celcius;
    this.setState({
      resultData
    });
  };

  renderWeather() {
    this.calCelcius();
    this.getCurrentDateTime();
    const { weatherData, resultData } = this.state;
    const weather = weatherData.weather;
    if (weather.length > 0) {
      const firstCondition = weather[0];
      resultData.title = firstCondition.main;
      resultData.description = firstCondition.description;
      resultData.icon = firstCondition.icon;
      resultData.place = weatherData.name;
      this.setState({
        resultData
      });
    }
  }

  getWeather = async () => {
    const { location } = this.state;
    const API_KEY = Constants.WEATHER_KEY;

    this.setState({
      isFetching: true
    });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${API_KEY}`
      )
      .then(res => {
        setTimeout(() => {
  
          this.setState(
            {
              weatherData: res.data,
              isFetching: false
            },
            () => {
              this.renderWeather();
            }
          );
        }, 800);
      })
      .catch(err => {
        console.log("SS: ", err.status);
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({
            isFetching: false
          });
        }, 800);
      });
  };

  render() {
    const { resultData, isFetching, isGeoEnabled, error } = this.state;
    return (
      <div id="weather-container">
        <span className="animated slideInLeft faster text-title-thin">Today Weather</span>
        <div className="weather-content">
          {isGeoEnabled === false ? (
            <div className="animated slideInUp faster weather-description">
              <span className="content-span" title="weather-day">
                {error}
              </span>
            </div>
          ) : isFetching ? (
            <div className="animated slideInUp faster weather-description">
              <Icon className="loading-data" type="loading" />
            </div>
          ) : resultData !== undefined ? (
            <div className="animated bounceIn faster weather-description">
              <div className="weather-title-divide">
                <span className="content-span" title="weather-main-type">
                  {resultData.place}
                </span>
                <span className="content-span" title="weather-div">
                  |
                </span>
                <span className="content-span" title="weather-day">
                  {resultData.day}
                </span>
              </div>
              <span
                className="content-span weather-place"
                title="weather-place"
              >
                {resultData.title}
              </span>

              {resultData.icon !== undefined && (
                <img
                  src={`${WEATHER_URL_ASSET}${resultData.icon}@2x.png`}
                  alt={`weather-icon-${resultData.icon}`}
                  title={`weather-icon-${resultData.icon}`}
                />
              )}

              {resultData.tempC !== undefined && (
                <span
                  className="content-span  weather-celcius"
                  title="weather-deg"
                >
                  {resultData.tempC} &deg; C
                </span>
              )}

              <span className="content-span" title="weather-description">
                {resultData.description}
              </span>
            </div>
          ) : (
            <div className="weather-description">
              <span
                className="content-span"
                title="weather-description-no-data"
              >
                No Data
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Weather;
