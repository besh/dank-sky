import { TEMPERATURE_BREAKPOINTS } from "constants/what-to-wear-ranges";

export const faToCe = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const getClothingSuggestion = (currentTemperature) => {
  const { suggestion = "" } = TEMPERATURE_BREAKPOINTS.find(
    ({ temperature }) => {
      return currentTemperature > temperature;
    }
  );

  return suggestion;
};

export const parseTemperature = (temperature) => {
  return `${Math.round(temperature)}°`;
};
