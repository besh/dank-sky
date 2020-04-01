import React from "react";
import { View } from "react-native";
import Header from "./src/components/common/header";
import CurrentWeather from "./src/components/containers/current-weather";

export default function App() {
  return (
    <View>
      <Header />
      <CurrentWeather />
    </View>
  );
}
