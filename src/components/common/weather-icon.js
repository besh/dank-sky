import React from "react";
import Fog from "@carbon/icons/svg/32/fog.svg";
import Sun from "@carbon/icons/svg/32/sun.svg";
import Moon from "@carbon/icons/svg/32/moon.svg";
import Cloudy from "@carbon/icons/svg/32/cloudy.svg";
import RainHeavy from "@carbon/icons/svg/32/rain--heavy.svg";
import Sleet from "@carbon/icons/svg/32/sleet.svg";
import SnowHeavy from "@carbon/icons/svg/32/snow--heavy.svg";
import Windy from "@carbon/icons/svg/32/windy.svg";
import PartlyCloudy from "@carbon/icons/svg/32/partly-cloudy.svg";
import PartlyCloudyNight from "@carbon/icons/svg/32/partly-cloudy--night.svg";

const types = {
  "clear-day": Sun,
  "clear-night": Moon,
  "partly-cloudy-day": PartlyCloudy,
  "partly-cloudy-night": PartlyCloudyNight,
  cloudy: Cloudy,
  rain: RainHeavy,
  sleet: Sleet,
  snow: SnowHeavy,
  wind: Windy,
  fog: Fog,
};

const WeatherIcon = ({ type, size }) => {
  const Icon = types[type];
  return <Icon fill="orange" width={size} height={size} />;
};

WeatherIcon.defaultProps = {
  size: 32,
};

export default WeatherIcon;
