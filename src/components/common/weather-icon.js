import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const types = {
  "clear-day": "sun-o",
  "clear-night": "moon-o",
  "partly-cloudy-day": "cloud",
  "partly-cloudy-night": "cloud",
  cloudy: "cloud",
  rain: "shower",
  sleet: "snowflake-o",
  snow: "snowflake-o",
  wind: "cloud",
  fog: "cloud"
};

const WeatherIcon = ({ type, size }) => {
  return <Icon name={types[type]} size={size} />;
};

WeatherIcon.defaultProps = {
  size: 32
};

export default WeatherIcon;
