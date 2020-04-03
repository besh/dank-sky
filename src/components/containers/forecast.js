import React from "react";
import { DARK_SKY_API_KEY } from "react-native-dotenv";
import { useFetch } from "api/fetch";
import { useStore } from "state";
import { SETTING_VALUES } from "constants/settings";
import CurrentWeather from "components/containers/current-weather";
import WeekForecast from "components/containers/week-forecast";

const units = {
  [SETTING_VALUES.fahrenheit]: "us",
  [SETTING_VALUES.celsius]: "si"
};

const Forecast = () => {
  const [{ coords, unit }] = useStore();
  const { latitude, longitude } = coords;

  const res = useFetch(
    `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${latitude},${longitude}?units=${units[unit]}`
  );

  if (!res.response || res.error || res.response?.error) {
    return null;
  }

  const { currently, minutely, daily } = res.response;

  const currentWeatherData = {
    icon: minutely.icon,
    summary: minutely.summary,
    temperature: currently.temperature
  };

  return (
    <>
      <CurrentWeather data={currentWeatherData} />
      <WeekForecast data={daily.data} />
    </>
  );
};

export default Forecast;
