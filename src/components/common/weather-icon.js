import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const types = {
  sunny: "sun-o",
  cloudy: "cloud",
  snowy: "snowflake-o",
  rainy: "shower"
};

const WeatherIcon = ({ type, size }) => {
  return <Icon name={types[type]} size={size} />;
};

WeatherIcon.defaultProps = {
  size: 32
};

export default WeatherIcon;
