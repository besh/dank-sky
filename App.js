import React from "react";
import { View, ScrollView } from "react-native";
import Header from "./src/components/common/header";
import CurrentWeather from "./src/components/containers/current-weather";
import WeekForecast from "./src/components/containers/week-forecast";

const weekData = [
  {
    temp: 20,
    sky: "rainy",
    day: "mon",
    suggestion: "Raincoat, shorts"
  },
  {
    temp: 26,
    sky: "sunny",
    day: "tue",
    suggestion: "Naked"
  },
  {
    temp: 2,
    sky: "snowy",
    day: "wed",
    suggestion: "Yeti fur"
  },
  {
    temp: 18,
    sky: "cloudy",
    day: "thr",
    suggestion: "T-shirt, shorts"
  },
  {
    temp: 14,
    sky: "sunny",
    day: "fri",
    suggestion: "T-shirt, pants"
  },
  {
    temp: 17,
    sky: "sunny",
    day: "sat",
    suggestion: "T-shirt, shorts"
  },
  {
    temp: 10,
    sky: "rainy",
    day: "sun",
    suggestion: "Raincoat, long sleeves"
  }
];

export default function App() {
  return (
    <View>
      <Header />
      <ScrollView>
        <CurrentWeather />
        <WeekForecast data={weekData} />
      </ScrollView>
    </View>
  );
}
