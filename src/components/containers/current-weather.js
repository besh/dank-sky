import React from "react";
import {
  faToCe,
  getClothingSuggestion,
  parseTemperature,
} from "../../utils/temperature";
import { SETTING_VALUES } from "constants/settings";
import { useStore } from "state";
import WeatherSnapshot from "components/common/weather-snapshot";

const CurrentWeather = ({ data }) => {
  const [{ unit }] = useStore();
  const { icon, temperature, summary, apparentTemperature } = data;

  let _temp = temperature;

  if (unit === SETTING_VALUES.fahrenheit) {
    _temp = faToCe(_temp);
  }

  const suggestion = getClothingSuggestion(_temp);
  const parsedTemperature = parseTemperature(temperature);
  const parsedFeelsTemperature = parseTemperature(apparentTemperature);

  return (
    <WeatherSnapshot
      temperature={parsedTemperature}
      feels={parsedFeelsTemperature}
      suggestion={suggestion}
      icon={icon}
      summary={summary}
    />
  );
};

export default CurrentWeather;
